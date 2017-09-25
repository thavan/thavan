---
layout: post
title: Python list comprehensions
date: 2017-03-06 09:00:00
categories: html, javascript, css, playground
---
List comprehensions is on of the most useful features in Python.


```python
>>> scores = [3, 1, 5, 8, 3, 5, 10, 3, 1]
>>> lower_scores = [score for score in scores if score < 5]
```
What do we do here? We write a statement inside a sqaure brecket. we iterate though every item in scores list and add it the list if the score is less than five.
```python
>>> lower_scores
[3, 1, 3, 3, 1]
```
