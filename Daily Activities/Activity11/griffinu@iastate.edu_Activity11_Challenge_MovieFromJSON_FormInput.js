
//Griffin Urban
//10/4/2024
//griffinu@iastate.edu



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
        .then(myMovies => loadMovies(myMovies, 3))
        .catch(err => console.log("Error :" + err));
}

function operation4(card) {
card.style.backgroundColor = card.style.backgroundColor === 'lightblue' ? '' : 'lightblue';
}

function loadMovies(myMovies, option, description = "") {
    //convert myMovies to Array
    let arrayMovies = [];
    for (let i = 0; i < myMovies.movies.length; i++) {
        arrayMovies.push(myMovies.movies[i]);
    }

    //filter the movies
    let filteredMovies = arrayMovies.filter(movie =>
        description ? movie.description.toLowerCase().includes(description.toLowerCase()) : true
    );


    let sortedMovies = [];

    if (option === 1) {
        //sort array from low to high
        sortedMovies = arrayMovies.sort((p1, p2) => (p1.price > p2.price) ? 1 : (p1.price < p2.price) ? -1 : 0);
        console.log("this is array movies sorted", sortedMovies);
    } else if (option === 2) {
        //sort array from low to high
        sortedMovies = arrayMovies.sort((p1, p2) => (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0);
        console.log("this is array movies sorted", sortedMovies);
    } else if (option === 3) {
        sortedMovies = filteredMovies;
    }


    // Find the ID col for the bootsrap card
    var CardMovie = document.getElementById("col");

    //clear previous card data
    CardMovie.innerHTML = "";

    for (let i = 0; i < sortedMovies.length; i++) {
        let title = sortedMovies[i].title;
        let year = sortedMovies[i].year;
        let url = sortedMovies[i].url;
        let price = sortedMovies[i].price;

        let AddCardMovie = document.createElement("div");
        AddCardMovie.classList.add("col");
        AddCardMovie.innerHTML = `
            <div class="card shadow-sm">
                <img src=${url} class="card-img-top" alt="..."></img>
                <div class="card-body">
                <p class="card-text"> <strong>${title}</strong>, ${year}, $${price}</p>
            </div>
            </div>
            `;
        CardMovie.appendChild(AddCardMovie);

    } // end of for
}
