const b = document.getElementById("my_form");

b.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    fetch("./MoviesFromJSON.json")
});

// input value selected movie
const m = document.getElementById("selectedMovie");
const inputMovieName = m.value;

// find the id col for Bootstrap Card
var CardMovie = document.getElementById("col");
for (let i = 0; i < ______________________; i++) {
    if (______________.title === inputMovieName) {
        let title = _________________.title;
        let year = __________________.year;
        let url = ___________________.url;
        console.log(title);
        // construct the HTML element
        let AddCardMovie = document.createElement("div");
        AddCardMovie.classList.add("col"); // Add Bootstrap class to the column
        AddCardMovie.innerHTML = `
<div class="card shadow-sm">
<img src=${url} class="card-img-top" alt="..."></img>
<div class="card-body">
<p class="card-text"> <strong>${title}</strong>, ${year}</p>
</div>
</div>
`;
        CardMovie.appendChild(AddCardMovie);
    } // end of if
} // end of for

// Clear previous movie data
CardMovie.innerHTML = ""; // This will clear the previous movie data and image