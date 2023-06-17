[SESSION-1](#SESSION-1)

[Time Complexity](#Time-Complexity)

[Time and Space Complexity Problems](#Time-and-Space-Complexity-Problems)

[SESSION - 2](#SESSION-2)

[Arrays](#arrays)

[Matrix](#matrix)

[SESSION 3](#session-3)

[Worst Case Situation](#Worst-Case-Situation)

[]()

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

### Example 1:

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


### Example 2:

```js
const sum = 0; // 1
for (let i = 0; i < n; i++) { // 1
  for (let j = i; j < n; j++) { // 1
    sum += j; // 0
  }
}
```

### Explanation

The sum variable is a constant and doesn't change with the input size. Therefore, it doesn't contribute to the space complexity.

The i and j variables are loop counters and require constant space, regardless of the input size. Hence, they don't affect the space complexity.

The main concern for space complexity is the memory usage of data structures or variables that grow with the input size. In this case, no data structures or variables grow with n. Therefore, the space complexity of this code is **O(1)** (constant).

This means that the amount of memory required by the code remains constant, regardless of the input size n.

### Line-by-Line Space Complexity Computation

1. 
```js
const sum = 0;
```
The line const sum = 0; declares a constant variable sum, which requires a constant amount of space. Therefore, the space complexity of this line is O(1).

2.
```js
for (let i = 0; i < n; i++) {
```
The line for (let i = 0; i < n; i++) { initializes a loop counter i and requires constant space. Hence, the space complexity of this line is also O(1).

3. 

```js
for (let j = i; j < n; j++) {
```

The line for (let j = i; j < n; j++) { initializes another loop counter j and requires constant space. Therefore, the space complexity of this line is O(1).

4.
```js
sum += j;
```

The line sum += j; performs a constant-time operation by updating the sum variable. It doesn't require additional space. Hence, the space complexity of this line is O(1).


### Example 3:

```js
function findCommonElements(arr1, arr2) {
  const commonElements = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        commonElements.push(arr1[i]);
        break;
      }
    }
  }
  return commonElements;
}
```

### Explanation 

The space complexity of the findCommonElements() function is **O(k)**, where k is the number of common elements between arr1 and arr2.

This is because the function initializes an empty array called commonElements at the beginning of the function, and then appends each common element it finds to this array. The maximum size of this array is k, because there can be at most k common elements between arr1 and arr2.

In the worst case, where there are no common elements between arr1 and arr2, the commonElements array will be empty and have a size of 0, resulting in a space complexity of **O(1)**.


## Collections/Modules/Libraries



## Arrays

- In JavaScript, an array is a data structure that allows you to store and manipulate multiple values of different types in a single variable. It is a container that holds a collection of elements, which can be accessed and manipulated using their positions or indices.

### Static Arrays & Dynamic Arrays

The concept of static arrays typically refers to arrays with a fixed size that cannot be dynamically resized. However, JavaScript arrays are dynamic in nature, meaning they can grow or shrink as needed.


## Matrix


### Activities

Find time and space complexities of below problems.

1.

```js
function processArrays(arr, matrix) {
    let n = arr.length;
    let m = matrix.length;
    
    // Operation 1: Iterate over the 1D array
    for (let i = 0; i < n; i++) {
        // Perform some operation on arr[i]
    }
    
    // Operation 2: Iterate over the 2D matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            // Perform some operation on matrix[i][j]
        }
    }
}
```

#### Explanation

The time complexity of the given code is **O(nm)**, where n is the length of the 1D array arr, and m is the number of rows in the 2D matrix matrix.

This is because the code performs two nested loops, one over the 1D array of length n, and another over the 2D matrix of size mxk. For each element in the array and in the matrix, the code performs a constant amount of work. Therefore, the total amount of work done by the code is proportional to nxm.

The space complexity of the given code is **O(1)**, which means it uses a constant amount of extra space, regardless of the size of the input arr and matrix.

This is because the code only uses a fixed number of variables (n, m, i, j, and the function parameters), and the amount of memory they consume does not depend on the size of the input. Therefore, the space complexity of the algorithm is constant.

Time Complexity: O(nm)
Space Complexity: O(1)

2.

```js
function createMatrix(n) {
    let matrix = new Array(n);
    
    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(n);
        
        for (let j = 0; j < n; j++) {
            matrix[i][j] = i + j;
        }
    }
    
    return matrix;
}
```

#### Explanation

The given function, `createMatrix`, creates a square matrix of size `n` and assigns values to its elements. Let's analyze its time complexity and space complexity:

Time Complexity:
- The outer loop runs `n` times, representing the rows of the matrix.
- The inner loop also runs `n` times, representing the columns of the matrix.
- Within the inner loop, a constant-time operation (`matrix[i][j] = i + j`) is performed to assign a value to each element.
- Therefore, the time complexity of this function is O(n^2) because the number of iterations is proportional to the square of the input size (`n`).

Space Complexity:
- The function creates a 2D array called `matrix` with a size of `n x n`. This requires allocating memory for `n` rows, each containing `n` elements.
- The space complexity of creating the `matrix` array is O(n^2) because it grows proportionally to the square of the input size (`n`).
- Additionally, the function uses a few variables (`i`, `j`) to keep track of indices, but these occupy a constant amount of space regardless of the input size.
- Therefore, the overall space complexity is O(n^2).

In summary:
- Time Complexity: O(n^2)
- Space Complexity: O(n^2)

The time complexity is quadratic, meaning the number of operations grows quadratically with the input size (`n`). Similarly, the space complexity is also quadratic because the amount of memory needed increases with the square of the input size.

3. 
```js
function findMaxElement(matrix) {
    let maxElement = Number.MIN_VALUE;
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            maxElement = Math.max(maxElement, matrix[i][j]);
        }
    }
    
    return maxElement;
}
```

#### Explanation

The given function, `findMaxElement`, takes a matrix as input and finds the maximum element within that matrix. Let's analyze its time complexity and space complexity:

**Time Complexity:**
- The outer loop iterates `matrix.length` times, which represents the number of rows in the matrix.
- The inner loop iterates `matrix[i].length` times, which represents the number of columns in each row.
- Within the inner loop, the `Math.max` function is used to compare the current element with the `maxElement` variable, updating it if necessary.
- Since each element is visited once, the number of comparisons made is proportional to the total number of elements in the matrix.
- Therefore, the time complexity of this function is O(rows * columns), where rows represents the number of rows and columns represents the number of columns in the matrix.

**Space Complexity:**
- The function uses a single variable, `maxElement`, to store the maximum value found.
- Other than that, it does not use any additional data structures that grow with the input size.
- Hence, the space complexity of this function is O(1), which is constant.

In summary:
- Time Complexity: O(rows * columns)
- Space Complexity: O(1)

The time complexity depends on the number of elements in the matrix, as each element is compared to find the maximum. The space complexity is constant because the function only uses a single variable to store the maximum value and does not allocate any additional memory based on the input size.

# Session 3

<!-- time: 17: 50 -->

## Worst Case Situation

- In algorithm analysis, the worst-case scenario refers to the situation where an algorithm takes the longest possible time or requires the maximum number of operations to complete. 

Let's consider an example JavaScript function that performs a search for a specific element in an array using nested for loops:

```js
function searchElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === target) {
        return true;
      }
    }
  }
  return false;
}
```

- Now, let's analyze the worst-case scenario line by line:

1. The function **searchElement** takes an array (arr) and a target element (target) as parameters.

2. The outer loop is initialized with let i = 0, setting the initial value of the loop variable i to 0.

3. The condition i < arr.length is checked at the beginning of each iteration of the outer loop. If the condition is true, the loop body will execute; otherwise, the loop will terminate.

4. Inside the outer loop, the inner loop is initialized with let j = 0, setting the initial value of the loop variable j to 0.

5. The condition j < arr.length is checked at the beginning of each iteration of the inner loop. If the condition is true, the loop body will execute; otherwise, the loop will terminate.

6. The loop body checks whether the element at arr[i][j] is equal to the target element. If they match (arr[i][j] === target), the function returns true to indicate that the element is found.

7. If the inner loop completes without finding the target element in the current row, the outer loop continues to the next row.

8. If the outer loop completes without finding the target element in any row, the function reaches the line return false, indicating that the element is not present in the array.

In terms of worst-case scenario analysis, the worst case occurs when the target element is not present in the array, or it is located in the last position of the last row. In this case, both loops will iterate over the entire array, resulting in a time complexity of O(n^2), where n is the size of the array.


## Strings

- A collection of characters.

#### Substring: any continuous part of the original string.


In JavaScript, a string is a sequence of characters enclosed in single quotes (''), double quotes (""), or backticks (``). Strings are one of the fundamental data types in JavaScript and are commonly used to store and manipulate textual data.

Here's an example that demonstrates working with strings in JavaScript:

```js
let message = "Hello, world!";

console.log(message); // Output: Hello, world!

// String length
console.log(message.length); // Output: 13

// Accessing individual characters
console.log(message[0]); // Output: H
console.log(message.charAt(7)); // Output: w

// Concatenation
let name = "Alice";
let greeting = "Hello, " + name + "!"; // Using the + operator
console.log(greeting); // Output: Hello, Alice!

// String interpolation (using backticks)
let age = 25;
let info = `My name is ${name} and I'm ${age} years old.`;
console.log(info); // Output: My name is Alice and I'm 25 years old.

// String methods
console.log(message.toUpperCase()); // Output: HELLO, WORLD!
console.log(message.toLowerCase()); // Output: hello, world!
console.log(message.indexOf("world")); // Output: 7
console.log(message.includes("llo")); // Output: true
console.log(message.slice(7, 12)); // Output: world
```


### Prefixes

Any substring that starting from first letter of original string.


### Suffix

Any substring that ends at the last letter of original string.

- In JavaScript, a prefix is a set of characters placed before a variable or value, while a suffix is a set of characters placed after a variable or value. Prefixes and suffixes can be used to modify or transform data in various ways. Here are a few examples:

#### Example - Prefix with string:

```js
let message = "world";
let prefixedMessage = "Hello, " + message;
console.log(prefixedMessage); // Output: "Hello, world"
```

- In this example, the prefix "Hello, " is added to the string stored in the message variable using the concatenation operator "+".

#### Example - Suffix with string:

```js
let fileName = "script";
let suffixedFileName = fileName + ".js";
console.log(suffixedFileName); // Output: "script.js"
```

- In this example, the suffix ".js" is added to the string stored in the fileName variable using the concatenation operator "+".


## Mutables & Immutables

- In JavaScript, mutability refers to whether an object or value can be changed after it has been created. Immutable objects or values cannot be modified once created, while mutable objects or values can be modified. Let's understand the concept with simple examples:

### Immutable Example:

```js
let name = "John";
let uppercaseName = name.toUpperCase();

console.log(name); // Output: "John"
console.log(uppercaseName); // Output: "JOHN"
```

- In this example, the **toUpperCase()** method is called on the name variable, which converts the string to uppercase. However, the original value of name remains unchanged. Strings in JavaScript are immutable, meaning that methods like **toUpperCase()** return a new string instead of modifying the existing one.


### Mutable Example:

```js
let person = { name: "John", age: 25 };
person.age = 26;

console.log(person); // Output: { name: "John", age: 26 }
```

- In this example, we have an object person with properties name and age. We are able to directly modify the age property by assigning a new value to it. Objects in JavaScript are mutable, allowing us to change their properties and values.

### Modifying Array Elements

Example - 1

```js
let numbers = [1, 2, 3, 4];
numbers[2] = 5;

console.log(numbers); // Output: [1, 2, 5, 4]
```
- In JavaScript, arrays are mutable, which means their elements can be modified, added, or removed after the array is created


Example - 2

```js
let fruits = ["apple", "banana"];
fruits.push("orange");

console.log(fruits); // Output: ["apple", "banana", "orange"]

```

## Ascii Code

ASCII (American Standard Code for Information Interchange) is a character encoding standard that assigns unique numeric codes to represent characters. In JavaScript, you can use the `charCodeAt()` method to retrieve the ASCII code of a specific character within a string.

Here's an example that demonstrates the usage of `charCodeAt()`:

```javascript
const character = 'A';
const asciiCode = character.charCodeAt(0);

console.log(asciiCode); // Output: 65
```

In this example, the string `'A'` represents a single character. The `charCodeAt(0)` method is called on the string to retrieve the ASCII code of the character at index 0. The returned value, in this case, is `65`, which corresponds to the ASCII code of the capital letter 'A'.

Conversely, if you have an ASCII code and want to convert it back to its corresponding character, you can use the `String.fromCharCode()` method. Here's an example:

```javascript
const asciiCode = 65;
const character = String.fromCharCode(asciiCode);

console.log(character); // Output: A
```

In this example, the variable `asciiCode` holds the ASCII code `65`, and `String.fromCharCode(asciiCode)` is used to convert it back to the character 'A'.

These methods allow you to work with ASCII codes and characters in JavaScript, enabling you to perform conversions and manipulate text based on their numeric representations.


## SESSION - 4

### Linear Search 
  
Linear search, also known as sequential search, is a simple search algorithm that sequentially checks each element in a list or array to find a specific target value. It works by starting at the beginning of the list and comparing each element with the target value until a match is found or the end of the list is reached.

Here's the step-by-step process for performing a linear search:

1. Start at the first element of the list.
2. Compare the current element with the target value.
3. If the current element matches the target value, the search is successful, and you can return the index or perform any desired action.
4. If the current element does not match the target value, move to the next element in the list.
5. Repeat steps 2-4 until a match is found or the end of the list is reached.
6. If the end of the list is reached without finding a match, the search is unsuccessful.


Here's an example implementation of linear search in Python:

```js
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i  # Return the index of the target if found
    return -1  # Return -1 if the target is not found

# Example usage:
my_list = [4, 7, 2, 9, 1, 5]
target_value = 9

index = linear_search(my_list, target_value)
if index != -1:
    print("Target found at index:", index)
else:
    print("Target not found in the list.")

```

In this example, we have a list my_list containing some elements, and we want to search for the target value of 9. The linear_search function iterates over each element in the list and checks if it matches the target value. If a match is found, the function returns the index of the target value. Otherwise, it returns -1 to indicate that the target value was not found.

It's worth noting that linear search has a time complexity of **O(n)**, where n is the number of elements in the list. This means that in the worst case, where the target value is at the end of the list or not present at all, linear search would need to iterate through all the elements. If you have a large list and need to perform frequent searches, other more efficient search algorithms like binary search may be preferable.


### Binary Search

- Binary search is an efficient search algorithm that works on a sorted list or array. It repeatedly divides the search space in half by comparing the middle element with the target value. Based on the result of the comparison, it narrows down the search to the upper or lower half of the list, eliminating the other half. This process is repeated until the target value is found or the search space is empty.

Here's the step-by-step process for performing binary search:

1. Start with a sorted list or array.
2. Define the lower bound (start) and upper bound (end) of the search space. Initially, the entire list is the search space, so start = 0 and end = length of the list - 1.
3. Calculate the middle index of the current search space: middle = (start + end) // 2. The double forward slashes indicate integer division, which ensures that the result is an integer.
4. Compare the middle element (arr[middle]) with the target value.
    - If arr[middle] is **equal** to the target value, the search is successful, and you can return the index or perform any desired action.
    - If arr[middle] is **greater** than the target value, the target value, if it exists, must be in the **lower** half of the search space. Update the upper bound: end = middle - 1, and go back to step 3.
    - If arr[middle] is **less** than the target value, the target value, if it exists, must be in the **upper** half of the search space. Update the lower bound: start = middle + 1, and go back to step 3.
5. Repeat steps 3-4 until a match is found or the search space is empty (start > end).
6. If the search space is empty and the target value is not found, the search is unsuccessful.

Here's an example implementation of binary search in Python:

```python
def binary_search(arr, target):
    start = 0
    end = len(arr) - 1

    while start <= end:
        middle = (start + end) // 2

        if arr[middle] == target:
            return middle  # Return the index of the target if found
        elif arr[middle] < target:
            start = middle + 1
        else:
            end = middle - 1

    return -1  # Return -1 if the target is not found

# Example usage:
my_list = [1, 2, 4, 5, 7, 9]
target_value = 7

index = binary_search(my_list, target_value)
if index != -1:
    print("Target found at index:", index)
else:
    print("Target not found in the list.")
```

In this example, we have a sorted list `my_list` containing some elements, and we want to search for the target value of `7`. The `binary_search` function maintains the search space by updating the start and end indices based on the comparison with the middle element. It continues dividing the search space until it finds the target value or the search space is empty.

Binary search has a time complexity of O(log n), where n is the number of elements in the list. This makes it much more efficient than linear search, especially for large lists.

### Detailed Explanation of Binary Search with an Example

Suppose we have a sorted list `[1, 2, 4, 5, 7, 9]` and we want to search for the target value of `7`.

1. **Start**: 0, **End**: 5 (length of the list - 1)
2. Calculate the middle index: `middle = (start + end) // 2 = (0 + 5) // 2 = 2`
3. Compare `arr[middle]` (which is `4`) with the target value `7`.
   - Since `4` is less than `7`, we update the **start** index to `middle + 1`, which is `3`.
4. **Start**: 3, **End**: 5
5. Calculate the new middle index: `middle = (start + end) // 2 = (3 + 5) // 2 = 4`
6. Compare `arr[middle]` (which is `7`) with the target value `7`.
   - We found a match! The search is successful, and we return the index `4` where the target value `7` is found.

In this example, during the first iteration, the middle element `4` is less than the target value `7`. Therefore, we update the start index to `3`, narrowing down the search space to the upper half of the list.

In the second iteration, the middle element `7` matches the target value `7`. Since we have found a match, the algorithm returns the index `4`, indicating the target value's position in the list.

This is the general process of how binary search divides the search space in half and effectively narrows down the range of possible values until it finds the target or concludes that the target is not present in the list.

### Map Data Structure

Certainly! In JavaScript, there is a built-in data structure called `Map` that allows you to store key-value pairs. It is similar to an object, but with some differences and additional functionalities. Here's an overview of how to use the `Map` data structure in JavaScript:

**1. Creating a Map:**
You can create a new `Map` object using the `Map` constructor without any arguments, or by passing an iterable (like an array) of key-value pairs.

```javascript
// Creating an empty Map
const map = new Map();

// Creating a Map with initial key-value pairs
const mapWithValues = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
]);
```

**2. Adding and Modifying Entries:**
To add or modify an entry in the `Map`, you can use the `set()` method. If the key already exists, the corresponding value will be updated; otherwise, a new entry will be added.

```javascript
// Adding a new entry or modifying an existing one
map.set('key', 'value');
```

**3. Retrieving Values:**
You can retrieve the value associated with a key using the `get()` method. If the key doesn't exist, `undefined` will be returned.

```javascript
const value = map.get('key');
console.log(value); // Output: 'value'
```

**4. Checking Existence:**
To check if a key exists in the `Map`, you can use the `has()` method, which returns a boolean value.

```javascript
const exists = map.has('key');
console.log(exists); // Output: true or false
```

**5. Removing Entries:**
You can remove an entry from the `Map` using the `delete()` method. It returns `true` if an element with the given key was successfully deleted or `false` if the key was not found.

```javascript
const deleted = map.delete('key');
console.log(deleted); // Output: true or false
```

**6. Iterating Over Entries:**
The `Map` provides several methods to iterate over its entries, keys, or values.

- `keys()`: Returns an iterator for the keys of the `Map`.
- `values()`: Returns an iterator for the values of the `Map`.
- `entries()`: Returns an iterator for the entries (key-value pairs) of the `Map`.

```javascript
// Iterating over keys
for (const key of map.keys()) {
  console.log(key);
}

// Iterating over values
for (const value of map.values()) {
  console.log(value);
}

// Iterating over entries
for (const [key, value] of map.entries()) {
  console.log(key, value);
}
```

**7. Size and Clearing:**
You can obtain the number of entries in a `Map` using the `size` property. To remove all entries from the `Map`, you can use the `clear()` method.

```javascript
console.log(map.size); // Output: number of entries

map.clear(); // Removes all entries from the Map
```

To modify multiple elements in a `Map` using key-value entries, you can use the `set()` method in a loop. Here's the syntax to modify map elements using multiple key-value entries:

**8. Modifying map with multiple entries:**

```javascript
const map = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3']
]);

// Array of key-value entries for modification
const entriesToModify = [
  ['key1', 'new value 1'],
  ['key2', 'new value 2']
];

// Modifying map elements using the entries
for (const [key, value] of entriesToModify) {
  map.set(key, value);
}
```

In the example above, we have an existing `Map` with some initial key-value pairs. We define an array `entriesToModify` that contains the new key-value entries we want to use for modification. Then, we loop over each entry using destructuring assignment to extract the key and value. Within the loop, we call `set()` on the `Map` instance and pass the key and new value to modify the corresponding element.

After executing the loop, the specified elements in the `Map` will be modified with the new values. You can access them using the respective keys.

That covers the basics of using the `Map` data structure in JavaScript. It's a versatile tool for storing key-value pairs and provides efficient methods for data manipulation and retrieval.