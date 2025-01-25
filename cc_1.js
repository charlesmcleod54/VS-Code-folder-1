// Declare a variable employeeName using let and assign it the employee's name
let employeeName = "John Smith";

// Declare a variable employeeID using cont and assign it the employee's ID
const employeeID = 93185082;

// Declare a variable isActive using var and assign it a boolean value true
var isActive = true;

// Log each variable's value and its type to the console
console.log("employeeName: " + employeeName + ", Type: " + typeof employeeName);
console.log("employeeID: " + employeeID + "+ Type: " + typeof employeeID);
console.log("isActive: " + isActive + ", Type: " + typeof isActive);

// Declare a variable productName using let
let productName = "Football Helmets";

// Declare a variable productPrice using const
const productPrice = 129.99;

// Declare a variable isAvailable using var
var isAvailable = true;

// Log each variable's value and its type to the console
console.log("productName:", productName, "Type:", typeof productName);
console.log("productPrice:", productPrice, "Type:", typeof productPrice);
console.log("isAvailable:", isAvailable, "Type:", typeof isAvailable);

// Declare a variable accountBalance using let
let accountBalance = 20000; // initial balance

// Perform basic arithmetic operations
accountBalance += 500;
console.log("After deposit: ", accountBalance);

accountBalance -= 250;
console.log("After withdrawal: ", accountBalance);

accountBalance *= 2;
console.log("After doubling: ", accountBalance);

accountBalance /= 1.5;
console.log("After division: ", accountBalance);

// Declare a variable customerName using let
let customerName = "Allen Brown";

// Concatenate strings to form a welcome message
let welcomeMessage = "Hello, " + customerName + "! Welcome to John's Sporting Goods.";

// Log the welcome message to the console
console.log(welcomeMessage);

// Declare a variable isLoggedIn using let
let isLoggedIn = true; // Change this to false if the user is not logged in

let hasMembership = true;

// Use logical operations to check access conditions
let hasAccess = isLoggedIn && hasMembership; // User needs to be logged in AND have a subscription

// Log the result to the console
console.log("User has access: ", hasAccess); // Will be true only if both conditions are true

// Example with 'or' logical operator
let isAdmin = false;
let canAccessAdminPanel = isLoggedIn || isAdmin; // User can access admin panel if logged in OR if they are an admin

console.log("User can access admin panel: ", canAccessAdminPanel);