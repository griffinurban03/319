
//Griffin Urban
//10/4/2024
//griffinu@iastate.edu



fetch("./MoviesFromJSON.json")
    .then(response => response.json())
    .then(data => {
        const b = document.getElementById("my_form");
        b.addEventListener("submit", (event) => {
            event.preventDefault();
            const m = document.getElementById("selectedMovie");
            const inputMovieName = m.value;

            // Clear previous movie data
            var CardMovie = document.getElementById("col");
            CardMovie.innerHTML = "";

            for (let i = 0; i < data.movies.length; i++) {
                if (data.movies[i].title === inputMovieName) {
                    let title = data.movies[i].title;
                    let year = data.movies[i].year;
                    let url = data.movies[i].url;

                    let AddCardMovie = document.createElement("div");
                    AddCardMovie.classList.add("col");
                    AddCardMovie.innerHTML = `
                        <div class="card shadow-sm" onclick="changeBackground(this)">
                            <img src="${url}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-text"> <strong>${title}</strong>, ${year}</p>
                            </div>
                        </div>
                    `;
                    CardMovie.appendChild(AddCardMovie);
                }
            }
        });
    })
    .catch(error => console.error('Error fetching the JSON:', error));

function loadMovies(myMovies, n, description = "") {
    const arrayMovies = myMovies.movies;

    let filteredMovies = arrayMovies.filter(movie => 
        description ? movie.description.toLowerCase().includes(description.toLowerCase()) : true
    );

    let sortedMovies = [];
    if (n === 1) {
        sortedMovies = filteredMovies.slice().sort((p1, p2) => p1.price - p2.price);
    } else if (n === 2) {
        sortedMovies = filteredMovies.slice().sort((p1, p2) => p2.price - p1.price);
    } else if (n === 3) {
        sortedMovies = filteredMovies;
    }

    var CardMovie = document.getElementById("col");
    CardMovie.innerHTML = "";

    for (let i = 0; i < sortedMovies.length; i++) {
        let title = sortedMovies[i].title;
        let year = sortedMovies[i].year;
        let url = sortedMovies[i].url;
        let price = sortedMovies[i].price;

        let AddCardMovie = document.createElement("div");
        AddCardMovie.classList.add("col");
        AddCardMovie.innerHTML = `
            <div class="card shadow-sm" onclick="changeBackground(this)">
                <img src="${url}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text"> <strong>${title}</strong>, ${year}, $${price}</p>
                </div>
            </div>
        `;
        CardMovie.appendChild(AddCardMovie);
    }
}

function showCardsSortedByPriceLowHigh() {
    fetch("./MoviesFromJSON.json")
        .then(response => response.json())
        .then(myMovies => loadMovies(myMovies, 1))
        .catch(err => console.log("Error :" + err));
}

function showCardsSortedByPriceHighLow() {
    fetch("./MoviesFromJSON.json")
        .then(response => response.json())
        .then(myMovies => loadMovies(myMovies, 2))
        .catch(err => console.log("Error :" + err));
}

function showCardsContainingDescriptionA() {
    const inputField = document.getElementById('inputField');
    inputField.style.display = 'block'; // Show the input field
}

function showCardsContainingDescriptionB() {
    const inputDescription = document.getElementById("descriptionInput").value;
    fetch("./MoviesFromJSON.json")
        .then(response => response.json())
        .then(myMovies => loadMovies(myMovies, 3, inputDescription))
        .catch(err => console.log("Error :" + err));
}

function changeBackground(card) {
    card.style.backgroundColor = card.style.backgroundColor === 'lightblue' ? '' : 'lightblue';
}