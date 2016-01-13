from kidney_solver.kidney_digraph import *
import kidney_solver.kidney_ip as k_ip
import kidney_solver.kidney_ndds as k_ndds

def read_with_ndds(basename):
    with open(basename + ".input") as f:
        lines = f.readlines()
    d = read_digraph_without_prob(lines)
    with open(basename + ".ndds") as f:
        lines = f.readlines()
    ndds = k_ndds.read_ndds(lines, d)
    return d, ndds

def test_chains_only_instance():
    d, ndds = read_with_ndds("test-fixtures/no-cycles")
    d.create_adj_mat()
    fns = [k_ip.optimise_uuef, k_ip.optimise_hpief_prime,
            k_ip.optimise_picef, k_ip.optimise_ccf]
    for max_chain in [0, 1, 2]:
        for fn in fns:
            opt_result = fn(d, ndds, 3, max_chain, None)
            assert len(opt_result.cycles) == 0
            if fn == k_ip.optimise_uuef or max_chain > 0:
                assert len(opt_result.chains) == 2
            else:
                assert len(opt_result.chains) == 0

def test_single_cycle_instance():
    d, ndds = read_with_ndds("test-fixtures/one-cycle")
    d.create_adj_mat()
    fns = [k_ip.optimise_uuef, k_ip.optimise_hpief_prime,
            k_ip.optimise_picef, k_ip.optimise_ccf]
    for max_chain in [0, 1, 2]:
        for fn in fns:
            opt_result = fn(d, ndds, 3, max_chain, None)
            assert len(opt_result.cycles) == 1
            if fn == k_ip.optimise_uuef or max_chain > 0:
                assert len(opt_result.chains) == 1
            else:
                assert len(opt_result.chains) == 0

def test_weighted_instance():
    """Checks that the capped formulations agree on the optimal
    result for an instance with weighted edges.
    """
    EPS = 0.0001
    d, ndds = read_with_ndds("test-fixtures/100-random-weights")
    d.create_adj_mat()
    fns = [k_ip.optimise_hpief_prime,
            k_ip.optimise_picef, k_ip.optimise_ccf]
    for max_cycle in [0, 1, 2, 3, 4]:
        for max_chain in [0, 1, 2, 3]:
            opt_result_0 = fns[0](d, ndds, max_cycle, max_chain, None)
            print opt_result_0.total_score
            for fn in fns[1:]:
                opt_result = fn(d, ndds, max_cycle, max_chain, None)
                assert opt_result.total_score == opt_result_0.total_score