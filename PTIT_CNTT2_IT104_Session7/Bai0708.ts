class Account2 {
    accountNumber: number;
    protected balance: number;
    protected history: string[];
    protected status: string;
    constructor(accountNumber: number, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.history = [];
        this.status = "active";
    }
    deposit(amount: number): void {
        if (this.status === "active") {
            this.balance += amount;
            this.history.push(`Deposited: ${amount}`);
            console.log(`Deposited ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Account is not active.");
        }
    }
    withdraw(amount: number): void {
        if (this.status === "active") {
            if (amount <= this.balance) {
                this.balance -= amount;
                this.history.push(`Withdrew: ${amount}`);
                console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
            } else {
                console.log("Insufficient funds.");
            }
        } else {
            console.log("Account is not active.");
        }
    }
    showHistory():void {
        this.history.forEach(entry => {
            console.log(entry);
        });
    }
}
class SavingAccount extends Account2 {
    interestRate: number;
    constructor(accountNumber: number, initialBalance: number, interestRate: number) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }
    withdraw(amount: number): void {
        super.withdraw(amount);
        if (this.balance <= 0 ) {
            console.log("Account balance is zero or negative.");
        }
    }
}
class CheckingAccount extends Account2 {
    overdraftLimit: number;
    constructor(accountNumber: number, initialBalance: number, overdraftLimit: number) {
        super(accountNumber, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount: number): void {
        if (this.status === "active") {
            if (amount <= this.balance + this.overdraftLimit) {
                this.balance -= amount;
                this.history.push(`Withdrew: ${amount}`);
                console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
            } else {
                console.log("Withdrawal exceeds overdraft limit.");
            }
        } else {
            console.log("Account is not active.");
        }
    }
}
const saving = new SavingAccount(1001, 500, 3.5);
saving.deposit(200);
saving.withdraw(300);
saving.withdraw(400); // sẽ về 0 và khóa rút
saving.withdraw(50);  // không cho rút nữa
saving.showHistory();
const checking = new CheckingAccount(2001, 300, 200);
checking.withdraw(400); // hợp lệ vì trong hạn mức overdraft
checking.withdraw(200); // vượt hạn mức
checking.deposit(1000);
checking.showHistory();

