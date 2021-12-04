import os
from . import kidney_solver
from .history import History
from csv import DictReader
import random 
import numpy as np
from time import sleep

# wait time
wait_time = 4

# list of patients in limbo "cycles":[[],[],[]], "chains":[[],[],[]]
awaiting_operations = {"cycles": [],"chains": []}

# essentially all details regarding patients
pairs = dict()

# set of active pairs
active_pairs = set()

# keep a history class
history = History()

# keeping track of all people
people = {}
count = 0

# graphs of the patient donor pairs
# dictionary of adjacency pairs more info can be found in generate_graph
graph = {}
graph_ndd = {}

def check_waiting_operations(round):
    successful = []
    unsuccessful = []

    chains_to_check = []
    cycles_to_check = []
    # check which chains and cycles are due for operation
    for chains in awaiting_operations["chains"]:
        for due_date, c in chains:
            if due_date == round:
                chains_to_check.append(c)
    
    for cycles in awaiting_operations["cycles"]:
        for due_date, c in cycles:
            if due_date == round:
                cycles_to_check.append(c)

    # do some things to figure out which were successful and which were not successful

    for cycle in cycles_to_check:
        length = len(cycle)
        for i in range(length-1):
            if random.random() < edges[(cycle[i], cycle[i+1])]:
                unsuccessful.extend(cycle)
            if random.random() < edges[(cycle[length - 1], cycle[0])]:
                unsuccessful.extend(cycle)
        successful.extend(cycle)

    # CHECK THIS – IT MIGHT BE WRONG
    for chain in chains_to_check:
        length = len(chain)
        for i in range(length-1):
            if random.random() < edges[(chain[i], chain[i+1])]:
                successful.append(chain[i+1])
            else:
                unsuccessful.extend(chain[i+1: ])

    # remove the successful from the active pairs

    active_pairs.difference_update(set(successful))

    # add the unsuccessful back to the active set

    active_pairs.update(set(unsuccessful))

    return successful, unsuccessful

def check_deaths():
    deaths = []
    #check patients active in the pool
    for id in active_pairs:
        if random.random() < float(people[id]["p_die"]):
            deaths.append(id)
    #check patients who are inactive and awaiting operation
    for chains in awaiting_operations["chains"]:
        for _, chain in chains:
            for id in chain:
                if random.random() < float(people[id]["p_die"]):
                    deaths.append(id)
    for cycles in awaiting_operations["cycles"]:
        for _, cycle in cycles:
            for id in cycle:
                if random.random() < float(people[id]["p_die"]):
                    deaths.append(id)
    return deaths

def check_cycles_chains():
    cycles = []
    chains = []
    on_cycles = True
    li = []
    with open('cycles_chains.txt', 'r') as f:
        myfile = f.read().splitlines()
        for line in myfile:
            if line == 'chains':
                on_cycles = False
            if line == '':
                cycles.append(li) if on_cycles else chains.append(li)
                li = []
            try:
                vtx = int(line)
                li.append(vtx)
            except:
                pass

        print(cycles, chains)
        return cycles, chains

# generates failure probabilities for each edge
def generate_failure_prob(constant):
    
    if constant:
        return 0.7
    else:
        failure = np.random.normal(0.7, 0.1)
        while failure < 0 or failure > 1:
            failure = np.random.normal(0.7, 0.1)
        
        return failure

def generate_graph(input_file, round):

    # graph[vertex] = [list of vertices that edges outward extend to]
    
    global graph
    global graph_ndd
    global edges
    
    graph = {}
    graph_ndd = {}
    edges = {}

    data = {}
    altru_num = 0
    pair_num = 0

    with open(input_file, 'r') as csvfile:
        reader = DictReader(csvfile)
        # index | patient | donor | p_die 
        for row in reader:
            data[row["index"]] = {
                "index": row["index"],
                "patient": row["patient"],
                "donor": row["donor"],
                "p_die": float(row["p_die"])
            }

            if row["patient"] == "None":
                altru_num += 1

            else:
                pair_num +=1

            graph[row["index"]] = []
            graph_ndd[row["index"]] = []

    # add edges between donors and patients
    num_edges = 0
    num_edges_ndd = 0

    for i in data:
        for j in data:
            
            if i == j:
                continue

            if data[i]["donor"] == "O" or data[i]["donor"] in data[j]["patient"]:
                if data[i]["patient"] != 'None':
                    graph[i].append(j)
                    edges[(i, j)] = generate_failure_prob(True)
                    num_edges += 1

                if data[i]["patient"] == 'None':
                    graph_ndd[i].append(j)
                    edges[(i, j)] = generate_failure_prob(True)
                    num_edges_ndd += 1

    f = open(f'graphs/graph{round}.input', "w")
    f.write("\t".join([str(len(people)), str(num_edges)]))
    f.write("\n")

    for i in graph: 
        
        # to modify the weights
        weight = 1

        for j in graph[i]:
            f.write("\t".join([str(i), str(j), str(weight)]))
            f.write("\n")

    f.write("\t".join([str(-1), str(-1), str(-1)]))
    f.write("\n")
    f.close()

    f = open(f'graphs/graph{round}.ndds', "w")
    f.write("\t".join([str(altru_num), str(num_edges_ndd)]))
    f.write("\n")

    for i in graph_ndd: 

        for j in graph_ndd[i]:
            f.write("\t".join([str(i), str(j), str(weight)]))
            f.write("\n")

    f.write("\t".join([str(-1), str(-1)]))
    f.write("\n")
    f.close()

    return f'graphs/graph{round}.input', f'graphs/graph{round}.ndds'

