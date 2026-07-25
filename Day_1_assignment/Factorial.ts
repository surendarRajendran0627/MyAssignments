/**
Author: surendar Rajendran
Program: factorial
Description: Create a test script that navigates to Salesforce application, to create a new lead and edit the lead details 
*/

function factorial(n: number): number {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(6));
console.log(factorial(8));

try {
    console.log(factorial(-5));
} catch (error) {
    console.error("Error:", (error as Error).message);
}
