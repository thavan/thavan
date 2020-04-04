---
title: "Variables and Simple data types"
date: 2020-02-14T16:14:00+05:30
subtitle: ""
tags: [python]
---
## Introduction
As in any other language, Python has variables as we some simple common data types like int, float, string...
In this section we will see how variables are working in Python and how to use these simple data types.

## Variables
As we said already, in Python, everything is an object. For example strings, numbers, True, False... etc.
Like all objects in real world have names, we name Python objects too. These names are called variables.

### Creating variables
```python
age = 10
```
In the above statement, `10` is an integer object. We name it as `age`. Similarly in `name = 'John'`
`John` is a string object which is accessed by a variable called `name`. Keep in mind that variables are 
just names to objects.

We can also create multiple variables in a same statement.
```python
a = b = c = 0  # a, b and c are all assigned with same value 0.
a, b = 10, 20  # a is assigned with 10 b is assigned with 20
```

### Variable Rules.
There few simple rules or good practices you have to follow when creating variables.
- Variable names should start with letters. It can contain underscore or numbers in between.
- Always use small letters separated by underscores.
- Use a very short and descriptive variable names.
- Avoid using builtin keywords like `str`, `int`.
- Avoid using standard library module names for your variables like `time`.

## Strings
Strings are sequence of characters.
```python
s = 'This is a string.' # note single quotes
s = "This is also a string" # note double quotes
```
```python
msg = 'I don\'t like it'
```
In the above statement, our string is covered with single quotes and we also use a single quote
inside the string. In that case, we have to escape the inside single quote. By escaping the single
quote we tell Python that don't take any special meaning for inside single quote. There is also
another way of writing above statement.
```python
msg = "I don't like it"
```
As we use single quote inside the string, we can use double quote outside.

### String methods
String manipulation is an important part of programming. We often format strings before
presenting it the user. In this section we will see some of the string methods. `Please note
that, in Python, any string method always returns new string.` This is because of the
immutable property of string.

>
```python
name = 'john smith'
```
- `name.title()`  returns every word's first letter capitalized.
- `name.capitalize()` returns first letter of the string capitalized.
- `name.upper()` return upper case string.
- `name.lower()` return lower case string.
```python
>>> name.title()
'John Smith'
>>> name.capitalize()
'John smith'
>>> name.upper()
'JOHN SMITH'
>>> name.lower()
'john smith'
```

Let's say we have two strings.

```python
first_name = 'John'
last_name = 'Smith'
```
To concatenate two strings.
```python
>>> first_name + ' ' + last_name
'John Smith'
```
You can use `\n` to print new line and `\t` to print tabs.
```python
print('\tHello\nworld')
```
`strip()` method removes white spaces from beginning`rstrip()` removes white spaces from 
right side of the string. `lstrip()` removes white spaces from beginning of the string.

```python
>>> 'John '.rstrip()
'John'
>>> ' John \n\t'.strip()
'John'
>>> name = ' John Smith '
>>> name.lstrip()
'John Smith '
```

`replace()` method replaces the characters from a string.
```python
>>> s = 'hello'
>>> s.replace('l', 'x')
'hexxo'
```

`split()` method splits a string by given delimiter.
```python
>>> words = 'hello,world'
>>> words.split(',')
['hello', 'world']
```

string also supports search. `find()` method finds a given substring from a string.
```python
>>> words.find('world')
6
>>> words.find('hi')
-1
```

'hello1' in 'hello world' # use in find if the string exists
import re
s = 'abc,def-xyz'
s.split(',-')
re.split(r'[,-]', s)
name = input('Please enter your name: ')
```
Exercise 1

Write a program that gets user name from terminal and prints a welcome message like "Hello John Smith, Welcome!" with name in titlecase.
3.3 Numbers
3.3.1 Integers
In [ ]:

a = 10

In [ ]:

type(a)

In [ ]:

a = 'hello'

In [ ]:

type(a)

In [ ]:

b = a + 3

In [ ]:

b

In [ ]:

type(a)

In [ ]:

a = 'hello'

In [ ]:

type(a)

In [ ]:

2 + 3

In [ ]:

3 - 2

In [ ]:

2 * 3

In [ ]:

3 / 2 # python 2?

In [ ]:

3 ** 2

In [ ]:

pow(3, 2)

In [ ]:

int('123')

In [ ]:

str(11)

In [ ]:

2 * (3 + 4)

In [ ]:

2 * 3 + 4

In [ ]:

2 + 3 * 4

In [ ]:

from math import sqrt

In [ ]:

import math

In [ ]:

dir(math)

In [ ]:

sqrt(16)

In [ ]:

4 ** 2

In [ ]:

pow(4, 2)

3.3.2 Floats
In [ ]:

a = 4.5

In [ ]:

type(a)

In [ ]:

import sys

In [ ]:

sys.maxsize

In [ ]:

a * 4

In [ ]:

0.1 + 0.2 + 30

In [ ]:

0.1 + 0.2 + 30.0

In [ ]:

1 + 2.0 + 3 # 1, 3 are converted in to float

In [ ]:

int(3.433)

In [ ]:

import math

In [ ]:

x = math.trunc(3.4343)

In [ ]:

type(x)

In [ ]:

"""Finds the round of a integer
using inbuilt round
"""
round(34.357434, 2)

In [ ]:

math.floor(2323.9001)

In [ ]:

int(3.44)

In [ ]:

float(34)

In [ ]:

from decimal import Decimal

In [ ]:

d = Decimal('30.1')

In [ ]:

d1 = Decimal('30.2')

In [ ]:

d + d1

In [ ]:

d = Decimal(30.1)

In [ ]:

d

In [ ]:

x = 4 + 4j

In [ ]:

type(x)

Note: Commenting the code
In [ ]:

iteration = 10 # total number of iterations

In [ ]:

iteration = 10 # total number of iterations
               # should not exceed 100
debug = True # enable debugging?

In [ ]:

# triple quote comments

3.4 Boolean types
In [ ]:

True

In [ ]:

False

In [ ]:

logged_in = False

if logged_in == True:
    print('Welcome')

In [ ]:

if not logged_in:
    print('Welcome')

In [ ]:

i = 10

In [ ]:

if bool(i):
    print('Evaluates to True')
else:
    print('A false value')

In [ ]:

i = -10

In [ ]:

bool(None)

In [ ]:

i = 0

In [ ]:

bool(i)

In [ ]:

a = [10]

In [ ]:

bool(a)

In [ ]:

i = 0

In [ ]:

i = 0

In [ ]:

if i == None:
    print('hello')

