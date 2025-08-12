class Book {
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
class Member {
    id: number;
    name: string;
    contact: string;
    lendedBooks: Book[] = [];
    status: string;
    constructor(id: number, name: string, contact: string) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = "Active";
    }
}
class LendedBooks {
    memberId: number;
    bookId: number;
    dueDate: Date;
    constructor(memberId: number, bookId: number, dueDate: Date) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    books: Book[] = [];
    members: Member[] = [];
    constructor(books: Book[], members: Member[]) {
        this.books = books;
        this.members = members;
    }
    addBook(book: Book): void {
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
}
const book1 = new Book(1, "The Great Gatsby", "F. Scott Fitzgerald", 3);
const book2 = new Book(2, "To Kill a Mockingbird", "Harper Lee", 0);
const book3 = new Book(3, "1984", "George Orwell", 5);
const member1 = new Member(1, "Alice", "alice@example.com");
const member2 = new Member(2, "Bob", "bob@example.com");
const library = new Library([], [member1, member2]);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.showBooks();