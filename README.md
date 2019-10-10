# LIRI-Bot
An experiment with Node.js. I'm just starting to learn Node.js. I am also very tired. Better description later. Probably.

(_In case you don't scroll down: you need to make your own `.env` file with your own keys_)

## Overview
LIRI is like iPhone's SIRI. 

However, while SIRI is a _**Speech**_ Interpretation and Recognition Interface, LIRI is a _**Language**_ Interpretation and Recognition Interface. 

LIRI will be a command line Node.js app that takes in parameters and gives you back data. 

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

### About LIRI
LIRI is a Node.js app that lacks a front-end currently. It's an experiment in pulling from APIs using Node.js and hiding keys as well as a way to dip my toes into Node.js
 
### About Me
Because apparently this is a good thing to do. I'm the app developer. Tada. Amaze. Whoo. 
 
## Instructions
### To Use
You will need to create your own `.env` file with your own API keys in order to test this project. I won't be retrieving keys from firebase this time.

### Commands

App Command | Full Node command
------------|-------------------
`concert-this`      | `node liri.js concert-this <artist/band name here>`
`spotify-this-song` | `node liri.js spotify-this-song <song name here>`
`movie-this`        | `node liri.js movie-this <movie name here>`
`do-what-it-says`   | `node liri.js spotify-this-song <song name here>`

#### concert-this

This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

  * Name of the venue
  * Venue location
  * Date of the Event (use moment to format this as "MM/DD/YYYY")
  
#### spotify-this-song

This will show the following information about the song in your terminal/bash window

  * Artist(s)
  * The song's name
  * A preview link of the song from Spotify
  * The album that the song is from
  
If no song is provided then your program will default to "The Sign" by Ace of Base.

#### movie-this

This will output the following information to your terminal/bash window:

  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.
  
If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

#### do-what-it-says

LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

  * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
  * Edit the text in random.txt to test out the feature for movie-this and concert-this.
 
## Tools
 * [Node Package - Axios](https://www.npmjs.com/package/axios)
 * [Node Package - DotEnv](https://www.npmjs.com/package/dotenv)
 * [Node Package - Moment](https://www.npmjs.com/package/moment)
 * [Node Package - API - Spotify API](https://www.npmjs.com/package/node-spotify-api)
 * [API - OMDB](http://www.omdbapi.com) 
 * [API - Bands In Town](http://www.artists.bandsintown.com/bandsintown-api)
