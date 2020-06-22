---
title: "Python lists, tuples and sets"
date: 2020-04-03 00:00:00
subtitle: ""
tags: [python]
---
## Introduction
In this chapter we will learn about data types specific to Python language. They
are lists, tuples, sets. We will also learn about dictionaries in next chapter.

## Lists
Lists are simply collection of multiple objects. It can be a collection of
integers, collection of strings and so on. A single list can also hold different
type of objects.

Let's define a list
```python
>>> basket = []
>>> basket = list()
>>> basket = ['apple', 'orange', 'banana']
```
There are three ways to create a list. In first line we create a empty list using
square brackets. In the second line, we create a same empty list using a built-in
function called `list`. In the third line we create a list with some existing items.
All three declarations are valid and you can use any of them depending on your need.

### List indexing
Every item in a list have a index value. We use the index to access the item from a list.
Index of first item is 0, second item is 1 and so on. In the above example index of 
`apple` is 0, index of `orange` is 1 and the index of `banana` is 2.

In Python we have a special type of index called `negative indexing`. Negative indexing
starts from end of the list and goes in the reverse direction up to the beginning of the
list. The index of last item is -1. The index of the item before the last item is -2
and so on.
```python
>>> fruits = ['apple', 'orange', 'banana']
>>> fruits[-1]
'banana'
>>> fruits[-3]
'apple'
>>> print('I like ' + fruits[1])
I like orange
```
### Adding a value to the list using index

### List methods
List supports many methods. We said in earlier chapter that all methods called in a string
will return a new string because string object is immutable. But list is mutable. So most
of the methods you invoke on a list going to modify the list. Just keep this in mind when
working with lists.

#### append
```python
>>> basket = []
>>> basket.append('orange')
>>> basket.append('apple')
>>> basket.append('banana')
>>> len(basket)
3
```
In the above example `append` method appends a new item to the `basket` list. `append` method
always inserts the item at the end of the list.

#### insert
If you want insert a item at a specific position, just use the `insert` method.
```python
>>> basket
['orange', 'apple', 'banana']
>>> basket.insert(0, 'mango')
>>> basket
['mango', 'orange', 'apple', 'banana']
>>> basket.insert(13, 'strawberry')
>>> basket
['mango', 'orange', 'apple', 'banana', 'strawberry']
```
Second statement inserts `mango` to the 0th index of the list. We tried insert the strawberry
to the 13th position. We clearly know that 13th position is not available in our list. So Python
will insert the strawberry to the end of the list.

#### pop
`pop` function returns a item from list, but it also removes the accessed item
from the list.
```python
>>> basket
['mango', 'orange', 'apple', 'banana', 'strawberry']
>>> basket.pop()
'strawberry'
>>> basket
['mango', 'orange', 'apple', 'banana']
```
Note that `pop` method pops the last item from the list and returns that value. So when we print
the basket strawberry is not there anymore. If you want pop an element from specific
position, you can pass the index argument to the `pop` function. In the below example
`pop(2)` pops `apple` from the list.
```python
>>> basket.pop(2)
'apple'
>>> basket
['mango', 'orange', 'banana']
```

#### sort
Use the the `sort` function to sort the list.
```python
>>> basket
['mango', 'orange', 'banana']
>>> basket.sort()
>>> basket
['banana', 'mango', 'orange']
```
In the above example `sort` method sorts the list in-place. It means after calling the
method the list will be updated with sorted items. As we said already list methods modify
the list because lists are mutable objects. string methods do not modify the strings because
they are immutable.
```python
>>> nos = [4, 1, 10, 0]
>>> nos.sort()
>>> nos
[0, 1, 4, 10]
```
In the above example we call the `sort` method on a list and our list is modified with
the sorted items. What if don't want to modify the list?. We just want a new list with sorted
items. Use the built-in function `sorted`
```python
>>> nos = [4, 1, 10, 0]
>>> sorted(nos)
[0, 1, 4, 10]
>>> nos
[4, 1, 10, 0]
```
In the above example sorted function returns the sorted list. Our original list did not change
after that.

### List slicing
Slicing a list means extracting a sub-list from the original list. For example if we have
a list `[1, 2, 3, 4, 5]` and if we want to create a new list with last three items then
we use the slicing operator to read the sub-list.

