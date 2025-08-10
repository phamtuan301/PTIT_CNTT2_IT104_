class Book {
    private title: string;
    private author: string;
    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
}
class Library {
    books: Book[] = [];
    addBook(book: Book): void {
        this.books.push(book);
    }
    displayBooks(): void {
        if (this.books.length === 0) {
            console.log("No books in the library.");
            return;
        }
        console.log("Books in the library:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. Title: ${book['title']}, Author: ${book['author']}`);
        });
    }
}
const library = new Library();
const book1 = new Book("To Kill a Mockingbird", "Harper Lee");
const book2 = new Book("1984", "George Orwell");
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book4 = new Book("Brave New World", "Aldous Huxley");
const book5 = new Book("The Catcher in the Rye", "J.D. Salinger");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.displayBooks();