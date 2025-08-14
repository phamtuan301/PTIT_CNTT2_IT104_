function findElement <T> (array: T[], target: T): T | undefined {
    for (const item of array) {
        if (item === target) {
            return item;
        }
    }
    return undefined;
}

const _number = [1, 2, 3, 4, 5];
const targetNumber = 3;
const result = findElement(_number, targetNumber);
console.log(result);