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

// Variables
let a = 10;
let b = 20;
let Age = 25;
let hasTicket = true;

// Arithmetic Operators
let sum = a + b;               // Addition
let difference = a - b;        // Subtraction
let product = a * b;           // Multiplication
let quotient = a / b;          // Division
let remainder = a % b;         // Modulus
let increment = ++a;           // Increment
let decrement = --b;           // Decrement

console.log("Sum:", sum);                 // Output: Sum: 30
console.log("Difference:", difference);   // Output: Difference: -10
console.log("Product:", product);         // Output: Product: 200
console.log("Quotient:", quotient);       // Output: Quotient: 0.5
console.log("Remainder:", remainder);     // Output: Remainder: 10
console.log("Incremented a:", increment); // Output: Incremented a: 11
console.log("Decremented b:", decrement); // Output: Decremented b: 19

// Comparison Operators
console.log("a == b:", a == b);    // Output: a == b: false (Equality)
console.log("a != b:", a != b);    // Output: a != b: true (Inequality)
console.log("a > b:", a > b);      // Output: a > b: false (Greater than)
console.log("a < b:", a < b);      // Output: a < b: true (Less than)
console.log("a >= 10:", a >= 10);  // Output: a >= 10: true (Greater than or equal to)
console.log("b <= 20:", b <= 20);  // Output: b <= 20: true (Less than or equal to)

// Logical Operators
console.log("a < b && hasTicket:", a < b && hasTicket); // Output: a < b && hasTicket: true
console.log("a < b || !hasTicket:", a < b || !hasTicket); // Output: a < b || !hasTicket: true
console.log("!(a < b):", !(a < b)); // Output: !(a < b): false

// Conditional Statements
// if-else
if (Age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are not an adult.");
}

// if-else if-else
if (Age < 13) {
    console.log("You are a child.");
} else if (Age < 20) {
    console.log("You are a teenager.");
} else if (Age < 60) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior.");
}

// switch statement
let day = 3; // Assume 1 = Monday, 2 = Tuesday, etc.
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}



