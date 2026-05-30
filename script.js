function registerUser(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    let user = {
        name,
        email,
        password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful");
}
let books = JSON.parse(localStorage.getItem("books")) || [];

function addBook(){

    let title = document.getElementById("bookTitle").value;

    let author = document.getElementById("author").value;

    let genre = document.getElementById("genre").value;

    books.push({
        title,
        author,
        genre
    });

    localStorage.setItem("books", JSON.stringify(books));

    displayBooks();
}

function displayBooks(){

    let list = document.getElementById("bookList");

    list.innerHTML = "";

    books.forEach((book,index)=>{

        list.innerHTML += `
            <div class="card">

                <h3>${book.title}</h3>

                <p>${book.author}</p>

                <p>${book.genre}</p>

                <button onclick="requestBook(${index})">
                    Request
                </button>

            </div>
        `;
    });
}

displayBooks();
function requestBook(index){

    let message = prompt("Enter request message");

    if(message){

        alert(
            "Request sent for: "
            + books[index].title
        );
    }
}
function talk(){

    let input =
    document.getElementById("userInput")
    .value.toLowerCase();

    let response = "";

    if(input.includes("hello")){
        response = "Hello reader!";
    }

    else if(input.includes("book")){
        response =
        "Go to Books page to explore books.";
    }

    else if(input.includes("exchange")){
        response =
        "You can request books from users.";
    }

    else{
        response =
        "Sorry, I don't understand.";
    }

    document.getElementById("chatArea")
    .innerHTML += `
        <p><b>You:</b> ${input}</p>
        <p><b>Bot:</b> ${response}</p>
    `;
}
function searchBook(){

    let keyword =
    document.getElementById("searchBox")
    .value.toLowerCase();

    let filteredBooks =
    books.filter(book =>
        book.title.toLowerCase()
        .includes(keyword)
    );

    displayFiltered(filteredBooks);
}

function displayFiltered(filteredBooks){

    let list =
    document.getElementById("bookList");

    list.innerHTML = "";

    filteredBooks.forEach(book=>{

        list.innerHTML += `
            <div class="card">
                <h3>${book.title}</h3>
            </div>
        `;
    });
}
function loginUser(){

    let email =
    document.getElementById("loginEmail").value;

    let password =
    document.getElementById("loginPassword").value;

    let savedUser =
    JSON.parse(localStorage.getItem("user"));

    if(savedUser == null){

        alert("No user registered yet");

        return;
    }

    if(
        email === savedUser.email &&
        password === savedUser.password
    ){

        alert("Login Successful");

        window.location.href = "home.html";
    }

    else{

        alert("Invalid Email or Password");
    }
}
