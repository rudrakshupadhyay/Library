const myLibrary = [];
function Book(id,title,author,pages,read){
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function addBookToLibrary(title,author,pages,read){
    const id = crypto.randomUUID();
    let yourBook = new Book(id,title,author,pages,read);
    myLibrary.push(yourBook);
}