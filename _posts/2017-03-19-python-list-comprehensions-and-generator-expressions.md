---
title: Python List Comprehensions and generator expressions
date: 2017-03-19 09:00:00
categories: python
---


Comprehensions are one of the prominent features of Python. Once you understand them, it helps avoiding lots of 
redundant and repetitive code. It helps creating lists, dictionaries and generators from other iterable objects 
with a single statement.

### List Comprehensions 

Let's take the below tuple as an example,


```python
>>> scores = (
...     ('Science', 85),
...     ('Phisics', 65),
...     ('Mathematics', 89),
...     ('Computer Science', 34)
... )
```

To get all the subjects from this tuple,


```python
>>> s = [subject for subject, score in scores]
>>> s
['Science', 'Phisics', 'Mathematics', 'Computer Science']
```

The above statement with square bracket is called list comprehensions. It creates a new list from an iterable object. 
To get all the subjects in which the student scored more than 80, you could write


```python
>>> [subject for subject, score in scores if score > 80]
['Science', 'Mathematics']
```

If you want to create a list with all the scores, but if the score is less the 70 you want to make them 70


```python
>>> [(subject, score if score >70 else 70) for subject, score in scores]
[('Science', 85), ('Phisics', 70), ('Mathematics', 89), ('Computer Science', 70)]
```

### Set comprehensions

To get a set instead of a list, just put curly braces instead of square brackets


```python
>>> g = {(subject, score if score >70 else 70) for subject, score in scores}
>>> g
{('Computer Science', 70), ('Science', 85), ('Phisics', 70), ('Mathematics', 89)}
>>> type(g)
<class 'set'>
```

One more advantage of set is that you get duplicates removed automatically.

```python
items = ['car', 'bus', 'train', 'train', 'car', 'bus']
```


```python
>>> items = ['car', 'bus', 'train', 'train', 'car', 'bus']
>>> {item for item in items if len(item) == 3}
{'bus', 'car'}
```

### Dict comprehensions 

To get all the items a dictionary if score is more than 70,

```python
>>> {subject: score if score >70 else 70 for subject, score in scores}
{'Science': 85, 'Phisics': 70, 'Mathematics': 89, 'Computer Science': 70}
```

Note that, you should put a semicolon between key and value. Also the entire expression should be enclosed by curly braces. 
The colon is the one that decides if the output is going to a set or a dictionary.

### Generator expressions 

To create a generator, just put a round brackets around the expression.

```python
>>> scores = (
...     ('Science', 85),
...     ('Phisics', 65),
...     ('Mathematics', 89),
...     ('Computer Science', 34)
... )
>>> g = ((subject, score) for subject, score in scores)
>>> g
<generator object <genexpr> at 0x1014a8360>
```

Why do we need a generator anyway if we can get a list? To answer that, let's see how a list works. While creating 
a list every item in the list is loaded before you use them. You can iterate through it, you can slice it, 
you can access it's elements by indexing. You can also iterate though it multiple times. 

But generators are something that gives you one value at a time. Not all the items in generator loaded in the beginning. 
Only one value is generated at a time. In fact you may not even know the length of the generator. You can iterate through it, 
one at a time, but you cannot access it's elements by indexing. You cannot slice it. Once you consumed it, it's over. 
You cannot re-iterate through it again. In the above example,


```python
>>> for score in g:
...     print(score)
... 
('Science', 85)
('Phisics', 65)
('Mathematics', 89)
('Computer Science', 34)
>>> # Again
... for score in g:
...     print(score)
... 
```

In second iteration you won't get anything from the generator as you already consumed it and you reached the end of it. 

A practical example of generator would be, assume you have 10 giga bytes log file. You want to process it line by line.

```python
>>> errors = (line for line in open('debug.log') if line.startswith('error:'))
>>> for error in errors:
...     print(error)
... 
error: ZeroDivisionError

error: ValueError

error: IOError
```   

All the lines starting with `"error:"` printed in the above loop.

If you use the list comprehension instead of a generator expression in the above example, you may end up loading 
all the log file items in to a list and system can go out of memory if the file is too big in size.

