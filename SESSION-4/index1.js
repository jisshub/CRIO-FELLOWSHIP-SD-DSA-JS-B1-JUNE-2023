
// empty map
const map = new Map()
console.log(map)

// map with values
const map2 = new Map([
  ['name', 'jissmon'],
  ['age', 26]
])

console.log(map2)

// adding new entry into existing one
map2.set('dob', '10/10/1996')

console.log(map2)

// GET DOB
const dobValue = map2.get('dob')
console.log(dobValue)

// check existence of a key in map
const exists = map2.has('age')
console.log(exists)

// removing entries
const removed = map2.delete('dob')
console.log(removed)
console.log(map2)

// adding mutlitple extires

const newEntries = [
  ['place', 'delhi'],
  ['school', 'depaul'],
  ['program', 'bca']
]

for (const [key, value] of newEntries) {
  map2.set(key, value)
}

console.log(map2)

// iterating through entries
for (const [key, value] of map2.entries()) {
  console.log(key, value)
}

// iterating throuh map
for (const key of map2.keys()) {
  console.log(key)
}

// iterating throuh values
for (const value of map2.values()) {
  console.log(value)
}

// SIZE AND CLEARING

console.log(map2.size)
map2.clear()