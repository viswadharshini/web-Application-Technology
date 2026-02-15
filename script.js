let movies = [
    {title: "Avengers", genre: "Action", rating: 4, img: "https://via.placeholder.com/200"},
    {title: "Interstellar", genre: "Sci-Fi", rating: 5, img: "https://via.placeholder.com/200"},
    {title: "Joker", genre: "Drama", rating: 5, img: "https://via.placeholder.com/200"},
    {title: "Batman", genre: "Action", rating: 3, img: "https://via.placeholder.com/200"}
];

let selectedRating = 0;

// Show pages
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Display movies
function displayMovies(data) {
    let container = document.getElementById("movieContainer");
    container.innerHTML = "";

    data.forEach(movie => {
        container.innerHTML += `
            <div class="card">
                <img src="${movie.img}">
                <h3>${movie.title}</h3>
                <p>${movie.genre}</p>
                <p>⭐ ${movie.rating}</p>
            </div>
        `;
    });
}

// Filter movies
function filterMovies(genre) {
    if (genre === "all") {
        displayMovies(movies);
    } else {
        let filtered = movies.filter(m => m.genre === genre);
        displayMovies(filtered);
    }
}

// Star rating
function rate(stars) {
    selectedRating = stars;
    let starElements = document.querySelectorAll("#stars span");

    starElements.forEach((star, index) => {
        star.classList.toggle("active", index < stars);
    });
}

// Submit review
function submitReview() {
    let text = document.getElementById("reviewText").value;
    let list = document.getElementById("reviewList");

    if (text === "" || selectedRating === 0) {
        alert("Please enter review and rating!");
        return;
    }

    let li = document.createElement("li");
    li.innerText = `${text} - ⭐ ${selectedRating}`;
    list.appendChild(li);

    document.getElementById("reviewText").value = "";
}

// Top rated movies
function showTopMovies() {
    let top = movies.filter(m => m.rating >= 4);
    let container = document.getElementById("topMovies");

    container.innerHTML = "";
    top.forEach(m => {
        container.innerHTML += `
            <div class="card">
                <h3>${m.title}</h3>
                <p>⭐ ${m.rating}</p>
            </div>
        `;
    });
}

// Initial load
displayMovies(movies);
showTopMovies();