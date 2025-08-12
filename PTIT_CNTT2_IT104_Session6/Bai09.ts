class MyBook {
    id: number;
    title: string;
    author: string;
    stock: number;
    status: string;
    constructor(id: number, title: string, author: string, stock: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = stock > 0 ? "Available" : "Not Available";
    }
}
class MyMember {
    id: number;
    name: string;
    contact: string;
    lendedBooks: MyBook[] = [];
    status: string;
    constructor(id: number, name: string, contact: string) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = "Active";
    }
}
class MyLendedBook {
    memberId: number;
    bookId: number;
    dueDate: Date;
    constructor(memberId: number, bookId: number, dueDate: Date) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class MyLibrary {
    books: MyBook[] = [];
    members: MyMember[] = [];
    constructor(books: MyBook[] = [], members: MyMember[] = []) {
        this.books = books;
        this.members = members;
    }
    addBook(book: MyBook): void {
        this.books.push(book);
    }
    showBooks(): void {
        if (this.books.length === 0) {
            console.log("No books in the library.");
        } else {
            console.log("Books in the library:");
            this.books.forEach(book => {
                console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Stock: ${book.stock}, Status: ${book.status}`);
            });
        }
    }
    registerMember(id: number, name: string, contact: string): void {
        const member = new MyMember(id, name, contact);
        this.members.push(member);
        console.log(`Member "${name}" has been registered.`);
    }
    blockMember(memberId: number, isBlocked: boolean): void {
        const member = this.members.find(m => m.id === memberId);
        if (member) {
            member.status = isBlocked ? "Blocked" : "Active";
            console.log(`Member ID ${memberId} status changed to ${member.status}.`);
        } else {
            console.log(`No member found with ID ${memberId}`);
        }
    }
    showMembers(): void {
        if (this.members.length === 0) {
            console.log("No members in the library.");
        } else {
            console.log("Members in the library:");
            this.members.forEach(member => {
                console.log(`ID: ${member.id}, Name: ${member.name}, Contact: ${member.contact}, Status: ${member.status}`);
            });
        }
    }
}
const myLibrary = new MyLibrary();
myLibrary.addBook(new MyBook(1, "The Great Gatsby", "F. Scott Fitzgerald", 3));
myLibrary.addBook(new MyBook(2, "To Kill a Mockingbird", "Harper Lee", 0));
myLibrary.registerMember(1, "Alice", "alice@example.com");
myLibrary.registerMember(2, "Bob", "bob@example.com");
myLibrary.registerMember(3, "Charlie", "charlie@example.com");
console.log("\n--- All Members ---");
myLibrary.showMembers();
myLibrary.blockMember(2, true);
console.log("\n--- After Blocking---");
myLibrary.showMembers();
