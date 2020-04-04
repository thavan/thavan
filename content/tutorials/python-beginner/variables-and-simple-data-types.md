---
title: "Variables and Simple data structures"
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
In the above statement, our string is covered with single quotes and we also use single single quote
inside the string. In that case, we have to quote the inside single quote. Or we can simply use,
```python
msg = "I don't like it"
```

3.1.1 Rules

    Must start with same start and end quotes
    backslace for escaping.

In [ ]:

'This isn\'t a int'

In [ ]:

"This isn't a int"

In [ ]:

name = 'john smith'

In [ ]:

name.title()

In [ ]:

name.capitalize()

In [ ]:

name.upper()

In [ ]:

name.lower()

In [ ]:

first_name = 'John'
last_name = 'Smith'

In [ ]:

first_name + ' ' + last_name

In [ ]:

print('\tHello\nworld')

In [ ]:

'John '.rstrip()

In [ ]:

' John \n\t'.strip()

In [ ]:

name = ' John Smith '
name.lstrip()

In [ ]:

s = 'hello'

In [ ]:

s.replace('l', 'x')

In [ ]:

s

Strings are immutable
In [ ]:

s = 'hello' # s.append('world')

In [ ]:

new_string = s + ' world'

In [ ]:

s

In [ ]:

new_string

In [ ]:

s = s + ' world'

In [ ]:

s

In [ ]:

s = 'hello, world'

In [ ]:

words = s.split(',')

In [ ]:

words

In [ ]:

s = 'hello world'
s.find('hello')

'hello world'.find('hello') # find a string within a string

In [ ]:

'hello1' in 'hello world' # use in find if the string exists

In [ ]:

import re

In [ ]:

s = 'abc,def-xyz'

In [ ]:

s.split(',-')

In [ ]:

re.split(r'[,-]', s)

In [ ]:

name = input('Please enter your name: ')

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

