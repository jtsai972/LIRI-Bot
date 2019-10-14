console.log("Liri loaded"); //letting us know this works

const fs = require("fs");

//Packages
require("dotenv").config();
const axios = require("axios");
const moment = require('moment');

//API
const spotifyAPI = require('node-spotify-api');

//keys
var keys = require("./keys.js");
var Spotify = new spotifyAPI(keys.spotify); //example from assignment

//formatting variables
var cmdTxt = "Command: node run.js ",
    whatTxt = cmdTxt + "do-what-it-says";

var breakEquals = "==========================\n",
    breakDashes = "--------------------------\n";

//getting concert info
var concert = function(name, isWhat){
  var queryURL = `https://rest.bandsintown.com/artists/${name}/events?app_id=codingbootcamp`;

  var cmd = cmdTxt + "concert-this " + name + "\n";

  let starterText = 
    breakEquals + 
      "Searching for concerts!\n" + 
    breakEquals +
      "Upcoming Events\n" +
    breakDashes;
  
  //if this ran "What it says"
  let printArr = isWhat ? 
    [whatTxt, cmd, starterText] : [cmd, starterText];

  //querying
  query(queryURL).then(
    function(events) {
      for( let i = 0; i < events.length; i++) {
        var venue = events[i].venue;
        var date = moment(events[i].datetime).format("dddd, MMMM Do YYYY, h:mma");
        var location = `${venue.city}, ${venue.region}, ${venue.country}`;
        
        var venueText = 
          "Venue:     " + venue.name + "\n" +
          "Location:  " + location.replace(" , ", " ") + "\n" + 
          "Date:      " + date + "\n";

        printArr.push(venueText);
      }
    }
  ).then( function() {
    log(printArr);
  });
  
}

//getting spotify info
var spotifyFn = function(name, isWhat){
  let starterText = 
    breakEquals + 
      "Retrieving song details!\n" + 
    breakEquals;

  let cmd = cmdTxt + "spotify-this-song " + name + "\n";

  //if this ran "What it says"
  let printArr = isWhat ? 
    [whatTxt, cmd, starterText] : [cmd, starterText];

  Spotify
    .search({ type: 'track', query: name })
    .then( function(response) {
      //console.log(response.tracks);
      let track = response.tracks.items[0];
      let album = track.album;
      //console.log(track);

      printArr = printArr.concat([
        preview = "Preview link: " + album.external_urls.spotify,
        artist = "Artist:       " + album.artists[0].name,
        song = "Song:         " + track.name,
        albumName = "Album:        " + album.name
      ]);
    }).then( function() {
      log(printArr);
    })
    .catch( function(err) {
      console.log(err);
    });
}

//Getting movie info
var movie = function (name, isWhat){
  let starterText = 
    breakEquals + 
      "Grabbing movie information\n" + 
    breakEquals;

  let cmd = cmdTxt + "movie-this " + name + "\n";

  //if this ran "What it says"
  let printArr = isWhat ? 
    [whatTxt, cmd, starterText] : [cmd, starterText];

  var queryURL = `https://www.omdbapi.com/?t=${name}&y=&plot=short&apikey=trilogy`;

  query(queryURL).then(
    function(movie) {
      // console.log(movie);
      // console.log(breakDashes);

      printArr = printArr.concat([
        `Title: ${movie.Title}`,
        "Release year: " + movie.Year,
        `IMDB Rating: ${movie.Ratings[0].Value}`,
        `Rotten Tomatoes Rating: ${movie.Ratings[1].Value}`,
        `Country: ${movie.Country}`,
        `Language: ${movie.Language}`,
        `Plot: ${movie.Plot}`,
        `Actors: ${movie.Actors}`
      ])
    }
  ).then(function() {
    log(printArr);
  });
}

//Querying
function query(queryURL) {
  return axios 
    .get(queryURL) //Query
    .then( //After query is made
      function(response) {
        console.log(response.data);
        return response.data;
      })
    .catch(function(error) { //If Query fails
      if (error.response) {
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}

//Logging
function log(arr){
  console.log("Logging commands and results!")

  var logLoc = "./assets/text/log.txt";

  //printing out console results and logging them
  for( let i = 0; i < arr.length; i++ ) {
    //making sure this is in order
    if(i < arr.length) {
      console.log(arr[i]);
      fs.appendFileSync(logLoc, arr[i] + "\n", function(error) {
        if(error){console.log(error);};
      });
    } else {
      console.log("Error with the logging");
      fs.appendFileSync(logLoc, "\n\n" + breakEquals + "\n\n", function(error) {
        if(error){console.log(error);};
      });
    }
  }

  //Adding a divider to the end
  fs.appendFileSync(logLoc, "\n" + breakDashes + "\n", function(error) {
    if(error){console.log(error);};
  });
}

//exporting stuff (to run.js)
exports.concert = concert;
exports.spotify = spotifyFn;
exports.movie = movie;
//exports.whatItSays = whatItSays;