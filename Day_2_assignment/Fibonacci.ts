// Implement a function named `fibonacci` that accepts an argument `n`, which is a non-negative 
//integer, and returns the nth Fibonacci number. 

function fibonacci(n: number) {
    // Step 1: Handle invalid input (negative numbers)
    if (n < 0) {
        console.log(`${n} is lesser than 0 its negative value`);
        return
    }
    // Step 2: Initialize the first two Fibonacci numbers
    let a = 0;
    let b = 1;

    // Printing the first two numbers
    let series = `${a} ${b}`;

    // Step 4: Loop from 2 up to n to calculate Fibonacci iteratively
    for (let i = 2; i <= n; i++) {
        const c = a + b;

        series += ` ${c} `
        a = b;
        b = c;
    }

    console.log(series);
}

fibonacci(-1)
fibonacci(7)
