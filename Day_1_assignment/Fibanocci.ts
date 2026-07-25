/**
Author: surendar Rajendran
Program: fibonacci
Description: fibonacci Series
*/
function fibonacci(n: number): number {
    if (n < 0) {
        throw new Error("Fibonacci is not defined for negative numbers.");
    }

    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0; // F(0)
    let b = 1; // F(1)

    for (let i = 2; i <= n; i++) {
        const next = a + b;
        a = b;
        b = next;
    }

    return b;
}

console.log(fibonacci(0));  
console.log(fibonacci(1));  
console.log(fibonacci(5));  
console.log(fibonacci(10)); 
console.log(fibonacci(15)); 

try {
    console.log(fibonacci(-4)); 
} catch (error) {
    console.error("Error:", (error as Error).message);
}