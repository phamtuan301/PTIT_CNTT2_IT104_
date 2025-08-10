class Book2 {
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
class Library2 {
    books: Book2[] = [];
    addBook(book: Book2): void {
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
    findBooksByName(name: string): void {
        const foundBooks = this.books.filter(book =>
            book.getTitle().toLowerCase().includes(name.toLowerCase())
        );

        if (foundBooks.length === 0) {
            console.log(`No books found with name containing: "${name}"`);
        } else {
            console.log(`Found ${foundBooks.length} book(s) with name containing "${name}":`);
            foundBooks.forEach(book => {
                console.log(`ID: ${book.getId()}, Title: ${book.getTitle()}, Author: ${book.getAuthor()}`);
            });
        }
    }
}
const library2 = new Library2();
const __book1 = new Book2(1, "To Kill a Mockingbird", "Harper Lee");
const __book2 = new Book2(2, "1984", "George Orwell");
const __book3 = new Book2(3, "The Great Gatsby", "F. Scott Fitzgerald");
const __book4 = new Book2(4, "Brave New World", "Aldous Huxley");
const __book5 = new Book2(5, "The Catcher in the Rye", "J.D. Salinger");
library2.addBook(__book1);
library2.addBook(__book2);
library2.addBook(__book3);
library2.addBook(__book4);
library2.addBook(__book5);
library2.displayBooks();
library2.findBooksByName("1984");