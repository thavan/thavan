```python
# string
# string methods always returns new string
'Apple'.replace('pp', 'xx') # produces new string

x = 'abc,efg,hij'
x.split(',') # ['abc', 'efg', 'hij']
# split function can take only one seperator. To use multiple separator we can use re.split
import re
x = 'abc,efg-hij'
re.split(r'[,-]', x)

# list
[0] * 3 # => [0, 0, 0] multiplying a list by a number multiplies the list content by that number.

# list comprehensions
basket = ['mango', 'orange', 'strawberry']

basket2 = [fruit for fruit in fruits] # creates a copy of fruits
basket = [fruit.capitalize() for fruit in fruits] # new list with all items in capitalized.

# objects comparision
a = None # There is only one None object in memory
b = None
id(a) == id(b) # True

a is b # returns True because both objects are same.

# value comparision
a = [1, 2, 3]
b = [1, 2, 3]

a is b # False (compares object)
a == b # True (compares actual values)



# join all the items with a common string
','.join(fruits) # => 'Mango, Orange, Strawberry'

basket2 = (fruit.upper() for fruit in fruits) # output is a tuple as it is surrounded by ()



#
```
