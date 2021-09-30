const divList = document.getElementById("list")
const bookDetails = document.getElementById("show-panel")

const fetchBooksArray = () => {
    fetch("http://localhost:3000/books")
    .then(response => response.json())
    .then(data => addListToPage(data))
}

function addListToPage(books) {
       
       books.forEach(books => {
        const li = document.createElement("li")
        li.id = books.id
        li.innerHTML = books.title
        divList.appendChild(li)
        li.addEventListener('click', () => {secondFetch(li.id)}) 
       });

function secondFetch(id) {
        fetch(`http://localhost:3000/books/${id}`)
        .then(response => response.json())
        .then(data => showDetails(data))


       
}

function showDetails(id) {
   
    const description = document.createElement("p")
    const image = document.createElement("img")
    const users = document.createElement("h3")
    description.innerHTML = id.description
    image.src = id.img_url
    users.innerHTML = id.users
    bookDetails.append(description)
    bookDetails.append(image)
    bookDetails.append(users)





    // bookDetails.appendChild({})
}

}



// When a user clicks the title of a book, display the book's thumbnail, description, and a list of users who have liked the book. This information should be displayed in the div#show-panel element.

document.addEventListener("DOMContentLoaded", fetchBooksArray);



