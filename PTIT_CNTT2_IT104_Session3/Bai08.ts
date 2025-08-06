function toNumber(value: number | string): number | null {
    const num = Number(value);
    return isNaN(num) ? null : num;
}
function cong(a: number | string, b: number | string): number | string {
    const x = toNumber(a);
    const y = toNumber(b);
    if (x === null || y === null) return "Loi";
    return x + y;
}

function tru(a: number | string, b: number | string): number | string {
    const x = toNumber(a);
    const y = toNumber(b);
    if (x === null || y === null) return "Loi";
    return x - y;
}

function nhan(a: number | string, b: number | string): number | string {
    const x = toNumber(a);
    const y = toNumber(b);
    if (x === null || y === null) return "Loi";
    return x * y;
}

function chia(a: number | string, b: number | string): number | string {
    const x = toNumber(a);
    const y = toNumber(b);
    if (x === null || y === null) return "Loi";
    if (y === 0) return "Khong the chia cho 0";
    return x / y;
}


console.log("Cong:", cong("10", "5"));         
console.log("Tru:", tru(20, "7"));             
console.log("Nhan:", nhan("abc", 3));        
console.log("Chia:", chia("100", "0"));        
console.log("Chia:", chia("100", "10"));       
