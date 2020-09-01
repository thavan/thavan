---
categories:
- Python-Beginner-Tutorial
date: "2019-11-14T05:00:00Z"
tags:
- python
title: Thinking Pythonic
toc:
- true
updated: "2020-8-8 09:00:00"
---
## 8.1 Introduction

Until now, we have got introduced to Python, we have seen some data types and how to write loops like if, for and while.
Before moving on, we will spend some time discussing about writing Pythonic code. What is a Pythonic code? 
Generally there are many ways to write a code that solves the same problem. But there will always be a best solution
that is very specific to Python that is also elegant, beautiful, readable, and simple. We call it Pythonic code.
We will see some examples when go along in this chapter.

## 8.2 Pythonic Code
If you are coming from other languages, for example from a Java background, then sometimes you would translate your Java 
code into a Python code without even realizing that you are thinking in Java language and then translating it into
Python. It is okay at the beginning. It is like learning to speak a new language. You will always think in your
mother tongue and then you will translate it into the one that your are learning. But eventually to get fluency in
that language, you will have to learn thinking in that language itself.

So when time goes on, you will get to that level in Python, where you will know the better pythonic way of solving
the problem. Practice is the key to reach that level.

## 8.3 Boolean comparison
When it comes to variable comparison, there are certain Pythonic way of doing it. Let's go through the below example.

```python
validate_name = True

if validate_name == True:
	# validate name
    pass

# or
if validate_name is True:
	# validate name
    pass
```
We can also write the above code as
```python
validate_name = True
if validate_name:
	# validate
    pass
```
We don't need to use `==` or `is` if we just want to check the truthfulness of the variable.
So `if validate_name` just automatically checks if that variable evaluates to a True value.

## 8.4 Loops
```python
fruits = ['Apple', 'Orange', 'Banana']
for i in range(len(fruits)):
	print(fruits[i])
```
We can write the same code as below in Pythonic way.
```python
fruits = ['Apple', 'Orange', 'Banana']
for fruit in fruits:
	print(fruit)
```
When we iterate a list through a for loop, we get that item in our for loop variable. We don't need to create a counter
number and then use that index to access the corresponding item.

## 8.5 List comprehensions
Similarly, when creating duplicate lists when may do the following.
```python
fruits = ['Apple', 'Orange', 'Banana']
new_fruits = []

for fruit in fruits:
	new_fruits.append(fruit)
```
There is a better way of doing this in Python.
```python
fruits = ['Apple', 'Orange', 'Banana']

new_fruits = [fruit for fruit in fruits]
# or
new_fruits = fruits[:]
```
First one is called list comprehension and the second method is called slicing.
We have seen both of them in lists chapter.

## 8.6 Conclusion
This just a introduction of what to expect in upcoming chapters. So start thinking in Python and let's dive into our
next topic.
