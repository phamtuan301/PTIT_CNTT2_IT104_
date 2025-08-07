function processInput(input: string | number | boolean): string | number {
    if (typeof input === 'string') {
        if (/^\d+$/.test(input)) {
            return parseInt(input)**2;
        }else {
            const letter = input.match(/[a-zA-Z]/g);
            const count = letter ? letter.length : 0;
            return `Co ${count} chu cai`; 
        }
    } else if (typeof input === 'number') {
        if (input < 2) {
                return 'Day khong phai la so nguyen to';
            }
        for (let i = 2; i <= Math.sqrt(input); i++) {
            if (input % i === 0) {
                return 'Day khong phai la so nguyen to';
            }else {
                return 'Day la so nguyen to';
            }
        }
    } else if (typeof input === 'boolean') {
        if (input) {
            return "Gia tri la true - tien hanh xu ly";
        } else {
            return "Gia tri la false - khong xu ly";
    }
}
    return "Unknown type";
}
console.log(processInput("123"));
console.log(processInput("Hello123"));
console.log(processInput(17));
console.log(processInput(10));
console.log(processInput(1));
console.log(processInput(true));
console.log(processInput(false));
