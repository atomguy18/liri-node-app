# liri-node-app
##Purpose
This is an "assistant" app similiar to siri but accessed through the terminal. It can be asked about movies, songs, and concerts of a specified artist. all the information is retrieved from APIs then output to the console as well as logged to a log.txt file. This app was made to practice my skills with Node and using modules.

##Overview
This app takes in a users command as well as the search query or details. it then calls the function inputChoice to match the details to the proper command. it then calls the function related to that command. getSong, getConcert, getMovie, all do essentially the same thing. take the input the user give and makes an API call gets the relevant data from the response outputs in a formate the user can read. the addToLog function logs it to a text file using the fs module. the getSong and getMovie functions have default values incase the user doesnt input any information. the do-what-it-says command calls the doIt function which reads the 'random.txt' file parses the info and runs the command in the file.

##Instructions
clone the repo git clone https://github.com/dcornnell/liri-node-app.git
once in the file run: npm install
to actually run this app you will need to have a spotify developer tools and set up a .env file
commands
node liri.js concert-this (band name) 
node liri.js movie-this (movie title)
node liri.js spotify-this-song (song title)
node liri.js do-what it says

##Technologies Used
-Javascript
-Node
-modules
-fs
-spotify
-axious
-module
-dotenv
-API
-OMDB
-Spotify
-seatgeek
