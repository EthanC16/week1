// console.log("All around the world" .charAt(8) .toUpperCase())

// let firstName = "ethan"
// firstName = "bob"
// console.log (firstName)

// const secondName = "cobb"
// console.log(secondName)


// let number = (Math.random())
// console.log(number)

// const num = 3
// console.log(num % 2)

// let numb = 11
// numb = numb + 1
// console.log(numb)

// let myName = "ethan"
// let favNum = 6
// let favDrink = "Dr Pepper"

// console.log(
//     "My name is " + myName + " my favourite number is " + favNum + " and my favourite drink is " + favDrink 
//     )

// console.log(`My name is ${myName}, my favourite number is ${favNum}, and my favourite drink is ${favDrink}`)

//activity 1
let aName ="Bob"
aName = "Gary"
let anAge = 76
anAge = 65
let favColour ="green"
favColour = "blue"

console.log (
    `There is a man named ${aName} he is ${anAge}, and his favourite colour is ${favColour}`
)

//activity 2
let breakfast = "cheerios"
let lunch = "a sandwich"
let dinner = "pasta"

console.log (
    `Today for breakfast I had ${breakfast}, for lunch I had ${lunch} and for dinner some ${dinner}`
)

breakfast = "toast"
lunch = "noodles"
dinner = "pizza"

console.log (
    `Tomorrow for breakfast I am having ${breakfast}, for lunch I will have ${lunch} and for dinner a ${dinner}`
)


//activity 3
let birthDate = new Date ("06/20/2001")
let todaysDate = new Date()

let Difference_In_Time = 
    todaysDate.getTime() - birthDate.getTime()

let Difference_In_Days = Math.round (Difference_In_Time / (1000 * 3600 * 24))

console.log
    ("Total number of days between today and my birth date is:\n" + Difference_In_Days + " days"
    )

//activity 4
let space1 = 'X'
let space2 = 'O'
let space3 =  ''
let space4 = 'X'
let space5 = 'X'
let space6 = ''
let space7 = 'O'
let space8 = ''
let space9 = ''

console.log (`      |       |       `)
console.log (`   ${space1}  |   ${space2}   |       `)
console.log (`      |       |       `)
console.log (` - - - - - - - - - - `)
console.log (`      |       |       `)
console.log (`   ${space4}  |   ${space5}   |       `)
console.log (`      |       |       `)
console.log (` - - - - - - - - - - `)
console.log (`      |       |       `)
console.log (`   ${space7}  |       |       `)
console.log (`      |       |       `)