Just remember this one thing. Python indexing takes three parameters.
`list[start_index:end_index:step]`
1) If you have only one index, it will return that exact element.
2) If you see two index values separated by colon, you will get sub-list(slice)
   starting from `start_index` and ending just before the `end_index`
3) If you see three values separated by colon, it will return a slice starting from the
   `start_index` and ending just before the `end_index` and return every other `step` element.

Let's see a example.
```python
>>> basket = ['apple', 'orange', 'banana', 'grape']
>>> basket[3]
'grape'
>>> basket[2:3]
['banana']
>>> basket[2:4]
['banana', 'grape']
```
In line no 6, we just create a sub-list from the index  2 to 4. The item from index 4 won't
be included. We will get values from index 2 to 3.

```python
>>> nos = list(range(10))
>>> nos
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> nos[2: 6: 2]
[2, 4]
```
In the above example `nos` is a list with 10 consecutive numbers. `range` function is used
to generate number sequences. `range(10)` generates number from 0 to 9.
`nos[2: 6: 2]` generates a sub-list. As discussed earlier, here our `start_index` is 2,
`end_index` 6 and `step` is 2.

So from start_index to end_index we get a sub-list `[2, 3, 4, 5]`. As our step value is 2,
Python will take every second element from the sub-list. It starts with first element and it skips second element and takes the third element and so on. So we get `[2, 4]` If the step variable is 3. It will take the first element which is 2 and the third element which is 4 
and sixth element and so on. So the result will be `[2, 5]`

One final thing to remember about list slicing is, it always returns a new list. It won't
change the original list.

Before moving on, let's do a exercise.

Exercise 05-01
```
1) Create a list with your favourite cars
2) Sort the list.
3) Remove the first item in the list and print it.
4) Add the removed car to the end of the list again.
5) Print entire list.
```

## Tuples
Tuple is same as list. The main difference we care about is list is mutable but tuple is
immutable. That means tuple is a read-only object. So whatever we learned about
list is applicable for tuple also. But methods like `append`, `insert` and `pop` won't
work with tuples because those methods modify the list.

```python
>>> basket = ('apple', 'orange', 'banana')
>>> basket.append('grape')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'tuple' object has no attribute 'append'
```
In the above example When we try to append an item to the tuple basket we get `AttributeError`
So let's see what methods are available in a tuple.
```python
>>> dir(basket)
['__add__', ..., 'count', 'index']
```
Just ignore the attributes starting with `__`. We could only see `count` and `index` methods.
So we can call the `count` method and we use indexing operators on tuple. Why do we have
data type tuple if it is mostly same as list? There are two main reasons for this
1) You don't want anybody to change your list at run time.
2) As tuples are read-only it takes limited amount of fixed space. Python does some internal
   optimization on tuple. So generally read operations on tuple is faster than list.


## Sets
Sets are another type of sequence data type. We create a set using the built-in function
called `set`. We can also create set using curly braces. If you remember set theory in
mathematics, we create a a Venn diagram to find common elements in two groups and unique
elements in two group and so on.

Let's understand how set works by creating two sets.
```python
>>> basket1 = {'orange', 'banana', 'apple', 'grape'}
>>> type(basket1)
<class 'set'>
```
`basket1` is a set with four item. Let's create another basket.
```python
>>> basket2 = {'pineapple', 'mango', 'apple', 'grape'}
```
`basket2` is another set with four fruits.

Let's do some mathematic operations on set.
1) Fruits in both basket1 and basket2.
```python
>>> basket1 & basket2
{'grape', 'apple'}
```

2) Fruits either in basket1 or basket2.
```python
>>> basket1 | basket2
{'apple', 'grape', 'mango', 'pineapple', 'orange', 'banana'}
```

3) Fruits in basket1 but not in basket2
```Python
>>> basket1 - basket2
{'orange', 'banana'}
```

4) Fruits in basket2 and not in basket1
```python
>>> basket2 - basket1
{'mango', 'pineapple'}
```

5) Fruits in basket1 or basket2 but not in both
```python
>>> basket1 ^ basket2
{'mango', 'pineapple', 'orange', 'banana'}
```

## Conclusion
In this section we learned about lists, tuples and sets. We covered these three
types in one chapter because they can be somewhat related to each other. Let's
learn about dictionary in next chapter.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTg4MTUxMDMyOV19
-->