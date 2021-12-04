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




    