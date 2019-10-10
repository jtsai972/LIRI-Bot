# LIRI-Bot
An experiment with node. I'm just starting to learn node. I am also very tired. Better description later. Probably.

## Overview
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

### About LIRI
LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.
 
### About Me
Because apparently this is a good thing to do. I'm the app developer. Tada. Amaze. Whoo. 
 
## Instructions
### Commands
`concert-this`      - Full command: `node liri.js concert-this <artist/band name here>`

`spotify-this-song` - Full command: `node liri.js spotify-this-song '<song name here>'`

`movie-this`        - Full command: `node liri.js movie-this '<movie name here>'`

`do-what-it-says`   - Full command: `node liri.js spotify-this-song '<song name here>'`

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
 * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
 * [Axios](https://www.npmjs.com/package/axios)
 * [Moment](https://www.npmjs.com/package/moment)
 * [DotEnv](https://www.npmjs.com/package/dotenv)
 * [OMDB API](http://www.omdbapi.com) 
 * [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
