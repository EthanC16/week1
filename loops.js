// console.log ("This afternoon's session is about loops")

// This is a for loop, it will iterate through the array and console log for each item 
// i stands for index, which is widely used in loops
// let favDrink = [
//     "Dr Pepper",
//     "Apple juice",
//     "Coffee"
// ]
// for (let i = 0; i < favDrink.length; i++){
//     console.log(favDrink[i])

// Using loops with an 'if' statement to find multiples of 2
// let multiplesOfFive = []
// for (let i = 0; i <= 40; i++) {
//     if (i % 5 == 0) {
//         multiplesOfFive.push(i)
//     }
// }
// console.log (`numbers divisible by 5 are ${multiplesOfFive}`)

// Using while loops creates a loop that is continued to be executed while a condition is true

// let age = 15
// while (age < 18) {
//     console.log(`you're a child at ${age}`)
//     age++
// }

// console.log(`You're an adult! ${age}`)

// some more while loops 

// let card = [
//     "diamond",
//     "spade",
//     "heart",
//     "club"
// ]
// let currentCard = "club"
// while (currentCard != "spade") {
//     console.log(currentCard)
//     currentCard = card[Math.floor(Math.random()*4)]
// }
// console.log(currentCard)

// Challenge 1
// create an array that lists fav film up to 5 then using a method input 2 more
let favFilms = [
    "Dune Part Two",
    "The Dark Knight",
    "The Florida Project",
    "First Reformed",
    "Arrival"
]
favFilms.push("Blade Runner")
favFilms.push ("The Lighthouse")
// using index to cycle loop and console log each item
for (let i = 0; i < favFilms.length; i++){
    console.log(favFilms[i])}
// method using .forEach
favFilms.forEach(film => console.log(film))
 
// Challenge 2

function aRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
let randomNumbers = []
for (let i = 0; i < 6; i++) {
    randomNumbers.push(aRandomNumber(1, 50))
}
console.log("Random numbers:", randomNumbers)

// Challenge 3
for (let i = 9; i >= 0; i--) {
    console.log(i);
  }

// day 4 starter challenge
// Create a JS program that prints out a multiplication table
let startingNum = 5  // Take a number representing the multiplication table they want to generate
for (let i = 1; i <= 10; i++) {     // Use a loop to iterate from 1 to 10
 console.log (`${i} multiplied by ${startingNum} = ${i*startingNum}`)
}  