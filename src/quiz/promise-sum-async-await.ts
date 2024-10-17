async function sumRow(arr: number[][], rowIdx: number): Promise<number> {
    if (rowIdx >= 0 && rowIdx < arr.length) {
        return arr[rowIdx].reduce((acc, val) => {
            console.log(`Adding ${val} to sum`); // Log the addition
            return acc + val;
        }, 0);
    } else {
        throw new Error(`Row Index ${rowIdx} must be within 0 and ${arr.length - 1}`);
    }
}

async function sum2DArray(numArr: number[][]) {
    console.log('Sum called ... ');

    if (numArr.length === 0) {
        throw 'Cannot sum an empty array';
    }

    const rowSumPromises = [];
    for (let x = 0; x < numArr.length; x++) {
        rowSumPromises.push(sumRow(numArr, x));
    }

    try {
        const rowSums = await Promise.all(rowSumPromises);
        let sum = 0;
        rowSums.forEach(rowSum => {
            sum += rowSum;
        })
        console.log('Returning from sum');
        return sum;
    } catch (error) {
        console.error(`Error calculating sum: ${error}`);
    }
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
