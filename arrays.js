// console.log("Day three's session is on arrays and loops")

// let coffeeOrder = [
//     "bob - latte",
//     "sarah - americano",
//     "Steve - flat white"
// ]

// coffeeOrder[2] = "Dave - Hot chocolate"

// console.log (coffeeOrder)

// let footballGoalkeepers = [
//     "Andre Onana - Manchester United",
//     "Ederson - Manchester City",
//     "Alisson - Liverpool",
//     "David Raya - Arsenal"
// ]
// console.log(footballGoalkeepers[1])
// footballGoalkeepers[1] = "Emiliano Martinez - Aston Villa"
// console.log(footballGoalkeepers[1])

// let defenders = [
//     "Varane - Manchester United",
//     "John Stones - Manchester City",
//     "Saliba - Arsenal"
// ]
// push method to add to the array
// defenders.push ("Van Dijk - Liverpool")
// console.log(defenders)

// Array Manipulation
let numbers = [
    "1",
    "2",
    "3",
    "4"
]
// Using the push method to add an element to the end of the array
numbers.push ("5") 
console.log (numbers)
// Using the pop method to remove the last element from the array
numbers.pop () 
console.log (numbers)
// Using the unshift method to add an element to the beginning of the array
numbers.unshift(0) 
console.log (numbers)
// Using the shift method to remove the first element from the array
numbers.shift() 
console.log(numbers)

// Array Iteration 
const names = [
    "Jim",
    "Bob",
    "Sally",
    "Alan",
    "Andrew"
]
// Creating an array of names and iterate over it using forEach, logging each name to the console
names.forEach(console.log)
// Use the map method to create a new array of names with all letters capitalized
const capitalize = names.map(word => word.toUpperCase())
console.log (capitalize)
// Use the filter method to create a new array containing only names that start with the letter A
const result = names.filter((word) => word.charAt(0) == "A")
console.log(result)

// Array Searching and Sorting
// Using the includes method to check if a specific number exists in the array
const num = [
    10,
    20,
    30,
    40,
    50
]
console.log(num.includes(20))
// Use the indexOf method to find the index of a specific element in the array
console.log(num.indexOf(40))

const mythicalCreatures = [
    "Cyclops",
    "Unicorn",
    "Dragon",
    "Werewolf"
]
// Use the sort method to sort an array of strings in alphabetical order
mythicalCreatures.sort()
console.log(mythicalCreatures)
// Use the reverse method to reverse the orders of elements in an array
mythicalCreatures.reverse()
console.log(mythicalCreatures)

//Array Transformation 
// Using reduce to calculate the sum of all elements
 let values = [
    7,
    12,
    16,
    21
 ]
 function totalValues (accumulator, currentValue) {
    return accumulator + currentValue
 }
let totalSum = values.reduce(totalValues)             
console.log(totalSum)
 // Using slice to extract a portion of an array into a new array
const fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange",
    "Kiwi",
    "Grapes"
]
console.log(fruits.slice(3))    
// Using the splice to remove elements from an array and/or insert new elements         
fruits.splice(1, 0, "Pear")
console.log(fruits)
// Using concat to joing two or more arrays
const marioCharacters = [
    "Mario",
    "Lugio",
    "Bowser",
    "Toad"
]

const characterDlc = [
    "Funky Kong",
    "Wiggler",
    "Birdo"
]

const characterRoster = marioCharacters.concat(characterDlc)  
console.log(characterRoster)