# def generate_input(add_num, altru_num, remove_list=[], add_list=[], round=0, count=0, people={}, p_die_mu=0.3, p_die_sd=0.15, p_die_update = 1.1):
def generate_input(add_num, altru_num, remove_list=[], add_list=[], round=0, p_die_mu=0.2, p_die_sd=0.1, p_die_update = 1.04):
    global people
    global count
    global active_pairs
    current_data = {}

    if round != 0:
        csvfile = open(f'./working/working{round - 1}.csv', "r")
        reader = DictReader(csvfile)
        
        for row in reader:
            current_data[row["index"]] = {
                "index": row["index"],
                "patient": row["patient"],
                "donor": row["donor"],
                "p_die": float(row["p_die"])
            }
            # change probability person dies each round
            current_data[row["index"]]["p_die"] *= p_die_update

    # delete people from list
    for vertex in remove_list:
        del current_data[str(vertex)]
        active_pairs.remove(vertex)

    # add people back to list
    for vertex in add_list:
        current_data[vertex] = people[vertex]
        active_pairs.add(vertex)

    # add new people
    for i in range(add_num):
        # 45% O, 40% A, 11% B, 4% AB
        random_list = ["O" for i in range(45)] + ["A" for i in range(40)] + ["B" for i in range(11)] + ["AB" for i in range(4)]
        while True:
            patient = random.choice(random_list)
            donor = random.choice(random_list)

            if not patient == "AB" and donor not in patient and not donor == "O":
                break

        # change probability someone dies generation
        p_die = np.random.normal(p_die_mu, p_die_sd)
        while p_die < 0 or p_die > 1:
            p_die = np.random.normal(p_die_mu, p_die_sd)

        people[count] = {
            "index": count,
            "patient": patient,
            "donor": donor,
            "p_die": p_die
        }
        active_pairs.add(count)

        current_data[count] = people[count]
        count += 1

    # add altruistic donors
    for i in range(altru_num):
        random_list = ["O" for i in range(45)] + ["A" for i in range(40)] + ["B" for i in range(11)] + ["AB" for i in range(4)]
        donor = random.choice(random_list)

        people[count] = {
            "index": count,
            "patient": "None",
            "donor": donor,
            "p_die": "0.0"
        }
        
        active_pairs.add(count)

        current_data[count] = people[count]
        count += 1

    file = open(f'./working/working{round}.csv', "w")
    file.write("index,patient,donor,p_die")
    file.write("\n")

    for data in current_data:
        lst = [str(current_data[data]["index"]), current_data[data]["patient"], current_data[data]["donor"], str(current_data[data]["p_die"])]
        file.write(",".join(lst))
        file.write("\n")
    
    return(f'./working/working{round}.csv')



if __name__=="__main__":
    #create an initial file

    # relevant statistics
    transplants = 0
    total_deaths = 0
    
    num_rounds = 10
    for round in range(num_rounds):
        
        # iterate through groups waiting operations to check for failures
        successful, unsuccessful = check_waiting_operations(round)
        
        # finds deaths
        deaths = check_deaths()

        # adds deaths and transplants
        total_deaths += len(deaths)
        transplants += len(successful)

        s1 = set(unsuccessful)
        s2 = set(deaths)
        add_list = list(s1.difference(s2))      
        # there exist more params for generate_input 
        working_file = generate_input(10, 1, remove_list=deaths, add_list=add_list, round=round)

        # input round number below
        inpt,nnds = generate_graph(working_file, round)
        
        # run round
        os.system("cat %s %s | python3 -m kidney_solver.kidney_solver 3 100 %s"
         %( inpt, nnds,"picef"))
        
        # cycles, chains = kidney_solver.run_round(i)
        cycles, chains = check_cycles_chains()
        cycles = [(round + wait_time, c) for c in cycles]
        chains = [(round + wait_time, c) for c in chains]

        awaiting_operations["cycles"].append(cycles)
        awaiting_operations["chains"].append(chains)

        # add success
        history.add_round(cycles, chains, awaiting_operations, deaths, successful, active_pairs)

    print("Total Transplants: " + str(transplants))
    print("Total Deaths: " + str(total_deaths))

        



    