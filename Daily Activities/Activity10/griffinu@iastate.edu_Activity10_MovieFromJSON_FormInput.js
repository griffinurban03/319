fetch("./MoviesFromJSON.json")
    .then(response => response.json())
    .then(data => {
        const b = document.getElementById("my_form");

        b.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent the form from submitting in the traditional way

            // Input value selected movie
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
                    console.log(title);

                    let AddCardMovie = document.createElement("div");
                    AddCardMovie.classList.add("col");
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
        });
    })
    .catch(error => console.error('Error fetching the JSON:', error));