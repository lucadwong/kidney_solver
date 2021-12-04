import os
from . import kidney_solver
from .history import History

# list of patients in limbo "cycles":[[],[],[]], "chains":[[],[],[]]
awaiting_operations = {"cycles": [],"chains": []}

# essentially all details regarding patients
pairs = dict()

# set of active pairs
active_pairs = set()

# keep a history class
history = History()

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

def check_cycles_chains():
    cycles = []
    chains = []
    on_cycles = True
    li = []
    myfile = open('cycles_chains.txt', 'r')
    for line in myfile:
        print(line)
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
    return cycles, chains
    # with open('cycles_chains.txt', 'r') as reader:
    #     # Read and print the entire file line by line
    #     line = reader.readline()
    #     while line != 'end':  # The EOF char is a -1
    #         print(line)
    #         if line == 'chains':
    #             on_cycles = False
    #         if line == '':
    #             cycles.append(li) if on_cycles else chains.append(li)
    #         try:
    #             vtx = int(line)
    #             li.append(vtx)
    #         except:
    #             pass
    #         line = reader.readline()

if __name__=="__main__":
    #create an initial file
    
    num_rounds = 2
    for i in range(num_rounds):
        # iterate through groups waiting operations to check for failures
        successful, unsuccessful = check_waiting_operations()
        
        # finds deaths
        deaths = check_deaths()

        # add success

        # run round
        os.system("python3 -m utils.convert < example_data/MD-00001-00000100.wmd | python3 -m kidney_solver.kidney_solver 3 100 %s"
         %("picef"))
        # cycles, chains = kidney_solver.run_round(i)
        cycles, chains = check_cycles_chains()
        awaiting_operations["cycles"].append(cycles)
        awaiting_operations["chains"].append(chains)

        history.add_round(cycles, chains, awaiting_operations, deaths, successful)




    