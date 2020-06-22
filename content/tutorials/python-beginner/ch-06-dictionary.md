---
title: "Dictionary"
date: 2020-04-09T10:12:52+05:30
draft: true
toc: true
---
## Introduction
In this chapter, we will learn about Python dictionaries. It is n other languages, it is sometimes called as hash map in other languages.  Every item in a dictionary has a key and corresponding value. `key` is just a name of that value. To understand it further, let's define a dictionary.

![Dictionary Image](/assets/images/dict.jpg)

Dictionary is also called as hash table in some other languages. It is a kind 
of table where column 1 represents keys and column 2 represents value.

## Dictionary operations
### Defining a dictionary
Let's define a dictionary. Suppose we are building a website that sells fruits
online. To represent a fruit and it prices etc, we can use a dictionary.
```python
person = {
    'name': 'John',
    'age': 18,
    'dept': 'Maths'
}
```

### Key things to remember
Things to remember before moving on.
- Each key value pair in a dictionary is called a item.
- A dictionary consists of zero or more items.
- Each item in a dictionary is separated by comma `,`
- Key value is separated by colon `:`
- Key must be a immutable object like number string and etc. A tuple can be a key.
  Because tuple is a immutable object. A dictionary cannot be a key in another dictionary
  because it is a mutable object.
- Dictionary is not ordered. So we can't use the index.

### Retrieve values to a dictionary
To retrieve an item from a dictionary, we can use square bracket. To get the name of
the person we can use
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

### Adding values
Let's add new key to the person dictionary. Let's add salary of the John.
```python
>>> person['salary'] = 10000
>>> person
{'name': 'John', 'age': 18, 'dept': 'Maths', 'salary': 10000}
>>>
```

### Editing values
Remember, we use the same syntax for adding a new key and also for editing an
existing item. So to change the salary to 12000, we can use
```python
>>> person['salary'] = 12000
>>> person
{'name': 'John', 'age': 18, 'dept': 'Maths', 'salary': 12000}
```

### Deleting values
To delete a dictionary key value pair just use in-built function `del`
```python
>>> del person['dept']
>>> person
{'name': 'John', 'age': 18, 'salary': 12000}
```

## Dictionary sorting
Let's create a dictionary that represents share names and prices.
```python
>>> shares = {
...     'aab': 3,
...     'xyz': 10,
...     'bca': 1
... }
>>> shares
{'aab': 3, 'xyz': 10, 'bca': 1}
>>> print(sorted(shares))
['aab', 'bca', 'xyz']
```
`sorted(shares)` sorts the dictionary keys. Dictionary has `keys` and  `values` method.
They return dictionary keys and values respectively. We can sort them using sorted function.
```python
>>> sorted(shares.values())
[1, 3, 10]
>>> sorted(shares.keys())
['aab', 'bca', 'xyz']
```


## Practice program
Let's say we have the salary of three employees in a dictionary. We want to
find the average salary.
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
```

## Conclusion
In this chapter we have studied about the dictionary and basics dictionary
operations. In real time programming dictionary operations involves iterating
through key value pairs and doing basic calculations. As we have not yet
covered control flow topics like `if` `for` statements, we will cover more
examples of dictionary we study those chapters.
<!--stackedit_data:
eyJoaXN0b3J5IjpbNjY0MzUwNDM0XX0=
-->