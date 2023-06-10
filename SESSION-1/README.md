# SESSION -1

## Time Complexity

Time taken by a piece of code to complete in terms of the input size.

### Example 1
```python
def is_leap(year):
    is_divisible_by_4 = year % 4 == 0
    is_divisible_by_100 = year % 100 == 0
    is_divisible_by_400 = year % 400 == 0

    if is_divisible_by_4 and (not is_divisible_by_100 or is_divisible_by_400):
        return True

    return False

def main():
    N = int(input())
    res = is_leap(N)
    if res:
        print("true")
    else:
        print("false")

if __name__=="__main__":
    main()
```

Sure, here's the time complexity of each line of code:

```python
def is_leap(year):  # O(1)
    is_divisible_by_4 = year % 4 == 0  # O(1)
    is_divisible_by_100 = year % 100 == 0  # O(1)
    is_divisible_by_400 = year % 400 == 0  # O(1)

    if is_divisible_by_4 and (not is_divisible_by_100 or is_divisible_by_400):  # O(1)
        return True  # O(1)

    return False  # O(1)

def main():  # O(1)
    N = int(input())  # O(1)
    res = is_leap(N)  # O(1)
    if res:  # O(1)
        print("true")  # O(1)
    else:  # O(1)
        print("false")  # O(1)

if __name__=="__main__":  # O(1)
    main()  # O(1)
```


As you can see, each line of code in this program has a time complexity of O(1). This means that the execution time of each line is constant and does not depend on the input size. Therefore, the overall time complexity of the program is O(1) as well.

### Example 2

Sure, here's an example problem and program whose time complexity depends on the input size:

Problem: Given an array of integers, find the maximum and minimum values in the array.

Program:

```python
def find_min_max(arr):  # O(1)
    min_val = float('inf')  # O(1)
    max_val = float('-inf')  # O(1)
    for num in arr:  # O(n)
        if num < min_val:  # O(1)
            min_val = num  # O(1)
        if num > max_val:  # O(1)
            max_val = num  # O(1)
    return min_val, max_val  # O(1)

def main():  # O(1)
    arr = [int(x) for x in input().split()]  # O(n)
    min_val, max_val = find_min_max(arr)  # O(n)
    print(f"Minimum value: {min_val}")  # O(1)
    print(f"Maximum value: {max_val}")  # O(1)

if __name__ == "__main__":  # O(1)
    main()  # O(n)

```

The time complexity of this program depends on the length of the input array. Specifically, the for loop in the find_min_max() function iterates over each element in the array, which takes O(n) time, where n is the length of the array. Therefore, the overall time complexity of the program is O(n).

The total time complexity of the program is the sum of the time complexities of each line of code, which is O(n) for the for loop in the find_min_max() function and O(n) for the list comprehension in the main() function, plus O(1) for all other lines of code. Therefore, the overall time complexity of the program is O(n).


## Example 3 - Simple Program

```javascript
function Sum(a, b){
    let c = 0;
    c = a + b
    return c
}

console.log(Sum(1, 2))
```

Sure! Here's the time complexity for each line of code in the program:

```javascript
function Sum(a, b){  // O(1)
    let c = 0;  // O(1)
    c = a + b;  // O(1)
    return c;  // O(1)
}

console.log(Sum(1, 2));  // O(1)
```

### Explanation

