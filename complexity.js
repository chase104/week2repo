function exampleFunction(arr) {
    let sum = 0;  // O(1)
    let product = 1;  // O(1)

    // Compute the sum of all items in the array
    for (let i = 0; i < arr.length; i++) {  // O(n) for the loop
        sum += arr[i];  // O(1) each time, but O(n) in total because of the loop
    }

    // Compute the product of all items in the array
    for (let i = 0; i < arr.length; i++) {  // O(n) for the loop
        product *= arr[i];  // O(1) each time, but O(n) in total because of the loop
    }

    console.log(sum, product);  // O(1)
}


// The time complexity of this function can be broken down as:
// - Three constant time operations: (O(1) + O(1) + O(1))
// - Two loops each running in linear time: (O(n) + O(n))

// When you sum these operations up, you get (O(3 + 2n)). But in Big O notation, we simplify by dropping constants and lower-order terms, so the final time complexity is (O(n)).

