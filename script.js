document.write("<hr/>");
// Assignment 1: Even or Odd
let number = 7; // You can change this value to test different numbers

if (number % 2 === 0) {
    console.log(`${number} is an even number.`);
} else {
    console.log(`${number} is an odd number.`);
}

document.write("<hr/>");
// Assignment 2: Above or Below Freezing
let temperature = 25; // You can change this value to test different temperatures

if (temperature <= 32) {
    console.log(`The temperature is below freezing.`);
} else {
    console.log(`The temperature is above freezing.`);
}

document.write("<hr/>");

// Assignment 3: Day of the Week
let dayNumber = 4; // You can change this value to test different days

let dayName;
switch (dayNumber) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day number";
}

console.log(`Day ${dayNumber} is ${dayName}.`);

document.write("<hr/>");

// Assignment 4: Positive, Negative, or Zero
let checkNumber = 0; // You can change this value to test different numbers

if (checkNumber > 0) {
    console.log(`${checkNumber} is a positive number.`);
} else if (checkNumber < 0) {
    console.log(`${checkNumber} is a negative number.`);
} else {
    console.log(`${checkNumber} is zero.`);
}

document.write("<hr/>");

// Assignment 5: Leap Year
let year = 2024; // You can change this value to test different years

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}
