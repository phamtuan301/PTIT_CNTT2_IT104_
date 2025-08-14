function merge <T, U> (obj1: T, obj2: U): T & U {
    return {...obj1, ...obj2}
}
const obj1 = {a: "1", b: 2}
const obj2 = {c: 3, d: 4}
const mergedObj = merge(obj1, obj2)
console.log(mergedObj)