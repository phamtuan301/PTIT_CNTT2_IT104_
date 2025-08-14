function filterArray<T>(array: T[]): T | undefined {
    for (const item of array) {
        if (typeof(item) === "number" && item % 2 === 0) {
            return item;
        }
    }
    return undefined;
} 
console.log(filterArray([1, 3, 5]));       
console.log(filterArray([1, 4, 5]));        
console.log(filterArray(["a", "b", 2, 3])); 