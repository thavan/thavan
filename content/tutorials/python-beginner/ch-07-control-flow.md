---
title: "Control FLow"
date: 2020-04-19 10:00:00
toc: true
---
## 7.1 Introduction
In this chapter, we will learn about how to use `if`, `for`, and `while` loops. we will learn basics of them. 
We will learn more when we go along with other chapters and also when doing more exercises.

## 7.2 If loop
If loop is a programming hero. It is very hard to write any program without a if loop. Let's understand if condition 
with an example. Let's find out the weight category using given BMI value.

```python
bmi = 18.5

if bmi < 18.5:
    print('Underweight')
elif 18.5 <= bmi < 25:
    print('Normal weight')
elif 25 <= bmi < 30:
    print('Overweight')
else:
    print('Obesity')
```
In the above program, we have have a variable called bmi and it's value is 18.5.
First we check if the bmi value is less than 18.5 and print `Underweight` if that
is true. From 18.5 to 25, we print as normal weight and 25 to 30, we print it as over weight. And above 30, we print
it as Obesity. Python executes `else` if all other `if` or `elif` conditions are not satisfied.

## 7.3 For loop
```pydocstring
>>> for i in range(3):
>>>    print(i)
1
2
3
```
In the above code, we print 1 to 3 one by one. `range` function is used to generate a range of numbers.

```pydocstring
>>> prices = [1,2,3,4]
>>> total = 0
>>> for price in prices:
        total += price
>>> print(f'Total: {total}')
Total: 10
``` 
In the above program we find the sum of all numbers from a given list. We iterate through the numbers one by one
and we add that number to the total. We don't do this in real life. We simple call `sum(prices)` where sum is a
built-in function which returns sum of given numbers.

## 7.4 While Loop
While loop is very similar to for loop, but it executes only when certain condition are met. Lets say we are boarding
goods in a container, which has a capacity of 100. We have the weight of each item in a list. It is [20, 30, 50, 20].
In the 4 items, we would able to accommodate only goods worth the of weight 100. Lets say we accommodate them on first 
come first serve basis. So the program would be

```python
goods = [20, 30, 50, 20]
capacity = 100
total_weight = 0
count = 0

while total_weight + goods[count] <= capacity:
    total_weight += goods[count]
    count += 1

print(f'Loaded {count} items worth weight {total_weight}')     
```
And the output is `Loaded 3 items worth weight 100`. In the above, in each iteration, we check if the total weight
plus the current item's weight is less than total capacity. If it is less than, it means we can accommodate that item.
So add we load the item in container and proceed with the other item. The same program has been written down with minor
modification below. See if you can find out the difference.

```python
goods = [20, 30, 50, 20]
capacity = 100
total_weight = 0
count = 0

while True:
    if total_weight + goods[count] <= capacity:
        total_weight += goods[count]
        count += 1
    else:
        break

print(f'Loaded {count} items worth weight {total_weight}')     
```

Yes, while loop condition is given as True, which means this condition will always be satisfied. So we have to `break`
the loop inside the `while`. We check if the total is less than capacity and if it is not, then we break the loop.
It is very important to have a break statement inside the while loop, if we are having a always true condition in while
loop.

## 7.5 Conclusion
I think devoting an entire chapter for control statements are not necessary.
We can learn the control statements along the way when we learn other topics. But I wanted to give an introduction 
anyway. So I have kept this chapter as simple as possible. We will learn more along the way.