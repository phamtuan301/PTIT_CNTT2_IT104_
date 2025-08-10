class Book1 {
    private id: number;
    private title: string;
    private author: string;
    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId(): number {
        return this.id;
    }
    getTitle(): string {
        return this.title;
    }
    getAuthor(): string {
        return this.author;
    }
}
class Library1 {
    books: Book1[] = [];
    addBook(book: Book1): void {
        this.books.push(book);
    }
    displayBooks(): void {
        if (this.books.length === 0) {
            console.log("No books in the library.");
            return;
        }
        console.log("Books in the library:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ID: ${book.getId()}, Title: ${book.getTitle()}, Author: ${book.getAuthor()}`);
        });
    }
}
const library1 = new Library1();
const _book1 = new Book1(1, "To Kill a Mockingbird", "Harper Lee");
const _book2 = new Book1(2, "1984", "George Orwell");
const _book3 = new Book1(3, "The Great Gatsby", "F. Scott Fitzgerald");
const _book4 = new Book1(4, "Brave New World", "Aldous Huxley");
const _book5 = new Book1(5, "The Catcher in the Rye", "J.D. Salinger");
library1.addBook(_book1);
library1.addBook(_book2);
library1.addBook(_book3);
library1.addBook(_book4);
library1.addBook(_book5);
library1.displayBooks();
// _book1.id = 10;// ko truy cap duoc vi private