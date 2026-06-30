const apiKey = "b466c7dd"; // Replace with your OMDb API key

function searchMovie() {

    const movie = document.getElementById("movie-name").value.trim();

    if (movie === "") {
        alert("Please enter a movie name.");
        return;
    }

    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movie)}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            console.log(data);

            if (data.Response === "False") {
                alert("Movie not found!");
                return;
            }

           document.getElementById("poster").src = data.Poster;

            // Title
            document.getElementById("title").innerHTML = data.Title;

            // Year
            document.getElementById("year").innerHTML = data.Year;

            // IMDb Rating
            document.getElementById("rating").innerHTML =
                "⭐ " + data.imdbRating;

            // Runtime
            document.getElementById("runtime").innerHTML =
                data.Runtime;

            // Genre
            document.getElementById("genre").innerHTML =
                data.Genre;

            // Director
            document.getElementById("director").innerHTML =
                data.Director;

            // Actors
            document.getElementById("actors").innerHTML =
                data.Actors;

            // Language
            document.getElementById("language").innerHTML =
                data.Language;

            // Plot
            document.getElementById("plot").innerHTML =
                data.Plot;

        })

        .catch(error => {

            console.log(error);

            alert("Something went wrong!");

        });

}

// Press Enter to search

document.getElementById("movie-name").addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        searchMovie();
    }

});