function sum2DArray(arr: number[][]): Promise<number> {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(arr.length === 0) {
            reject('Cannot sum an empty array');
        }
        setTimeout(() => {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    console.log(`Adding ${arr[i][j]} to sum`);
                    sum += arr[i][j];
                }
            }
            resolve(sum);
        }, 0);
        console.log('returning from sum');
    });
}

// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

sum2DArray(array2D)
    .then(sum => console.log('sumPromise1', sum))
    .catch(err => console.error('Error:', err));

sum2DArray([])
    .then(sum => console.log('sumPromise2', sum))
    .catch(err => console.error('Error:', err));

/*
- When sum2DArray(array2D) is called, it logs "Sum called ..." immediately.
- It checks if the array is empty and since it's not, it skips the rejection.
- setTimeout is set up, which will execute the summation after the current
  call stack is clear.
- "returning from sum" is logged immediately after setting up the timeout.
- The timeout function is now waiting to execute.
- The same sequence occurs for sum2DArray([]):
        - Logs "Sum called ..."
        - Finds the array empty
        - Then rejects with the error "Error: Cannot sum an empty array".
- After the current stack is cleared, the timeout function executes, logs
  the addition of each element to the sum, and eventually resolves the sum.
- The resolved values or error messages are handled by the .then() and .catch()
  callbacks. The results are logged after the asynchronous operations complete.
 */