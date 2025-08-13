class Account {
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
class userAcc extends Account {
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
const user1 = new userAcc(2, "john_doe", "123456", "active");
const user2 = new userAcc(3, "banned_user", "password", "banned");
user1.login("123456");    
user2.login("password");   
user1.logout();
user2.logout(); 
user1.login("654321");

