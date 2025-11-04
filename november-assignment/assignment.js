// Task 1: The if Statement (10 marks)
// Write a JavaScript program that:
// Asks the user to enter their age.
// If the age is less than 18, print "You are too young to vote."
// If the age is between 18 and 64, print "You are eligible to vote."
// If the age is 65 or above, print "You are a senior citizen voter."
// 💡 Hint: Use prompt() for input and if...else if...else statements.

// using the number method so it can accept my number 

// let age = Number(prompt("what is your age?"));

// if (age < 18){
//     alert ("you are too young to vote")
// }else if( age >= 18 && age <= 64){
//     alert ("you are eligible to vote")
// }else if (age >= 65){
//     alert ("you are a senior citizen voter")
// }else {
//     alert("new age detected")
// }


// Task 2: The for Loop (10 marks)
// Write a program that:
// Prints all even numbers between 1 and 20.
// Calculates the sum of those even numbers and displays it at the end.
// 💡 Hint: Use a for loop and an if statement inside it.

// let sum = 0;

// for (let i = 1; i <= 20; i++){
//     if (i % 2 === 0){
//         console.log(i) //printing out the even numbers
//         sum += i
//     }
// }
// console.log("final answer:", sum)

// Task 3: The while Loop (10 marks)
// Write a program that:
// Starts counting from 1.
// Keeps printing numbers until it reaches 10.
// Stop when the number equals 10.
// 💡 Hint: Use let count = 1; while (count <= 10) { ... }

let count = 1;

while (count <= 10 ){
    console.log(count++);
}

// Task 4: The switch Statement (10 marks)
// Write a program that:
// Asks the user to enter a number from 1 to 7.
// Use a switch statement to print the day of the week corresponding to that number (1 = Monday, 2 = Tuesday, ... 7 = Sunday).
// If the number is not between 1 and 7, print "Invalid day number!".

let day = prompt(" enter a number")

day = Number(day)
switch (day){
    case 1 :
        console.log("the day is Monday");
        break;
    case 2 :
        console.log("the day is Tuesday");
        break;
    case 3 :
        console.log("the day is Wednesday");
        break;
    case 4 :
        console.log("the day is Thursday");
        break;
    case 5 :
        console.log("the day is Friday");
        break;
    case 6 :
        console.log("the day is Saturday");
        break;
    case 7 :
        console.log("the day is Sunday");
        break;
        default:
            console.log("Invalid day number")
}