1. function Sum(a, b){: This line defines a function Sum that takes two parameters a and b. The time complexity for this line is constant or O(1) because it only involves function definition.

2. let c = 0;: This line declares a variable c and initializes it to 0. The time complexity for this line is constant or O(1) because it involves variable declaration and initialization.

3. c = a + b;: This line adds the values of a and b and assigns the result to c. The time complexity for this line is constant or O(1) because it involves a simple arithmetic operation.

4. return c;: This line returns the value of c. The time complexity for this line is constant or O(1) because it involves returning a single value.

5. console.log(Sum(1, 2));: This line calls the Sum function with arguments 1 and 2, and prints the result to the console. The time complexity for this line is constant or O(1) because it involves function invocation and console output.

Therefore, we can conclude that the total time complexity of the program is constant or O(1). The program performs a fixed number of operations regardless of the input values, and the time it takes to execute remains constant.

### Example 4 - 2 Nested For Loops

```js
function solve(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i * j)
    }
  }
}

solve(5)
```

### Explanation: 

To determine the time complexity of the given code, let's analyze it line by line:

1. The code defines a function `solve` that takes an input `n`.
   - Time complexity: O(1) (constant time)

2. The code initializes a loop variable `i` to 0 and iterates as long as `i` is less than `n`.
   - Time complexity: O(n) (linear time)

3. Inside the first loop, the code initializes a loop variable `j` to 0 and iterates as long as `j` is less than `n`.
   - Time complexity: O(n) (linear time)

4. Inside the second loop, the code executes a single operation: `console.log(i * j)`.
   - Time complexity: O(1) (constant time)

The total time complexity of the nested loops can be calculated by multiplying the time complexities of each loop:

- The first loop iterates `n` times, resulting in a time complexity of O(n).
- For each iteration of the first loop, the second loop also iterates `n` times, resulting in a time complexity of O(n).
- Inside the second loop, the operation `console.log(i * j)` has a constant time complexity of O(1).

To calculate the total time complexity, we multiply the time complexities of each loop:

```bash
O(n) * O(n) * O(1) = O(n^2)
```

Therefore, the total time complexity of the code is O(n^2) or quadratic time complexity.


### Example - 5 - 3 Nested for loops

```js
function printTriplets(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= n; k++) {
        console.log(i, j, k);
      }
    }
  }
}
```

### Explanation:

Certainly! Here's the explanation again for you to copy:

The `printTriplets` function takes an input `n` and prints all possible triplets of numbers from 1 to `n`. It accomplishes this using three nested for loops.

Let's analyze the time complexity of this code step by step:

1. The code initializes a loop variable `i` to 1 and iterates as long as `i` is less than or equal to `n`.
   - Time complexity: O(n) (linear time)

2. Inside the first loop, the code initializes a loop variable `j` to 1 and iterates as long as `j` is less than or equal to `n`.
   - Time complexity: O(n) (linear time)

3. Inside the second loop, the code initializes a loop variable `k` to 1 and iterates as long as `k` is less than or equal to `n`.
   - Time complexity: O(n) (linear time)

4. Inside the third loop, the code executes a single operation: `console.log(i, j, k)`.
   - Time complexity: O(1) (constant time)

The total time complexity of the nested loops can be calculated by multiplying the time complexities of each loop:

```bash
O(n) * O(n) * O(n) * O(1) = O(n^3)
```

Therefore, the total time complexity of the `printTriplets` function is O(n^3) or cubic time complexity.

Total Time Complexity = O(n) * O(n) * O(n) * O(1) = O(n^3)



# Time and Space Complexity Problems

## Problem - 1

```js
const sum = 0;
for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
        sum += j;
    }
}
```

### Explanation:

The given code snippet calculates the sum of a series of numbers using nested loops. Let's analyze the time and space complexity of the code:

Time Complexity:
1. The code initializes a loop variable `i` to 0 and iterates as long as `i` is less than `n`.
   - Time complexity: O(n) (linear time)

2. Inside the first loop, the code initializes a loop variable `j` to `i` and iterates as long as `j` is less than `n`.
   - Time complexity: O(n - i) (linear time)

3. Inside the second loop, the code performs a constant time operation: `sum += j`.
   - Time complexity: O(1) (constant time)

To calculate the total time complexity, we need to sum up the time complexities of all the iterations:

O(n) + O(n - 1) + O(n - 2) + ... + O(1) = O(n + (n - 1) + (n - 2) + ... + 1) = O(n * (n + 1) / 2) = O(n^2)

Therefore, the time complexity of the code is O(n^2) or quadratic time complexity.

### Space Complexity:
The code only uses a single variable `sum` to store the result. Since the space used by `sum` does not depend on the input size `n`, the space complexity remains constant.

Therefore, the space complexity of the code is O(1) or constant space complexity.



## Problem - 2

```js
let count = 0;
for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
        count++;
    }
}
```

### Explanation

The given code snippet counts the number of even numbers from 0 to `n - 1`. Let's analyze the time and space complexity of the code:

Time Complexity:
1. The code initializes a loop variable `i` to 0 and iterates as long as `i` is less than `n`.
   - Time complexity: O(n) (linear time)

2. Inside the loop, the code performs a constant time operation: checking if `i` is even (`i % 2 === 0`) and incrementing `count` if true.
   - Time complexity: O(1) (constant time)

The total time complexity is determined by the number of iterations of the loop, which is `n`.

Therefore, the time complexity of the code is O(n) or linear time complexity.

Space Complexity:
The code uses a single variable `count` to store the result. Since the space used by `count` does not depend on the input size `n`, the space complexity remains constant.

Therefore, the space complexity of the code is O(1) or constant space complexity.


## Problem - 3

```js
const i = 0;
while (i < n) {
    i++;
    if (i % 2 === 0) {
        i *= 2;
    }
}
```


### Explanation:

The time complexity of the given code snippet is O(log n). Let's break down the code to understand why:

1. The code initializes a constant variable `i` to 0.
   - Time complexity: O(1) (constant time)

2. The while loop continues as long as `i` is less than `n`.
   - Time complexity: The number of iterations is determined by the value of `n`. Let's denote the number of iterations as `k`.

3. Inside the while loop, the code increments `i` by 1.
   - Time complexity: O(1) (constant time)

4. Inside the while loop, the code checks if `i` is even (`i % 2 === 0`), and if true, it multiplies `i` by 2.
   - Time complexity: O(1) (constant time)

For each iteration, `i` is incremented by 1. However, when `i` is even, it is multiplied by 2. This means that `i` will take on powers of 2 in each iteration: 2^0, 2^1, 2^2, 2^3, and so on, until it reaches a value greater than or equal to `n`.

Let's say `k` is the number of iterations required to reach a value greater than or equal to `n`. In this case, we can write `n <= 2^k`. Taking the logarithm base 2 of both sides, we get `log2(n) <= k`. Therefore, the number of iterations `k` is bounded by `log2(n)`.

Hence, the time complexity of the code is O(log n), where `n` represents the input value.

### Space Complexity:
The code only uses a single constant variable `i` to store the value. Since the space used by `i` does not depend on the input size `n`, the space complexity remains constant.

Therefore, the space complexity of the code is O(1) or constant space complexity.

# SESSION - 2

## Space Complexity

- In programming, space complexity refers to the amount of memory or space required by an algorithm to solve a problem. It is a measure of how much additional memory is needed as the input size increases.

- Space complexity is typically expressed in terms of the "Big O" notation, which describes the upper bound or worst-case scenario for the space requirements.

### Example:

```js
function printNumbers(n) {
  var numbers = [];
  for (var i = 0; i < n; i++) {
    numbers.push(i);
  }
  return numbers;
}
````

### Above Problem Explanation:

- It defines a function printNumbers that creates an array numbers and adds numbers from 0 to n-1 to the array using a for loop.

- The numbers array grows linearly with the input n. As the loop iterates n times, the size of the array increases by 1 in each iteration. Therefore, the space complexity of this algorithm is **O(n)**.

- The space complexity is **linear** because the memory required grows proportionally with the input size n.

- Remember that the space complexity analysis focuses on the memory requirements of the algorithm as the input size increases, while disregarding other factors like memory used by the program's execution stack or constant-sized variables.



