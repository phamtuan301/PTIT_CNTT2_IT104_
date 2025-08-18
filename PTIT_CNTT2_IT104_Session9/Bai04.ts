function withDefault<T>(value?: T): T | "default" {
    if (value === undefined) {
        return "default";
    }
    return value;
}
console.log(withDefault());        
console.log(withDefault(42));      
console.log(withDefault(true));    
console.log(withDefault({ a: 1 }));