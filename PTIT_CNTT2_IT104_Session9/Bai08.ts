function createObject<K extends string, V>(keys: readonly K[], values: V[]): Record<K, V>{
    if (keys.length !== values.length) {
        console.log("Keys and values must have the same length");
    }
    const result = {} as Record<K, V>;
    keys.forEach((key, index) => {
        result[key] = values[index]!;
    });
    return result;
}
const keys = ['name', 'age', 'email'] as const;
const values = ['Alice', 25, 'alice@example.com'];
const obj = createObject(keys, values);
console.log(obj);

