---
layout: post
title: Python profiling
date: 2013-08-28 09:16:00
categories: python
---

There are three main modules that provides time benchmarking in python.
1) timeit - call it for profiling small python statements. (check out timeit module)
2) cProfile - c extension for profiling.
3) Profile - pure python implementation of cProfile. It exposes the same functions and classes of cProfile.

code:

    :::python

    import cProfile
    from collections import deque
    p = cProfile.Profile() # create a new profile object
    d = deque()
    li = []
    p.enable() # start profiling.
    for i in range(100000): # 100000 iterations for much accurate results.
       li.insert(0, 100)
    p.disable() # stop profiling.
    p.print_stats()

    p = cProfile.Profile() # for profiling deque
    p.enable()
    for i in range(100000):
       d.appendleft(100)
    p.disable()
    p.print_stats()


    :::bash
    100002 function calls in 3.483 seconds

    Ordered by: standard name

    ncalls  tottime  percall  cumtime  percall filename:lineno(function)
        1    0.000    0.000    0.000    0.000 {method 'disable' of '_lsprof.Profiler' objects}
    100000    3.481    0.000    3.481    0.000 {method 'insert' of 'list' objects}
        1    0.001    0.001    0.001    0.001 {range}


         100002 function calls in 0.037 seconds

    Ordered by: standard name

    ncalls  tottime  percall  cumtime  percall filename:lineno(function)
    100000    0.037    0.000    0.037    0.000 {method 'appendleft' of 'collections.deque' objects}
        1    0.000    0.000    0.000    0.000 {method 'disable' of '_lsprof.Profiler' objects}
        1    0.001    0.001    0.001    0.001 {range}
        

The results are mostly self explanatory. First line is number of function calls made and time taken for that. Remaining lines are individual call results. List insertion almost takes 100 times more time than deque.
Time complexity for inserting a element at at the end of list or queue is O(1), so if we use li.append for list and deque.append for for deque, the benchmarking results will be almost same.
