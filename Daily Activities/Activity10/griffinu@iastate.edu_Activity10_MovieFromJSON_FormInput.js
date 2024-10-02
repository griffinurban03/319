const b = document.getElementById("my_form");

b.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    fetch("./MoviesFromJSON.json")
});