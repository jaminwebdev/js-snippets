// The flyweight pattern is useful when you're creating a huge number of objects, which could potentially 
// drain available RAM. It allows us to minimize the amount of consumed memory.
// In JavaScript, we can easily solve this problem through prototypal inheritance
// & RAM amounts anymore make the flyweight pattern less important
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// map to be used to keep track of existing books
const books = new Map();

const createBook = (title, author, isbn) => {
    const existingBook = books.has(isbn);
  
    if (existingBook) {
      return books.get(isbn);
    }
  
    const book = new Book(title, author, isbn);
    books.set(isbn, book);
  
    return book;
};

const bookList = [];

const addBook = (title, author, isbn, availability, sales) => {
    const book = {
    ...createBook(title, author, isbn),
    sales,
    availability,
    isbn
    };

    bookList.push(book);
    return book;
};

// Instead of creating a new Book instance each time we add a copy, 
// we can effectively use the already existing Book instance for that particular copy

addBook("Harry Potter", "JK Rowling", "AB123", false, 100);
addBook("Harry Potter", "JK Rowling", "AB123", true, 50);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", true, 10);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", false, 20);
addBook("The Great Gatsby", "F. Scott Fitzgerald", "EF567", false, 20);

// Although there are 5 copies, we only have 3 Book instances