const myLibrary = [];
class Book{
    constructor(id,title,author,pages,read){
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}
function addBookToLibrary(title,author,pages,read){
    const id = crypto.randomUUID();
    let yourBook = new Book(id,title,author,pages,read);
    myLibrary.push(yourBook);
}
let add = document.querySelector(".add");
let formContainer = document.querySelector(".formContainer");
let removeForm = document.querySelector(".removeForm");
let formContent = document.querySelector(".formContent");
let tbody = document.querySelector("tbody");
add.addEventListener("click",() => {
    formContainer.style.display = "block";
});
removeForm.addEventListener("click",() => {
    formContainer.style.display = "none";
});
formContent.addEventListener("submit", function(e){
    e.preventDefault();
    const formData = new FormData(formContent);
    let title = formData.get("bookTitle");
    let author = formData.get("bookAuthor");
    let pages = Number(formData.get("bookPages"));
    let status = formData.get("bookRead");
    addBookToLibrary(title,author,pages,status);
    renderLibrary()
    formContent.reset();
    formContainer.style.display = "none";
});
tbody.addEventListener("click",function(e){
    if(e.target.className === "removeBookLib"){ // this way of className only valid for one class and give string for multile class use classList.contain()
        const eleid = e.target.dataset.id;
        const index = myLibrary.findIndex((book) => eleid === book.id);
        myLibrary.splice(index,1);
        renderLibrary();
    }
});
tbody.addEventListener("change",function(e){
    if (e.target.classList.contains("statusCheckbox")) {
        const idofele = e.target.dataset.id;
        const book = myLibrary.find((b) => idofele === b.id);
        book.read = e.target.checked ? "Read":"Unread";
        renderLibrary();
    }
});
function renderLibrary() {
    tbody.innerHTML = "";
    myLibrary.forEach((book) => {
        const tr = document.createElement("tr");
        if(book.read == "Read"){
            tr.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td><input type="checkbox" class="statusCheckbox" data-id="${book.id}" checked> ${book.read} </td>
            <td><button class="removeBookLib" data-id="${book.id}">Delete</button></td>
            `;
        }
        else{
            tr.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td><input type="checkbox" class="statusCheckbox" data-id="${book.id}"> ${book.read} </td>
            <td><button class="removeBookLib" data-id="${book.id}">Delete</button></td>
            `;
        }
        tbody.appendChild(tr);
    });
}