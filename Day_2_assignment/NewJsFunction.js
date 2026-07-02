// Task 1: Function Declaration
// A simple function that takes a name and prints a greeting
function userProfile(name) {
    console.log(`Hello ${name}`);
}

// Task 2: Arrow Function
// An arrow function that doubles the given number and returns it
const double = (num) => num * 2;

// Task 3: Anonymous Function
// Using setTimeout with an anonymous function to delay execution
// setTimeout(function, delay, ...args);
setTimeout(function () {
    console.log("This message is delayed by 2 seconds");
}, 2000);

// Task 4: Callback Function
// Function that accepts a callback and simulates async work with setTimeout
function getUserData(callback) {
    setTimeout(() => {
        callback();
    }, 3000);
}

// Example usage of Task 1 and Task 2
userProfile("Suren");
console.log(double(2));

// Example usage of Task 4
getUserData(() => {
    console.log("Callback executed after 3 seconds");
});
