---
categories:
- Python-Beginner-Tutorial
date: "2021-10-02 05:00:00"
tags:
- python
title: Functions
toc:
- true
updated: "2021-10-02 05:00:00"
---
Until now we wrote some code in and executed it line by line. For example we use following code to find the average price of 10 days stock price.

```python
prices = [10, 20, 8, 9, 11, 20, 10, 12, 9 10]
avg_price = sum(prices) / len(prices)
print(f'Average price: {avg_price}')
```

In the above example each line is executed one by one and finally the result is printed.
What if we want to find the averge of another 5 prices? Either we change prices variable or
we add another three lines to find out the average price of new prices like below.

```python
prices = [10, 20, 8, 9, 11, 20, 10, 12, 9 10]
avg_price = sum(prices) / len(prices)
print(f'Average price: {avg_price}')

prices = [90, 20, 18, 19, 11]
avg_price = sum(prices) / len(prices)
print(f'Average price: {avg_price}')
```

Obvisously we can't keep on doing this if we want to average of another 10 numbers.
We have to find a way to re-use the code to find average of numbers. This is where
functions are useful. Functions are re-usable block of code, that can be executed many times as much
as we want.

Now let's write a function to get average of n numbers.

```python
def avg(values):
    return sum(values) / len(values)

prices = [1, 2, 3, 4, 5]
print(f'Avg: {avg(prices)}')
new_prices = [2, 4, 1, 5]
print(f'New Avg: {avg(new_prices)}')
```

In above example function `avg` calculates average in returns it. We call the function
and print the returned value from that function.

## Function Arguments
A function can take arguments to be used inside that function. In the previous example
`avg` function took `values` as argument which is a list of values. There are two type
arguments in Python functions. Positional arguments and keyword arguments.

### Positional Arguments
Positional arguments are arguments that you have to pass to a function when calling it.
If you don't pass any of the positional argument, then Python will throw error. For
example Let's say we want to construct a dictionary of about an employee in a employee
management system. For that, we set employee name, date of birth and dept as mandatory
values for that function.

```python
def get_emp_dict(name, dob, dept):
    return {
        'Name': name,
        'Date of birth': dob,
        'dept': dept,
    }

get_emp_dict('John', '1984-12-12', 'Accounting')
{'Name': 'John', 'Date of birth': '1984-12-12', 'dept': 'Accounting'}
```
When you call that function, you get a dictionary with values passed. What happens if you
don't pass that argument?

```python
>>> get_emp_dict('John', '1984-12-12')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: get_emp_dict() missing 1 required positional argument: 'dept'
```
Ah, it clearly says that we missed dept argument. When we pass list of arguments to a
function, it gets assigned to arguments from let to right. First argument is assigned to
`name` variable, second argument is assigned to `dob` variable and third argument is
assigned to `dept` variable. So when you miss to pass one argument, first two arguments
are assigned to name, dob and third one doesn't have any argument values, and Python throws
error.

### Default values
A function arguments can defined with default values. For example,

```python
def interest(value, rate=5):
    return value * rate/100

print(interest(1000, 10))
100.0  # output
print(interest(1000))
50.0   # output
```
In above example, rate has a default value. When we call the function, it is optional to pass
the default value. If we don't pass a value for rate variable, 5 will be taken as a default
value for that function.

### Keyword arguments
When we call a function, arguments assigned one by one from left to right. In above example, `1000`
will be assigned to `value` and `5` will be assigned to `rate`. If we re-arrange this arguments,
the function may return unexpected outcome. To avoid this confusion, you can name the argument when
calling the function.

```python
>>> interest(15, 1000)
>>> interest(rate=15, value= 1000)
150.0
```

