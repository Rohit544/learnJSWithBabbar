console.log("Learning javascript code withh love Babbar")

//learning variable and data type in javascript with love babbar 

// Variable Declarations
let name = "Alice";              // String
const age = 30;                 // Number (constant, value cannot be changed)
let isStudent = true;           // Boolean
let user;                       // Undefined (variable declared but not assigned)

// Array
let scores = [95, 85, 75, 90];  // Array of Numbers

// Object
let person = {
    name: "Alice",
    age: 30,
    isStudent: true,
    address: {
        city: "Wonderland",
        zip: "12345"
    }
};

// Function
function greet(person) {
    return `Hello, ${person.name}!`;
}

// Symbol
const uniqueId = Symbol('id');

// BigInt
const largeNumber = BigInt(123456789012345678901234567890);

// Output values
console.log("Name:", name);            // Output: Name: Alice
console.log("Age:", age);              // Output: Age: 30
console.log("Is Student:", isStudent); // Output: Is Student: true
console.log("Scores:", scores);        // Output: Scores: [95, 85, 75, 90]
console.log("Person:", person);        // Output: Person: { name: 'Alice', age: 30, isStudent: true, address: { city: 'Wonderland', zip: '12345' } }
console.log("Greeting:", greet(person)); // Output: Greeting: Hello, Alice!
console.log("Unique ID:", uniqueId);   // Output: Unique ID: Symbol(id)
console.log("Large Number:", largeNumber); // Output: Large Number: 123456789012345678901234567890n
