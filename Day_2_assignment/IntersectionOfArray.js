// Function to find intersection of two arrays without duplicates
function intersection(arr1, arr2) {
    // Step 1: Initialize an empty array to store common elements
    const result = [];

    // Step 2: Loop through each element of the first array
    for (let i = 0; i < arr1.length; i++) {
        const value = arr1[i]; // current element from arr1
       
        // Step 3: Check if the element exists in arr2 AND is not already in result
        // - arr2.includes(value) → ensures the element is present in arr2
        // - !result.includes(value) → prevents duplicates in the result
        if (arr2.includes(value) && !result.includes(value)) {
            result.push(value); // Step 4: Add the element to result
        }
    }

    // Step 5: Return the final intersection array
    return result;
}

// Example calls to test the function
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); 
console.log(intersection([1, 2, 3, 4], [1, 2, 3, 4])); 
console.log(intersection([1, 2, 3, 4], [5, 6, 7, 8])); 
