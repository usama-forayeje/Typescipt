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
// obj
var parson = {
    name: "usama",
    age: 22,
    isStudent: true,
    address: {
        city: "peni",
        country: "bangladesh"
    }
};
console.log(parson.address.country);
var product1 = {
    name: "laptop",
    price: 10000,
    quantity: 5
};
var calculateTotalPrice = function (product1) {
    return product1.price * product1.quantity;
};
console.log(calculateTotalPrice(product1));
// example
var parson2 = {
    name: "usama",
    age: 22,
    isStudent: true,
    address: {
        city: "peni",
        country: "bangladesh"
    }
};
var parson3 = {
    name: "usama",
    age: 22,
    isStudent: true,
    address: {
        city: "peni",
        country: "bangladesh"
    }
};
var parson4 = {
    name: "usama",
    age: 22,
    isStudent: true,
    address: {
        city: "peni",
        country: "bangladesh"
    }
};
var student1 = {
    name: "Usama",
    age: 22,
    greet: (function (country) { return "Welcome! My name is ".concat(student1.name, ", I am ").concat(student1.age, " years old. I am from ").concat(country); })
};
var student2 = {
    name: "Ubada",
    age: 22,
    greet: (function (country) { return "Welcome! My name is ".concat(student2.name, ", I am ").concat(student1.age, " years old. I am from ").concat(country); })
};
var student3 = {
    name: "Umara",
    age: 22,
    greet: (function (country) { return "Welcome! My name is ".concat(student3.name, ", I am ").concat(student1.age, " years old. I am from ").concat(country); })
};
var introduction = function (student) {
    var name = student.name, age = student.age;
    return "Welcome! My name is ".concat(name, ", I am ").concat(age, " years old.");
};
console.log(introduction(student1));
console.log(student1.greet('bangladesh'));
console.log(student2.greet('palistain'));
console.log(student3.greet('iraq'));
// enums in ts
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
var user1 = {
    name: "usama",
    email: "xyz@gmail.com",
    password: " xyz",
    role: Roles.admin
};
var user2 = {
    name: "ubada",
    email: "xyz@gmail.com",
    password: " xyz",
    role: Roles.user
};
var isAdmin = function (user) {
    var name = user.name, role = user.role;
    return role === "admin" ? "".concat(name, " is allow to edit the website") : "".concat(name, " is not allow to edit the website");
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
// Function to display person information
var displayPersonInfo = function (person) {
    var name = person[0], age = person[1], license = person[2];
    console.log("Name: ".concat(name, ", Age: ").concat(age, ", License: ").concat(license ? "yes" : "no"));
};
// Example usage
var person5 = ['Usama', 29, true];
var person6 = ['Ubada', 29, false];
displayPersonInfo(person5);
displayPersonInfo(person6);
var displayProductSum = function (product) {
    var name = product[0], price = product[1], quantity = product[2];
    console.log("Total ".concat(name, " Price is ").concat(price * quantity, "  "));
};
var product2 = ['apple', 400, 10];
var product3 = ['orang', 200, 20];
displayProductSum(product2);
displayProductSum(product3);
// Union Type
var inputValue = function (value) {
};
inputValue(55);
inputValue("hello");
inputValue(true);
// funtion 
var userInput = function (value) {
    if (typeof value === "number") {
        return value * 2;
    }
    else if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        throw new Error("value is a boolean");
    }
};
console.log(userInput(10));
console.log(userInput("usama"));
// generics 
function add(a, b) {
    console.log(typeof a);
}
var result1 = add(5, "hello");
var result2 = add("hello", 10);
