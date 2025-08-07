let data: string | number;
function checkDataType(value: string | number): number | string {
    if (typeof value === 'string') {
        return value.length;
    } else if (typeof value === 'number') {
        if (value % 2 === 0) {
            return "Day la so chan";
        }else {
            return "Day la so le";
    }
}
    return 'Unknown type';
}
console.log(checkDataType(42));
console.log(checkDataType("Hello"));