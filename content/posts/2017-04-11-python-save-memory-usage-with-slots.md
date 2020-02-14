---
categories:
- Python
date: "2017-04-11T09:00:00Z"
tags:
- python-slots
- memory
title: Reduce memory usage in Python using slots
---

slots is a kind of Python magic that reduces memory usage of a program. It's useful only when we have a 
lot objects with fixed number of attributes. For example let's assume we have a online shopping website. 
whenever a user adds a item to the cart, we create a object for that item. For example,

```python
class CartItem(object):

    def __init__(self, item_id, added_time):
        self._item_id = item_id
        self._added_time = added_time
```

Let's create an object for CartItem.

```
>>> i = CartItem(232322232, '2016-12-12 02:23') 
>>> i._added_time
'2016-12-12 02:23'
>>> i.count = 3
>>> i.myvariable = 'hello'
>>> i.__dict__
{'_added_time': '2016-12-12 02:23', 'count': 3, '_item_id': 232322232, 'myvariable': 'hello'}
>>> 
```

as we noticed, we are free to add any new property to our CartItem object, and object's `__dict__` contains all 
the properties of the class. Let's say there are millions of Items floating around in all shopping carts.
As python uses dictionary to store variables, each dictionary will have a hash table for faster lookups. This
requires additional space. This space is insignificant when we have a minimum number of objects. But it can 
consume a lot of space if the number of objects are relatively very high.

There is a special class variable in Python called `__slots__`. Let's update our CartItem class 
to use `__slots__`

```python
class CartItem(object):
    __slots__ = ('_item_id', '_added_date')

    def __init__(self, item_id, added_time):
        self._item_id = item_id
        self._added_time = added_time
```

Let's play around with our new class

```
>>> i = CartItem(232322232, '2016-12-12 02:23')
>>> i._added_time
'2016-12-12 02:23'
>>> i._updated_time = '2016-12-12 02:23' # can't add new attributes
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'CartItem' object has no attribute '_updated_time'
>>> i.__dict__ # there is not __dict__ when you use slots.
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'CartItem' object has no attribute '__dict__'
```

Now the CartItem object is not allowing us create new attributes in the object unless they are specified 
in `__slots__`. `__slots__` can be a string with name of a attribute or an iterable with list of strings 
specifying attribute names. When we add `__slots__` to a class, Python will actually use tuple to store attributes instead of using a dictionary.
In the above example we can clearly see that accessing `__dict__` of the object raised a exception. By using 
tuple instead of a dictionary we save a little bit of memory in our object. This little memory adds up and
become huge when there are huge number of objects in your application.

Let's try to measure our CartItem memory usage with and without `__slots__`

```python
import resource
import time

TOTAL_OBJECTS = 10 ** 7  # 10 millions


class CartItem(object):
    """A simple shopping cart.
    """
    __slots__ = ('_item_id', '_added_time')

    def __init__(self, item_id, added_time):
        self._item_id = item_id
        self._added_time = added_time


def get_usage():
    """Finds the elapsed time and RAM usage of current process.
    Creates 10 million objects of CartItem in a list for measurement.
    :return: 
    """
    initial_usage = resource.getrusage(resource.RUSAGE_SELF).ru_maxrss
    start_time = time.perf_counter()
    items = [CartItem(232322232, '2016-12-12 02:23') for i in range(TOTAL_OBJECTS)]
    final_usage = resource.getrusage(resource.RUSAGE_SELF).ru_maxrss
    total_time = time.perf_counter() - start_time
    total_usage = (final_usage - initial_usage) / (1024 * 1024)
    print("Total Time: {:.2f} seconds".format(total_time))
    print("Total memory usage: {:.2f} megabytes".format(total_usage))


if __name__ == '__main__':
    get_usage()
```

The output is 
```commandline
$ python3 ram_usage.py
Total Time: 8.82 seconds
Total memory usage: 561.23 megabytes
```

If we run the same program after removing `__slots__` class variable,

```commandline
$ python3 ram_usage.py
Total Time: 11.08 seconds
Total memory usage: 1293.38 megabytes
```

Clearly, the space is reduced around 43% after using slots.

### Summary ###
- When there is a huge number of objects with fixed number of properties, using `__slots__` can be huge
beneficial to reduce RAM usage.
- `__slots__` should be declared in every class. If your parent class has defined `__slots__`, child class
will ignore it.
- `__slots__` prohibits creating new attributes to objects unless they are specified in __slots__. This 
side effect cannot be misused to protect your objects from creating new properties.
- All the attributes are stored in tuple instead of object's `__dict__` to save space.