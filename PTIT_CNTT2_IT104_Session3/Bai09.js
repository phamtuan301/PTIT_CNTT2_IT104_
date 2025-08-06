function chuyenSo(value) {
    var num = Number(value);
    if (isNaN(num)) {
        return null;
    }
    return num;
}
function cong(a, b) {
    return a + b;
}
function tru(a, b) {
    return a - b;
}
function nhan(a, b) {
    return a * b;
}
function chia(a, b) {
    if (b === 0)
        return "Khong chia duoc cho 0";
    return a / b;
}
function mu(a, b) {
    return Math.pow(a, b);
}
function can(a, b) {
    return Math.pow(a, 1 / b);
}
function giaithua(n) {
    if (n < 0)
        return "Khong tinh duoc giai thua cua so am";
    var rs = 1;
    for (var i = 2; i <= n; i++) {
        rs *= i;
    }
    return rs;
}
function tinh(phepToan) {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var ketQua = document.getElementById("ketqua");
    var num1 = chuyenSo(input1);
    var num2 = chuyenSo(input2);
    var kq;
    if (phepToan === '!') {
        if (num1 === null) {
            kq = "Số không hợp lệ!";
        }
        else {
            kq = giaithua(num1);
        }
    }
    else {
        if (num1 === null || num2 === null) {
            kq = "So khong hop le!";
        }
        else {
            if (phepToan === '+')
                kq = cong(num1, num2);
            else if (phepToan === '-')
                kq = tru(num1, num2);
            else if (phepToan === '*')
                kq = nhan(num1, num2);
            else if (phepToan === '/')
                kq = chia(num1, num2);
            else if (phepToan === '^')
                kq = mu(num1, num2);
            else if (phepToan === '√')
                kq = can(num1, num2);
            else
                kq = "Phép toán không hỗ trợ";
        }
    }
    if (ketQua) {
        ketQua.innerText = "Kết quả: " + kq;
    }
}
