require("dotenv").config();
const Spotify = require("node-spotify-api");
const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);
const axios = require("axios");
const moment = require("moment");
var fs = require("fs");
var action = process.argv[2];
var itemData = process.argv.slice(3);
console.log(itemData);

switch (action) {
    case "concert-this":
        concert(itemData);
        break;

    case "spotify-this-song":
        song(itemData);
        break;

    case "movie-this":
        movie(itemData);
        break;

    case "do-what-it-says":
        doSays(itemData);
        break;
};

function concert(itemData) {
    var concertData = itemData.join("-");
    axios.get("https://api.seatgeek.com/2/events?client_id=MTk0MTg0MDF8MTU3MzUwMTEwMS40MQ&performers.slug=" + concertData)
        .then(function (response) {

            console.log("Name of Venue: " + response.data.events[0].venue.name);

            console.log("Location of Venue: " + response.data.events[0].venue.display_location);

            var dateTime = response.data.events[0].datetime_local;
            console.log("Date of concert: " + moment(dateTime).format("MM DD, YYYY"))
        });
};
function song(itemData) {
    var songData = itemData.join(" ");
    if (!songData) {
        songData = "The Sign"
    };
    spotify.search({ type: 'track', query: songData })
        .then(function (response) {

            //Artist
            console.log("Artist: " + response.tracks.items[0].artists[0].name);

            //The song's name
            console.log("Song name: " + response.tracks.items[0].name);

            //* A preview link of the song from Spotify
            console.log("Preview of song: " + response.tracks.items[0].preview_url);

            //The album that the song is from
            console.log("Album: " + response.tracks.items[0].album.name);
        });
};
function movie(itemData) {
    var movieData = itemData.join(" ");
    if (!movieData) {
        movieData = "Mr. Nobody"
    };
    axios.get("http://www.omdbapi.com/?t=" + movieData + "&y=&plot=short&apikey=trilogy")
        .then(function (response) {

            //* Title of the movie.
            console.log("Movie title: " + response.data.Title);

            //* Year the movie came out.
            console.log("Release year: " + response.data.Year);

            //* IMDB Rating of the movie.
            console.log("IMDB Rating: " + response.data.Ratings[0].Value);

            //* Rotten Tomatoes Rating of the movie.
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);

            //* Country where the movie was produced.
            console.log("Country produced in: " + response.data.Country);

            //* Language of the movie.
            console.log("Language of moive: " + response.data.Language);

            //* Plot of the movie.
            console.log("Movie plot: " + response.data.Plot);

            //* Actors in the movie.
            console.log("Movie actors: " + response.data.Actors);

        });
};

function doSays() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        console.log(data);
    });
};
