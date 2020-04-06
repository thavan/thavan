---
title: "Simple data types"
date: 2020-02-14T16:14:00+05:30
subtitle: ""
tags: [python]
---
## Introduction
Like all programming languages, Python has variables as well. In this section we will learn
about simple data types like `integer`, `float`, `string` and `decimal`. We will start with 
introducing variables.

## Variables
Literally everything is an object in Python. For example, strings, numbers, True, False... etc.
In real world most objects have a name. I have a name and you have a name. Likewise, in Python
objects have name. In real world some object doesn't have a name like a tree in you backyard.
Similarly, in Python too some objects may not have names. In that case, it is difficult to 
reference that object. 

When we name a object in Python it is called a variable.	

### Creating variables
Let's create a variable.
```python
>>> interest_rate = 10
```
In the above statement, `10` is an integer object. We name it as `interest_rate`. So whenever
we need to reference interest_rate we can use the variable `intereset_rate`. In the below
sample code, we calculate interest based on `interest_rate` variable.
```python
>>> interest_rate = 10
>>> interest = 30000 * (interest_rate/100)
>>> interest
3000.0
```

We can also create multiple variables in a same statement.
```python
>>> a = b = c = 0
>>> a, b = 10, 20
```
In the first statement a, b and c are all assigned with the value 0. In the second statement
a is assigned with 10 and b is assigned with 20. Remember that number of variables in the left
side of the assignment operator should be equal to the number of values in the right side.

### Variable Rules
There are few simple rules or good practices you have to follow when creating variables.
- Variable names should start with letters. It can contain underscores or numbers in between.
- Always use small letters separated by underscores.
- Use a very short and descriptive variable names.
- Avoid using builtin keywords like `str`, `int`.
- Avoid using standard library module names like `time`.

## Strings
Strings are sequence of characters. In some other languages like C, character is a separate
data type. In Python there is no data type like `char`. A character is string with just one
character. Now let's create some strings.
```python
>>> s = 'This is a string.'
>>> s = "This is also a string"
```
Note that a string is collection of characters enclosed by single quotes or double quotes.

```python
>>> msg = 'I don\'t like it'
```
In the above statement, our string is covered with single quotes and we also use a single quote
inside the string. In that case, we have to escape the inside single quote. By escaping the single
quote we tell Python that, don't take any special meaning for inside single quote because it
is part of the string. There is also another way of writing above statement.
```python
>>> msg = "I don't like it"
```
As we use single quote inside the string, we can use double quotes outside.

### String methods
String manipulation is an important part of programming. We often format strings before
presenting it to the user. In this section we will see some of the string methods that
we can use to manipulate strings. Please note that, in Python, any string method always 
returns a new string. This is because of the immutable property of the string. By `immutable`
we mean that once we declare a string it cannot be changed.

```python
>>> name = 'john smith'
```
- `name.title()`  returns every word's first letter capitalized.
- `name.capitalize()` returns first letter of the string capitalized.
- `name.upper()` returns upper case string.
- `name.lower()` returns lower case string.
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
>>> print('\tHello\nworld')
        Hello
world
```
`strip()` method removes white spaces from beginning`rstrip()` removes white spaces from 
end of the string. `lstrip()` removes white spaces from beginning of the string.

```python
>>> name = ' John Smith '
>>> name.lstrip()
'John Smith '
>>> 'John '.rstrip()
'John'
>>> ' John \n\t'.strip()
'John'
```
Note that, there is no necessory to declare strings before using them. We can create new
strings on the flow when needed. In the above statement `' John \n\t'.strip()`, we create
a string `' John \n\t'` and apply the method `strip()`. Here we cannot reference the string
`' John \n\t'` again because we don't have reference (variable) for it.

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

Sometimes we may want to split a string by multiple delimiters. In those situations
we can use `split` function Python's regular expression module.
```python
>>> import re
>>> s = 'abc,def-xyz'
>>> s.split(',-')
['abc,def-xyz']
>>> re.split(r'[,-]', s)
['abc', 'def', 'xyz']
```

string also supports search. `find()` method finds a given substring from a string.
```python
>>> words.find('world')
6
>>> words.find('hi')
-1
```
In first statement 6 is the index of first character of the word `world`. In `hello world`
index of `w` is 6. If Python cannot the find the given string, it returns -1.

Let's do a exercise before moving on.

Exercise 1

> Write a program that gets user name from terminal and prints a welcome message like
> "Hello John Smith, Welcome!" with name in titlecase.

## Numbers
Numbers includes integers, floats, doubles, decimals and real numbers.

### Integer
An integer is a whole number like 1, 2, 40, and -50. It can be positive or negative
but it cannot have decimal points like 1.2
```python
>>> a = 10
>>> type(1)
<class 'int'>
```
You can do arithmetic operations on integers. 
```python
>>> b = a + 3
>>> b
13
>>> 2 * 3
6
>>> 3 - 2
1
>>> 3 / 2
1.5
>>> 3 // 2
1
>>> 3 ** 2
9
>>> pow(3, 2)
9
```
If you need integer division you use `//`. `**` or `pow` function can be used to find the
power of two numbers.

To convert a string to int, use `int` function. If the string is not a whole number
you will get a `ValueError`.
```python
>>> int('123')
123
>>> int('12.3')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: invalid literal for int() with base 10: '12.3'
>>> int('hello')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: invalid literal for int() with base 10: 'hello'
```

### Operator precedence.
Like any other language `*`, `/` takes precedence over `+` or `-`.

```python
>>> 2 * (3 + 4)
14
>>> 2 * 3 + 4
10
>>> 2 + 3 * 4
14
```

### Floats
Float is a number with decimal points. An important thing to remember is
whenever you do a arithmetic operation on a floating point number, the result is
always float. For example if you add `10.0` and `20`, the result will be `30.0` irrespective
of our other number 20 which is a integer.
```python
>>> a = 4.5
>>> type(a)
<class 'float'>
>>> a * 4
18.0
>>> 1 + 2.0 + 3
6.0
>>> int(3.433)
3
```

### Rounding and truncating floats
We will take a look at couple of functions that helps us to round floating numbers.

```python
>>> import math
>>> x = math.trunc(3.4343)
>>> type(x)
<class 'int'>
>>> round(34.357434, 2)
34.36
>>> math.floor(2323.9001)
2323
>>> float(34)
34.0
```

### Decimal numbers
Decimal numbers are numbers with decimal points. We use Decimal numbers
mostly in money related calculations because we need a high accuracy and
sensible truncation of decimal points. In Python we use `Decimal` class to
represent decimal numbers.

```python
>>> from decimal import Decimal
>>> d = Decimal('30.1')
>>> d1 = Decimal('30.2')
>>> d + d1
Decimal('60.3')
```

## Conclusion
In this tutorial we studied about variables and simple python data types
like string, int, float and Decimal. There are couple of other data types
like real numbers. To get started and keep going we don't need to learn them
unless necessary. So just make yourself familiar with string, int, float and decimal.