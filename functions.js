// console.log ("Day 4 begins with functions")

// const pressGrindBeans = () => {
//     console.log ("Grinding for 20 seconds")
// }
// pressGrindBeans()
// start by declaring the variable
let coffeeIsGrinding = false
// then we start with an arrow function = =>
const pressGrindBeans = () => {
// we use an if statement to change what happens when the value in the variable changes
    if (coffeeIsGrinding) {
        console.log("Stopping the grind")
        coffeeIsGrinding = false
    } else {
        console.log("Grinding is about to begin")
        coffeeIsGrinding = true
    }
}
// it is important that this part of the function is here
pressGrindBeans()

const cashWithdrawal = (amount, accnum) => {
    console.log (`Withdrawing ${amount} from account ${accnum}`)
}
cashWithdrawal(300, 506403599)
cashWithdrawal(45, 506403599)

// Using parameters which are 'player' and 'amount' within the function brackets
const goalsScored = (player, ammount) => {
    console.log (`${player} has scored ${ammount} goals this season`)
}
goalsScored("Erling Haaland", 18)
goalsScored("Cole Palmer", 16)

// Using return

const addUp = (num1, num2) => {
    // explicit return
    return num1 + num2
}
    // implicit return uses the arrow function instead of the return word
let addUp2 = (num1, num2) => num1 + num2

let result = addUp(2, 3)
console.log(addUp(3, 5))
console.log(result)

    // using functions to call other functions to achieve a goal
const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5)
}
const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32
}
console.log("The temperature is " + getFahrenheit(10) + "F")

    // Do the opposite so now it's fahrenheit to celsius
const getSubtract = (fahrenheit) => {
    return fahrenheit - 32
}
const getCelsius = (fahrenheit) => {
    return getSubtract(fahrenheit) * (5/9)
}
// The number after getCelsius is the temp in fahrenheit you want to convert to celsius
console.log("The temperature is " + getCelsius(50) + "C" )

// Activity 1

let calculateAverage = (mathScore, scienceScore, englishScore) => {
    return (mathScore + scienceScore + englishScore) / 3;
  };
  
  let determineGrade = (averageScore) => {
    if (averageScore >= 90) {
      return "A";
    } else if (averageScore >= 80) {
      return "B";
    } else if (averageScore >= 70) {
      return "C";
    } else if (averageScore >= 60) {
      return "D";
    } else {
      return "F";
    }
  };
  let mathScore = 54;
  let scienceScore = 73;
  let englishScore = 57;
  
  let average = calculateAverage(mathScore, scienceScore, englishScore);
  let grade = determineGrade(average);
  
  console.log("Average Score:", average);
  console.log("Letter Grade:", grade);


