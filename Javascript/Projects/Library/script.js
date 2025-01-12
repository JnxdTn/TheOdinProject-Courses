const dialog = document.querySelector("dialog");
const addBook = document.querySelector(".add");
const refreshBookDisplay = document.querySelector(".refresh");
const closeDialog = document.querySelector(".closeButton");
const registerBook = document.querySelector("button[type='submit']");
const books = document.querySelector(".books");
const deleteButton = document.querySelector(".deleteButton");
let myLibrary = [];
let myNewLibrary = [];
let bookTitle = document.querySelector("#bookTitle");
let bookAuthor = document.querySelector("#bookAuthor");
let bookGenre = document.querySelector("#bookGenre");


function Book(author, title, genre) {
    this.author = author;
    this.title = title;
    this.genre = genre;
    this.status = "Unread";
};

function addBookToLibrary(author, title, genre) {
    const book = new Book(author, title, genre);
    myNewLibrary.push(book);
};

function setDataIndex(){
    const bookElement = document.querySelectorAll(".book");
    bookElement.forEach((book, index) => {
        book.setAttribute("data-index", index+1);
    });
}

function setReadStatus(status = ""){    
    if(status === "Unread"){
        return "Read";
    }else{
        return "Unread";
    }
}

function displayBooksInLibrary() {
    myNewLibrary.forEach((book)=> {
        let bookDivs = ["Title", "Author", "Genre", "Status"];
        const newBook = books.appendChild(document.createElement("div"));
        const buttonDiv = document.createElement("div");
        const deletebutton = document.createElement("button");
        const readStatus = document.createElement("button");

        newBook.setAttribute("class", "book");
        
        bookDivs.forEach((div) => {
            const newDiv = document.createElement("div");
            newBook.appendChild(newDiv); 
            newDiv.setAttribute("class", div);

            const newSpan = document.createElement("span");
            newDiv.appendChild(newSpan);
            newSpan.textContent = `${div}: `;

            const spanDescription = document.createElement("span");
            newDiv.appendChild(spanDescription);
            spanDescription.textContent = book[div.toLowerCase()];

        });

        setDataIndex();
        newBook.appendChild(buttonDiv);
        buttonDiv.setAttribute("class", "bookButtons");
        buttonDiv.appendChild(deletebutton);
        buttonDiv.appendChild(readStatus);

        deletebutton.setAttribute("class", "deleteButton");
        readStatus.setAttribute("class", "readStatus");
        readStatus.textContent = "Update Status";
        myLibrary.push(book);
    });
    myNewLibrary = [];
}

function clearForm() {
    bookAuthor.value = "";
    bookTitle.value = "";
    bookGenre.value = "";
}

addBook.addEventListener("click", () => {
    dialog.showModal();
});

closeDialog.addEventListener("click", (e) => {
    e.preventDefault();
    clearForm();
    dialog.close();
});

registerBook.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary(bookAuthor.value, bookTitle.value, bookGenre.value);
    alert("Book Successfully registered!");
    clearForm();
})

refreshBookDisplay.addEventListener("click", displayBooksInLibrary);

document.body.addEventListener("click", (e)=>{
    switch(e.target.className){

        case "deleteButton":
            e.target.parentNode.parentNode.remove();
            myLibrary.splice(e.target.parentNode.parentNode.dataset.index - 1, 1);
            setDataIndex();
            break;

        case "readStatus":
            e.target.parentNode.previousSibling.lastChild.textContent = setReadStatus(e.target.parentNode.previousSibling.lastChild.textContent);
            break;

    }
})

addBookToLibrary("J.R.R Tolkien", "The Lord of the Rings", "Fantasy");
addBookToLibrary("Charles Dickens", "A Tale of Two Cities", "Historical Fiction");
addBookToLibrary("Antoine de Saint-Exupery", "The Little Prince", "Children's Fiction");
addBookToLibrary("Paulo Coelho", "The Alchemist", "Fantasy");
addBookToLibrary("J.R.R Tolkien", "The Hobbit", "Children's Fiction");
addBookToLibrary("Lewis Caroll", "Alice's Adventures in Wonderland", "Fantasy");
addBookToLibrary("C.S. Lewis", "The Lion, The Witch, and the Wardrobe", "Children's Fiction");
addBookToLibrary("Dan Brown", "The Da Vinci Code", "Mystery Thriller");