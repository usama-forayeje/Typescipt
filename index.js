console.log('usama forayaje');
// @ts-ignore
var num2 = 12;
num2 = 13;
// @ts-ignore
// funtion define 
function sum(a, b) {
    return a + b;
}
// fun call 
console.log(sum(1, 23));
var longText = "This is a long sentence that we want to shorten.";
var shotText = longText.substring(0, 10);
console.log(shotText);
var str1 = 'usama';
var str2 = "forayaje";
console.log(str1 === str2);
var product = "book";
var price = 100;
price.toString();
console.log(product + price);
function booleanHomeWork(b, a) {
    return (a % b == 5);
}
console.log(booleanHomeWork(4, 8));
// let maxNumber = Number.MAX_SAFE_INTEGER;
var maxNumber = 9007199254740991n;
console.log(maxNumber);
var anotherMaxNumber = BigInt("9007199254740995");
console.log(anotherMaxNumber);
var maxTotal = maxNumber + anotherMaxNumber;
console.log(maxTotal);
function calculateAverage(numbers) {
    // Check if the array is empty to avoid division by zero
    if (numbers.length === 0) {
        throw new Error("Array cannot be empty");
    }
    // Calculate the sum of the numbers
    var sum = numbers.reduce(function (acc, num) { return acc + num; }, 0);
    // Return the average
    return sum / numbers.length;
}
// Example usage
var numbers = [10, 20, 30, 40, 50];
var average = calculateAverage(numbers);
console.log("The average is: ".concat(average)); // Output: The average is: 30
function findMaxValue(maxNumbers) {
    // Check if the array is empty to avoid errors
    if (maxNumbers.length === 0) {
        throw new Error("Array cannot be empty");
    }
    // Use the Math.max function to find the maximum value
    return Math.max.apply(Math, maxNumbers);
}
// Example usage
var maxNumbers = [5, 12, 3, 8, 21, 7];
var maxValue = findMaxValue(maxNumbers);
console.log("The maximum value is: ".concat(maxValue)); // Output: The maximum value is: 21
