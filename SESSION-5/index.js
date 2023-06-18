const set = new Set()
console.log(set)

set.add(2);
set.add('hello');
set.add(true);

console.log(set)

// check set size
console.log(set.size)

// remove set value
set.delete(2);
console.log(set);

// clear the set
set.clear();
console.log(set);

// retrive data from set

const set2 = new Set([
  1,2,3,4,4,5,5,6,7
])

// iterate over set
set2.forEach(val => {
  console.log(val);
})

// set -> array using spread operator
const set2Arr = [...set2]
console.log(set2Arr)


// set problem 
function findUniqueNumbers(arr) {
  const set3 = new Set(arr)
  for (const number of arr) {
    set3.add(number)
  }
  return Array.from(set3)
}

const result = findUniqueNumbers([1, 2, 3, 2, 4, 1, 5])
console.log(result)