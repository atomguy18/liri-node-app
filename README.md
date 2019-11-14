# liri-node-app

## Purpose

This is an "assistant" app similiar to siri but accessed through the terminal. This app can be asked about movies, songs, and concerts of a specified artist. All the information is retrieved from APIs, and then output to the console.  The information retrieved will supply information about the three parameters, mentioned previously.


## Overview

This app takes in the command line prompts chosen by the user to query what information they want to retrieve.  By using process.argv[2] for the type of search and process.argv[3].slice() for the serch variable, the switch function puts the search variable through the correct type of search.  An API call retreives relevant data from the the response outputs in a form the user can read.

## Instructions

1. Clone the repo git clone https://github.com/atomguy18/liri-node-app.git
2. Once in the file run: npm install
3. Create a .gitingore file to ignore various libraries that the user should install locally.
4. To actually run this app you will need to have a spotify developer tools and set up a .env file.
5. Terminal commands
    1. node liri.js concert-this (band name)
        1. ![concert command line](/images/concert.png)
    2. node liri.js movie-this (movie title)
        1. ![movie command line](/images/movie.png)
    3. node liri.js spotify-this-song (song title)
        1. ![song command line](/images/song.png)
    4. node liri.js do-what it says

## Technologies Used

* Javascript
* Node
* modules
* fs
* spotify
* axious
* module
* dotenv
* API
* OMDB
* Spotify
* seatgeek

