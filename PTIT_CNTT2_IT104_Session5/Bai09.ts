class Book3 {
    private id: number;
    private title: string;
    private author: string;
    private year: number;

    constructor(id: number, title: string, author: string, year: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
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
    getYear(): number {
        return this.year;
    }

    setTitle(newTitle: string): void {
        this.title = newTitle;
    }
    setAuthor(newAuthor: string): void {
        this.author = newAuthor;
    }
    setYear(newYear: number): void {
        this.year = newYear;
    }
}

class Library3 {
    books: Book3[] = [];

    addBook(book: Book3): void {
        this.books.push(book);
    }

    displayBooks(): void {
        if (this.books.length === 0) {
            console.log("No books in the library.");
            return;
        }
        console.log("Books in the library:");
        this.books.forEach((book, index) => {
            console.log(
                `${index + 1}. ID: ${book.getId()}, Title: ${book.getTitle()}, Author: ${book.getAuthor()}, Year: ${book.getYear()}`
            );
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
                console.log(`ID: ${book.getId()}, Title: ${book.getTitle()}, Author: ${book.getAuthor()}, Year: ${book.getYear()}`);
            });
        }
    }

    deleteBookById(id: number): void {
        const initialLength = this.books.length;
        this.books = this.books.filter(book => book.getId() !== id);

        if (this.books.length < initialLength) {
            console.log(`Book with ID ${id} deleted successfully.`);
        } else {
            console.log(`No book found with ID ${id}.`);
        }
    }

    updateBookById(id: number, newTitle: string, newAuthor: string, newYear: number): void {
        const book = this.books.find(book => book.getId() === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            book.setYear(newYear);
            console.log(`Book with ID ${id} updated successfully.`);
        } else {
            console.log(`No book found with ID ${id}.`);
        }
    }
}

// ====== Test ======
const library3 = new Library3();

const ___book1 = new Book3(1, "To Kill a Mockingbird", "Harper Lee", 1960);
const ___book2 = new Book3(2, "1984", "George Orwell", 1949);
const ___book3 = new Book3(3, "The Great Gatsby", "F. Scott Fitzgerald", 1925);
const ___book4 = new Book3(4, "Brave New World", "Aldous Huxley", 1932);
const ___book5 = new Book3(5, "The Catcher in the Rye", "J.D. Salinger", 1951);

library3.addBook(___book1);
library3.addBook(___book2);
library3.addBook(___book3);
library3.addBook(___book4);
library3.addBook(___book5);

library3.displayBooks();
console.log("\n");
library3.findBooksByName("1984");
library3.deleteBookById(1);
library3.updateBookById(2, "Nineteen Eighty-Four", "George Orwell", 1950);
console.log("\n");
library3.displayBooks();
