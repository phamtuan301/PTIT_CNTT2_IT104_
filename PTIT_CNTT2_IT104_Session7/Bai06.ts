class Account1 {
    id: number;
    userName: string;
    private password: string;
    isLogin: boolean;
    role: string;
    constructor(id: number, userName: string, password: string, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login(password: string): boolean {
        if (this.password === password) {
            this.isLogin = true;
            console.log(`${this.userName} logged in successfully.`);
            return true;
        } else {
            console.log(`Login failed for ${this.userName}. Incorrect password.`);
            return false;
        }
    }
    logout(): void {
        if (this.isLogin) {
            this.isLogin = false;
            console.log(`${this.userName} logged out successfully.`);
        }else {
            console.log(`${this.userName} is not logged in.`);
        }
    }
}
class userAcc1 extends Account1 {
    status: string;
    constructor(id: number, userName: string, password: string, status: string) {
        super(id, userName, password, "user");
        this.status = status;
    }
    login(password: string): boolean {
        if (this.status === "active") {
            return super.login(password);
        } else if (this.status === "banned") {
            console.log("Account is not active");
            return false;
        } else {
            console.log("Unknown account status.");
            return false;
        }
    }
}
class adminAcc extends Account1 {
    users: userAcc1[] = [];
    constructor(id: number, userName: string, password: string) {
        super(id, userName, password, "admin");
    }
    banUser(id: number): void {
        const user = this.users.find(user => user.id === id);
        if (user) {
            user.status = "banned";
            console.log(`User ${user.userName} has been banned.`);
        } else {
            console.log(`User with ID ${id} not found.`);
        }
    }
}
const user3 = new userAcc1(1, "Tuan", "1234", "active");
const user4 = new userAcc1(2, "Nam", "5678", "active");

const admin = new adminAcc(100, "Admin", "admin123");
admin.users.push(user3, user4);
user3.login("1234"); 
admin.banUser(1);    
user4.login("1234"); 