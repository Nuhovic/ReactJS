function findNumberPairsWithSum(arr, target) {
    const pairs = [];
    const seenNumbers = new Set();

    for (let num of arr) {
        const complement = target - num;

        if (seenNumbers.has(complement)) {
            pairs.push([num, complement]);
        }

        seenNumbers.add(num);
    }

    return pairs;
}

const inputArray = [1, 2, 3, 4, 5];
const targetSum = 7;
const result = findNumberPairsWithSum(inputArray, targetSum);
console.log(result);