import os
import subprocess
from . import kidney_solver
from .history import History
from csv import DictReader
import random
import numpy as np
from time import sleep

# wait time before processing transplants
wait_time = 4

# keeps track of all operations
operations = {"cycles": {}, "chains": {}, "people_waiting": set()}

# set of active agents (can be matched in algorithm) and alive agents
active = set()
alive = set()

# keep a history class
history = History()

# keeping track of all people
people = {}
count = 0

# graphs of the patient donor pairs
# dictionary of adjacency pairs more info can be found in generate_graph
graph = {}
graph_ndd = {}
edges = {}

def check_waiting_operations(round):
    successful = []
    unsuccessful = []

    # check which chains and cycles are due for operation
    chains_to_check = [chain for chain in operations["chains"] if operations["chains"][chain] == round]
    cycles_to_check = [cycle for cycle in operations["cycles"] if operations["cycles"][cycle] == round]

    # check if cycle succeeds
    for cycle in cycles_to_check:
        succ = True
        for i in range(len(cycle)-1):
            if random.random() < edges[(cycle[i], cycle[i+1])]:
                succ = False
                break
        if random.random() < edges[(cycle[len(cycle) - 1], cycle[0])]:
            succ = False            
        successful.extend(cycle) if succ else unsuccessful.extend(cycle)

        # remove cycle from operations after simulation
        del operations["cycles"][cycle]

    # check if chain succeeds
    for chain in chains_to_check:
        for i in range(len(chain)-1):
            if random.random() > edges[(chain[i], chain[i+1])]:
                successful.append(chain[i+1])
            else:
                unsuccessful.extend(chain[i+1: ])
                break
        
        # remove chain from operations after simulation
        del operations["chains"][chain]

    # add the unsuccessful back to the active set
    active.update(set(unsuccessful))

    completed = set()

    for c in chains_to_check + cycles_to_check:
        for person in c:
            completed.add(person)

    operations["people_waiting"].difference_update(completed)

    return successful, unsuccessful

def check_deaths():
    
    deaths = set()
    
    #check if any alive people die this round
    for id in alive:
        if random.random() < float(people[id]["p_die"]):
            deaths.add(id)
    
    # update alive and active sets accordingly
    alive.difference_update(set(deaths))
    active.difference_update(set(deaths))

    return deaths

def update_operations(deaths):

    for chain in operations["chains"].copy():
        if set(chain) & deaths:
            del operations["chains"][chain]
            all_returners = set([person for person in chain])
            alive_returners = set([person for person in chain if person not in deaths])
            operations["people_waiting"].difference_update(all_returners)
            active.update(set(alive_returners))
    
    for cycle in operations["cycles"].copy():
        if set(cycles) & deaths:
            del operations["cycles"][cycle]
            all_returners = set([person for person in cycle])
            alive_returners = set([person for person in cycle if person not in deaths])
            operations["people_waiting"].difference_update(all_returners)
            active.update(set(alive_returners))


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
                li = tuple(li)
                cycles.append(li) if on_cycles else chains.append(li)
                li = []
            try:
                vtx = int(line)
                li.append(vtx)
            except:
                pass

    return cycles, chains

# generates failure probabilities for each edge
def generate_failure_prob(constant):
    
    # generate either constant failure probabilities or varying failure probabilities
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

            if data[i]["donor"] == "O" or data[i]["donor"] in data[j]["patient"] and data[j]["patient"] != 'None':
                if data[i]["patient"] != 'None':
                    graph[i].append(j)
                    edges[(int(i), int(j))] = generate_failure_prob(True)
                    num_edges += 1

                if data[i]["patient"] == 'None':
                    graph_ndd[i].append(j)
                    edges[(int(i), int(j))] = generate_failure_prob(True)
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
    f.write("\t".join([str(len(people)), str(num_edges_ndd)]))
    f.write("\n")

    for i in graph_ndd: 

        for j in graph_ndd[i]:
            f.write("\t".join([str(i), str(j), str(weight)]))
            f.write("\n")

    f.write("\t".join([str(-1), str(-1)]))
    f.write("\n")
    f.close()

    return f'graphs/graph{round}.input', f'graphs/graph{round}.ndds'

