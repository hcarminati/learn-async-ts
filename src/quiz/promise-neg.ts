function hasNegativeNumber(arr: number[]): Promise<boolean> {
    return new Promise((resolve) => {
        const hasNegative = arr.some(num => num < 0);
        resolve(hasNegative);
    });
}

// Example usage
const array2D_4 = [
    [1, 2, 3],
    [-4, 5, 6],
    [7, 8, -9]
];


const checkPromises: Promise<{ rowIndex: number, hasNegative: boolean }>[] = [];
for (let i = 0; i < array2D_4.length; i++) {
    checkPromises.push(hasNegativeNumber(array2D_4[i]).then(hasNegative => ({ rowIndex: i, hasNegative })));
}

Promise.all(checkPromises)
    .then((results) => {
        results.forEach(result => {
            if (result.hasNegative) {
                console.log(`Row ${result.rowIndex}: ${array2D_4[result.rowIndex]}`);
            }
        });
    })
    .catch((error) => console.error(`Error: ${error}`));