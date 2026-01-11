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
let add = document.querySelector(".add");
let formContainer = document.querySelector(".formContainer");
let removeForm = document.querySelector(".removeForm");
add.addEventListener("click",() => {
    formContainer.style.display = "block";
});
removeForm.addEventListener("click",() => {
    formContainer.style.display = "none";
});