# def generate_input(add_num, altru_num, add_list=[], round=0, count=0, people={}, p_die_mu=0.3, p_die_sd=0.15, p_die_update = 1.1):
def generate_input(add_num, altru_num, add_list=[], round=0, p_die_mu=0.01, p_die_sd=0.005, p_die_update = 1.01):
    global people
    global count
    global active
    current_data = {}

    if round != 0:
        csvfile = open(f'./working/working{round - 1}.csv', "r")
        reader = DictReader(csvfile)
        
        for row in reader:

            if int(row["index"]) not in active:
                continue

            current_data[row["index"]] = {
                "index": row["index"],
                "patient": row["patient"],
                "donor": row["donor"],
                "p_die": float(row["p_die"])
            }
            # change probability person dies each round
            current_data[row["index"]]["p_die"] *= p_die_update

    # add people back to list
    for vertex in add_list:
        current_data[vertex] = people[vertex]

    # add new people
    for i in range(add_num):
        # 45% O, 40% A, 11% B, 4% AB
        random_patient = ["O" for i in range(46)] + ["A" for i in range(41)] + ["B" for i in range(12)] + ["AB" for i in range(1)]
        random_donor = ["O" for i in range(30)] + ["A" for i in range(51)] + ["B" for i in range(14)] + ["AB" for i in range(5)]
        
        while True:
            patient = random.choice(random_patient)
            donor = random.choice(random_donor)

            if donor not in patient:
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
        
        # add newly generated pairs to active, alive sets
        active.add(count)
        alive.add(count)

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
        
        # add newly generated altruistic donors to active, alive sets
        active.add(count)
        alive.add(count)

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


total_transplants = []
total_deathss = []

# if __name__=="__main__":

def run():
    global cycles
    global total_transplants
    global total_deathss
    #create an initial file

    # relevant statistics
    transplants = 0
    total_deaths = 0
    
    num_rounds = 24
    for round in range(num_rounds):
        
        # iterate through groups waiting operations to check for failures
        successful, unsuccessful = check_waiting_operations(round)
        
        # finds deaths
        deaths = check_deaths()
        
        # updates deaths and transplants
        total_deaths += len(deaths)
        transplants += len(successful)

        # get rid of operations with dead people
        update_operations(deaths) 

        # add unsuccessful transplant patients
        add_list = set(unsuccessful).difference(deaths)

        # there exist more params for generate_input 
        working_file = generate_input(10, 1, add_list=add_list, round=round)

        # input round number below
        inpt,nnds = generate_graph(working_file, round)
        
        # run round
        # os.system("cat %s %s | python3 -m kidney_solver.kidney_solver 500 500 %s"
        #  %( inpt, nnds,"uef"))
        
        # jenn's crappy alternative
        command = ("cat %s, %s | python3 -m kidney_solver.kidney_solver 500 500 %s"
        %( inpt, nnds,"uef"))
        subprocess.call('powershell.exe %s' % (command), shell=True)
        
        # cycles, chains = kidney_solver.run_round(i)
        cycles, chains = check_cycles_chains()

        # update operations data according to optimal cycles/chains
        for c in cycles:
            operations["cycles"][c] = round + wait_time
            operations["people_waiting"].update(set(c))
            active.difference_update(set(c))
            
        for c in chains:
            operations["chains"][c] = round + wait_time
            operations["people_waiting"].update(set(c))
            active.difference_update(set(c))

        # remove people waiting for an operation from the active set
        active.difference_update(operations["people_waiting"])
            
        # add history
        history.add_round(cycles, chains, operations, deaths, successful, unsuccessful, active)

    total_transplants.append(transplants)
    total_deathss.append(total_deaths)
    print("Total Transplants: " + str(transplants))
    print("Total Deaths: " + str(total_deaths))
    print("Successful Transplants: ", history.successful)
    print("Failed Transplants: ",history.unsuccessful)
    history.final_stats()


if __name__=="__main__":
    for _ in range(10):
        # keeps track of all operations
        operations = {"cycles": {}, "chains": {}, "people_waiting": set()}

        # set of active agents (can be matched in algorithm) and alive agents
        active = set()
        alive = set()

        # keep a history class
        history = History()

        # keeping track of all people
        people = {}
        count = 0
        run()
    print(total_transplants,total_deathss)



    