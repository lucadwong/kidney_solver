from . import kidney_solver
from .history import History
from csv import DictReader
import random 
import numpy as np
from time import sleep

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

def check_waiting_operations():
    successful = []
    unsuccessful = []

    # do some things to figure out which were successful and which were not successful

    # remove the successful from the active pairs

    # add the unsuccessful back to the active set

    return successful, unsuccessful

def check_deaths():
    deaths = []
    return deaths

def generate_graph(input_file):

    # graph[vertex] = [list of vertices that edges outward extend to]
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

            if data[i]["donor"] == "O" or data[i]["donor"] in data[j]["patient"]:
                if data[i]["patient"] != "None":
                    graph[i].append(j)
                    num_edges += 1

                if data[i]["patient"] == "None":
                    graph_ndd[i].append(j)
                    num_edges_ndd += 1

    f = open("graph.input", "w")
    f.write("\t".join([str(pair_num), str(num_edges)]))
    f.write("\n")

    for i in graph: 
        
        # to modify the weights
        weight = 1

        for j in graph[i]:
            f.write("\t".join([str(i), str(j), str(weight)]))
            f.write("\n")

    f.write("\t".join([str(-1), str(-1), str(-1)]))
    f.close()

    f = open("graph.ndds", "w")
    f.write("\t".join([str(altru_num), str(num_edges_ndd)]))
    f.write("\n")

    for i in graph_ndd: 
        
        # to modify the weights
        weight = 1

        for j in graph_ndd[i]:
            f.write("\t".join([str(i), str(j), str(weight)]))
            f.write("\n")

    f.write("\t".join([str(-1), str(-1), str(-1)]))
    f.close()

def generate_input(add_num, altru_num, remove_list=[], add_list=[], round=0, count=0, people={}, p_die_mu=0.3, p_die_sd=0.15, p_die_update = 1.1):

    current_data = {}

    if round:
        lines = open(f'./working{round - 1}.csv', "r").readlines()
        for line in lines:
            idx, data = line.split(",")[0], line.split(",")[1:]
            current_data[idx] = data

            # change probability person dies each round
            current_data[idx]["p_die"] *= p_die_update

    # delete people from list
    for vertex in remove_list:
        del(current_data, vertex)

    # add people back to list
    for vertex in add_list:
        current_data[vertex] = people[vertex]

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

        current_data[count] = people[count]
        count += 1

    file = open(f'./working{round}.csv', "w")
    file.write("index,patient,donor,p_die")
    file.write("\n")

    for data in current_data:
        lst = [str(current_data[data]["index"]), current_data[data]["patient"], current_data[data]["donor"], str(current_data[data]["p_die"])]
        file.write(",".join(lst))
        file.write("\n")
    
    return(f'./working{round}.csv')



if __name__=="__main__":
    #create an initial file
    
    num_rounds = 2
    for i in range(num_rounds):
        # iterate through groups waiting operations to check for failures
        successful, unsuccessful = check_waiting_operations()
        
        # finds deaths
        deaths = check_deaths()

        # add success
        cycles, chains = kidney_solver.run_round(i)
        awaiting_operations["cycles"].append(cycles)
        awaiting_operations["chains"].append(chains)

        history.add_round(cycles, chains, awaiting_operations, deaths, successful)

        """
        # there exist more params for generate_input
        working_file = generate_input(10, 1)
        generate_graph(working_file)
        """



    