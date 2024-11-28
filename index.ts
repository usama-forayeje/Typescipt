console.log('usama forayaje');
// @ts-ignore
let num2:number = 12;
num2 = 13;
// @ts-ignore
// funtion define 
function sum(a:number,b:number):number {
    return a + b;
}
// fun call 
console.log(sum(1,23));

let longText:string = "This is a long sentence that we want to shorten."
let shotText:string = longText.substring(0, 10);
console.log(shotText);




let str1:string = 'usama';
let str2:string = "forayaje";
console.log(str1 === str2);

let product:string = "book";
let price:number = 100;
price.toString();
console.log(product + price);


function booleanHomeWork(b:number,a:number):boolean{
    return (a % b == 5 ) 
}
console.log(booleanHomeWork(4,8));



// let maxNumber = Number.MAX_SAFE_INTEGER;
let maxNumber:bigint = 9007199254740991n
console.log(maxNumber);

let anotherMaxNumber = BigInt("9007199254740995")
console.log(anotherMaxNumber);

let maxTotal:bigint = maxNumber + anotherMaxNumber;
console.log(maxTotal);




function calculateAverage(numbers: number[]): number {
    // Check if the array is empty to avoid division by zero
    if (numbers.length === 0) {
      throw new Error("Array cannot be empty");
    }
  
    // Calculate the sum of the numbers
    const sum = numbers.reduce((acc, num) => acc + num, 0);
  
    // Return the average
    return sum / numbers.length;
  }
  
  // Example usage
  const numbers = [10, 20, 30, 40, 50];
  const average = calculateAverage(numbers);
  console.log(`The average is: ${average}`); // Output: The average is: 30
  


  function findMaxValue(maxNumbers: number[]): number {
    // Check if the array is empty to avoid errors
    if (maxNumbers.length === 0) {
      throw new Error("Array cannot be empty");
    }
  
    // Use the Math.max function to find the maximum value
    return Math.max(...maxNumbers);
  }
  
  // Example usage
  const maxNumbers = [5, 12, 3, 8, 21, 7];
  const maxValue = findMaxValue(maxNumbers);
  console.log(`The maximum value is: ${maxValue}`); // Output: The maximum value is: 21
  