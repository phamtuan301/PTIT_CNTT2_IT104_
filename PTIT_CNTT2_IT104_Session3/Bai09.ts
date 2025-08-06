function chuyenSo1(value: string): number | null {
    const num = Number(value);
    if (isNaN(num)) {
        return null;
    }
    return num;
}
function cong1(a: number, b: number): number {
    return a + b;
}
function tru1(a: number, b: number): number {
    return a - b;
}
function nhan1(a: number, b: number): number {
    return a * b;
}
function chia1(a: number, b: number): number | string {
    if (b === 0) return "Khong chia duoc cho 0";
    return a / b;
}
function mu1(a: number, b: number): number {
    return Math.pow(a, b);
}
function can1(a: number, b: number): number {
    return Math.pow(a, 1 / b);
}
function giaithua1(n: number): number | string {
    if (n < 0) return "Khong tinh duoc giai thua cua so am";
    let rs = 1;
    for (let i = 2; i <= n; i++) {
        rs *= i;
    }
    return rs;
}

function tinh1(phepToan: string): void {
    const input1 = (document.getElementById("input1") as HTMLInputElement).value;
    const input2 = (document.getElementById("input2") as HTMLInputElement).value;
    const ketQua = document.getElementById("ketqua");

    const num1 = chuyenSo1(input1);
    const num2 = chuyenSo1(input2);

    let kq: number | string;

    if (phepToan === '!') {
        if (num1 === null) {
            kq = "Số không hợp lệ!";
        } else {
            kq = giaithua(num1);
        }
    } else {
        if (num1 === null || num2 === null) {
            kq = "So khong hop le!";
        } else {
            if (phepToan === '+') kq = cong1(num1, num2);
            else if (phepToan === '-') kq = tru1(num1, num2);
            else if (phepToan === '*') kq = nhan1(num1, num2);
            else if (phepToan === '/') kq = chia1(num1, num2);
            else if (phepToan === '^') kq = mu1(num1, num2);
            else if (phepToan === '√') kq = can1(num1, num2);
            else kq = "Phép toán không hỗ trợ";
        }
    }

    if (ketQua) {
        ketQua.innerText = "Kết quả: " + kq;
    }
}
