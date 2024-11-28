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
  
// obj

  const parson:{
    name:string;
    age:number;
    isStudent:boolean;
    address:{city:string; country:string}
  } = {
    name: "usama",
    age: 22,
    isStudent: true,
    address: {
      city: "peni",
      country: "bangladesh"
    }
  }
  console.log(parson.address.country);

// abj
type Product = {
  name: string;
  price: number;
  quantity: number
}
const product1:Product = {
  name: "laptop",
  price: 10000,
  quantity: 5
}
const calculateTotalPrice = (product1:Product) => {
  return product1.price * product1.quantity
}
 console.log(calculateTotalPrice(product1));

// type alias 
type Parson = {
  name:string;
  age:number;
  isStudent:true;
  address:{city:string; country:string}
}

// example
let parson2:Parson = {
  name: "usama",
  age: 22,
  isStudent: true,
  address: {
    city: "peni",
    country: "bangladesh"
  }
}
let parson3:Parson = {
  name: "usama",
  age: 22,
  isStudent: true,
  address: {
    city: "peni",
    country: "bangladesh"
  }
}
let parson4:Parson = {
  name: "usama",
  age: 22,
  isStudent: true,
  address: {
    city: "peni",
    country: "bangladesh"
  }
}

// call signatures 
type Student = {
  name: string;
  age: number;
  gender?: string;
  greet: (country:string) => string //method call signature
};

const student1: Student = {
  name: "Usama",
  age: 22,
  greet : ((country) : string => `Welcome! My name is ${student1.name}, I am ${student1.age} years old. I am from ${country}`)
};
const student2: Student = {
  name: "Ubada",
  age: 22,
  greet : ((country) : string => `Welcome! My name is ${student2.name}, I am ${student1.age} years old. I am from ${country}`)
};
const student3: Student = {
  name: "Umara",
  age: 22,
  greet : ((country) : string => `Welcome! My name is ${student3.name}, I am ${student1.age} years old. I am from ${country}`)
};

const introduction = (student: Student): string => {
  const { name, age } = student;
  return `Welcome! My name is ${name}, I am ${age} years old.`;
};

console.log(introduction(student1));
console.log( student1.greet('bangladesh'));
console.log( student2.greet('palistain'));
console.log( student3.greet('iraq'));


// enums in ts
enum Roles {
  user = 'user',
  admin = 'admin'
}
 
type LoginDetails = {
  name?: string;
  email: string;
  password: string;
  role:Roles

}

const user1:LoginDetails = {
  name: "usama",
  email: "xyz@gmail.com",
  password: " xyz",
  role:Roles.admin
}
const user2:LoginDetails = {
  name: "ubada",
  email: "xyz@gmail.com",
  password: " xyz",
  role:Roles.user
}

 const isAdmin = (user: LoginDetails): string => {
  const {name , role} = user;
  return role === "admin" ? `${name} is allow to edit the website` : `${name} is not allow to edit the website`
 }

 console.log(isAdmin(user1));
 console.log(isAdmin(user2));
 
// Tuples 
type PersonInfo = readonly [string, number, boolean];

// Function to display person information
const displayPersonInfo = (person: PersonInfo): void => {
  const [name, age, license] = person;
  console.log(`Name: ${name}, Age: ${age}, License: ${license ? "yes" : "no"}`);
};

// Example usage
const person5: PersonInfo = ['Usama', 29, true];
const person6: PersonInfo = ['Ubada', 29, false];

displayPersonInfo(person5);
displayPersonInfo(person6);

// homework
type ProductInfo = readonly [string, number, number];

const displayProductSum = (product: ProductInfo) => {
  const [name, price , quantity] = product;
  console.log(`Total ${name} Price is ${price * quantity}  `);
  
}

const product2: ProductInfo = ['apple' , 400, 10]
const product3: ProductInfo = ['orang' , 200, 20]
 
displayProductSum(product2)
displayProductSum(product3)


// Union Type
const inputValue = (value: string | number | boolean) => {

}

inputValue( 55)
inputValue( "hello")
inputValue( true)


// funtion 
const userInput = (value: string | number | boolean):string | number => {
  if (typeof value === "number") {
    return value * 2
  }else if (typeof value === "string"){
    return value.toUpperCase()
  }else{
    throw new Error("value is a boolean")
  }
}
 console.log(userInput(10));
 console.log(userInput("usama"));
  
// Intersection Types
type Person1 = {
  name: string;
  age: number
}

type Employ = {
  emp_id: number;
  department: string
}

// generics 
function add<T,U> (a:T , b:U) {
 console.log(typeof a);
 
}
const result1 = add<number,string>(5 ,"hello")
const result2 = add("hello" , 10);
