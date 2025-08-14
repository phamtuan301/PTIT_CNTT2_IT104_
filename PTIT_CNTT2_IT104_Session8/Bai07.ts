function flatten<T>(arr: T[][]): T[] {
    let result: T[] = [];
    for (const subArr of arr) {
        result = result.concat(subArr);
    }
    return result;
}

const array2D: number[][] = [[1, 2], [3, 4], [5, 6]];
const flattenedArray: number[] = flatten(array2D);
console.log(flattenedArray);