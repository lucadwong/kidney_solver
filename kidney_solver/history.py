#!/usr/bin/python

import copy
import pprint

class History:
    """
    History available

    history.cycles: [[completed cycles per round]]  (one sublist for each round)
        
    history.chains: [[completed chains for round]]  (one sublist for each round)

    history.awaiting_operations: [[awaiting_operations per round]]  (one sublist for each round)
        
    history.deaths: [[deaths for round]]  (one sublist for each round)
    """
    def __init__(self):
        """
        cycles is a list of lists
        chains is a list of lists
        awaiting_operations is a list
        deaths is a list
        """
        self.cycles = []
        self.chains = []
        self.awaiting_operations = []
        self.deaths = []
        self.successful = []

    def add_round(self, cycles, chains, ao, deaths,successful):
        self.cycles.append(copy.deepcopy(cycles))
        self.chains.append(copy.deepcopy(chains))
        self.awaiting_operations.append(copy.deepcopy(ao))
        self.deaths.append(copy.deepcopy(deaths))
        self.successful.append(copy.deepcopy(successful))

    def last_round(self):
        return len(self.cycles)-1

    def current_round(self):
        """ 0 is the first """
        return len(self.cycles)

    """prints out the info of a given round i"""
    def __repr__(self,i):
        return "History@%s(cycles=%s, chains=%s, awaiting_operations=%s, deaths=%s, successful=%s)" % (
            i,
            pprint.pformat(self.cycles[i]),
            pprint.pformat(self.chains[i]),
            pprint.pformat(self.awaiting_operations[i]),
            pprint.pformat(self.deaths[i]),
            pprint.pformat(self.successful[i]))

