
    //Challenge 1 

const storeMeals = () => {
let meals = {
          breakfast: "Cheerios",
          lunch: "Ham sandwich",
          dinner: "Spaghetti"
        };
        
        return meals;
}
let todaysMeals = storeMeals();
console.log("Breakfast:", todaysMeals.breakfast);
console.log("Lunch:", todaysMeals.lunch);
console.log("Dinner:", todaysMeals.dinner);



    //Challenge 2

let fizzBuzz = (num) => {
  if (typeof num === 'string' || num <= 0) {
    return 'needs to be a positive number';
}
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizz buzz';
  }
  if (num % 3 === 0) {
    return 'fizz';
  }
  if (num % 5 === 0) {
    return 'buzz';
  }
  return num;
}
console.log(fizzBuzz(3));   // "fizz"
console.log(fizzBuzz(5));   // "buzz"
console.log(fizzBuzz(15));  // "fizz buzz"
console.log(fizzBuzz(2));   // returns the value of num, this case is 2
console.log(fizzBuzz("this is a string")); // "needs to be a positive number"


    //Challenge 3

const sumCheck = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "Make sure you add 2 numbers"
    }
let sum = num1 + num2
    if (sum % 2 === 0) {
        return sum
    } else {
        return num1 * num2
    }
}
console.log(sumCheck(3, 6)) // this console.log test returns the value 18 as the two sums are multiplied



    // Challenge 4

let aRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
}
let randomNumbers = []
    for (let i = 0; i < 6; i++) {
        randomNumbers.push(aRandomNumber(1, 50))
}
console.log("Random numbers:", randomNumbers)



    // Challenge 5

for (let i = 9; i >= 0; i--) {
        console.log(i);
}



    // Challenge 6

let inputNum = 5  
for (let i = 1; i <= 10; i++) {     
 console.log (`${inputNum} * ${i} = ${i*inputNum}`)
}  


    // Challenge 7

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
