---
title: "Dictionary"
date: 2020-04-09T10:12:52+05:30
toc: true
---
## 6.1 Introduction
In this chapter, we will learn about Python dictionaries. It sometimes is being called as hash map in other programming languages. Every item
in a dictionary has a key and a corresponding value. `key` is just a label of the value. A key value pair in a dictionary is called as an item. Let's define a dictionary representing the movie Toy Story.

![Dictionary Intro](/assets/images/python-for-beginners/dictionary/dictionary_intro.png)

In the above dictionary, Name, Director, Stars and Year are called keys. Each key will have a corresponding value. For example `Name` of the move is `Toy Story`.
## 6.2 Dictionary operations
### 6.2.1 Defining a dictionary
Dictionary are created using curly braces (`{}`). Suppose we are building a website for employee management. To represent an employee (or a person), we can use a dictionary.

```python
person = {
    'name': 'John',
    'age': 18,
    'dept': '1 kg'
}
```

To create an empty dictionary, we can also use curly braces.
```python
person = {}
person['name'] = 'John'
```
In the above example, we create a dictionary called `person` and we add a new key value pair `(Name, 'John')`


### 6.2.2 Adding key value pairs to a dictionary
To add a new key to the dictionary we use square bracket to access that item and assign a new value. Let's add a new key to the person dictionary. For example let's say we want to add the salary to john dictionary.
```python
>>> person['salary'] = 10000
>>> person
{'name': 'John', 'age': 18, 'dept': 'Maths', 'salary': 10000}
>>>
```

### 6.2.3 Retrieve data from a dictionary
To retrieve an item from a dictionary, we can use square bracket. For example, to get the name of the person we can use
```python
>>> person['name']
'John'
```
`dict.items()` method returns the list of tuples (A list containing tuples. Each tuple is a
key value pair from the dictionary)
```python
>>> shares.items()
dict_items([('aab', 3), ('xyz', 10), ('bca', 1)])
```
Sometimes we may want to loop through a dictionary items one by one. This is one of the very common usage of dictionary.

```python
>>> for key, value in person.items():              
...     print('Key:', key)                         
...     print('Value:', value)                     
...                                                
Key: name                                          
Value: John                                        
Key: age                                           
Value: 18                                          
Key: dept                                          
Value: 1 kg                                        
```

### 6.2.4 Editing values
Remember, we use the same syntax for adding a new key and also for editing an
existing item. So to change the salary of John to 12000, we can use
```python
>>> person['salary'] = 12000
>>> person
{'name': 'John', 'age': 18, 'dept': 'Maths', 'salary': 12000}
```

### 6.2.5 Deleting values
To delete a dictionary key value pair just use in-built function `del`
```python
>>> del person['dept']
>>> person
{'name': 'John', 'age': 18, 'salary': 12000}
```

## 6.3 Sorting a dictionary
Let's create a dictionary that represents share names and prices.
```python
>>> shares = {
...      'Apple': 3,
...      'Google': 10,
...      'Facebook': 1
... }
>>> shares
{'Apple': 3, 'Google': 10, 'Facebook': 1}
>>> sorted(shares)
['Apple', 'Facebook', 'Google']
```
`sorted(shares)` sorts the dictionary keys and the output is a list. So how do we get sorted key value pairs? yes using `sorted(shares.items())`
```python
>>> sorted(shares.items())
[('Apple', 3), ('Facebook', 1), ('Google', 10)]
```
Can I get the list of values sorted? Yes, using `sorted(shares.values())`
```python
>>> sorted(shares.values())
[1, 3, 10]
```

## 6.3 Conclusion
In this chapter we have studied about dictionaries, how to create them and other dictionary
operations like update and delete. 

Keep the following things in mind before moving on to next chapters.
- Each key value pair in a dictionary is called a item.
- A dictionary consists of zero or more items.
- Each item in a dictionary is separated by comma `,`
- Key and value are separated by colon `:`
- Key must be an immutable object like number, string and etc. A tuple also can be a key because it is immutable.
- Dictionary items are ordered.

## 6.7 Exercise Programs
Let's say we have the salary of three employees in a dictionary. Find the average salary.
```python
>>> john = {
...     'name': 'John',
...     'salary': 10000,
... }
>>> smith = {
...
...     'name': 'Smith',
...     'salary': 8000,
... }
>>> mary = {
...     'name': 'Mary',
...     'salary': 14000,
... }
>>> avg = (john['salary'] + smith['salary'] + mary['salary'])/3
>>> avg
10666.666666666666