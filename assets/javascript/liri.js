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

//formatting text variables
var cmdTxt = "Command: node run.js ",
    whatTxt = cmdTxt + "do-what-it-says";
//line break text
var breakEquals = "==========================\n",
    breakDashes = "--------------------------\n";

//getting concert info
var concert = function(name, isWhat){
  //setting up the queryURL
  var queryURL = `https://rest.bandsintown.com/artists/${name}/events?app_id=codingbootcamp`;

  //Some styling text for when this function is called
  let starterText = 
    breakEquals + 
      "Searching for concerts!\n" + 
    breakEquals +
      "Upcoming Events\n" +
    breakDashes;

  //Logging the command text that called this function
  let cmd = cmdTxt + "concert-this " + name + "\n";
  
  //Creating a print array that changes if this was run from "What it says"
  let printArr = isWhat ? 
    [whatTxt, cmd, starterText] : [cmd, starterText];

  //querying
  query(queryURL).then(
    function(events) {
      //grabbing all the events for the artist
      for( let i = 0; i < events.length; i++) {
        //shortening some of the paths and data
        var venue = events[i].venue;
        var date = moment(events[i].datetime).format("dddd, MMMM Do YYYY, h:mma");
        var location = `${venue.city}, ${venue.region}, ${venue.country}`;
        
        //creating text that will be printed out
        var venueText = 
          "Venue:     " + venue.name + "\n" +
          "Location:  " + location.replace(" , ", " ") + "\n" + 
          "Date:      " + date + "\n";

        //pushing it into print array
        printArr.push(venueText);
      }
    }
  ).then( function() {
    //When all this other stuff above is done, print the results
    log(printArr);
  });
  
}

//getting spotify info
var spotifyFn = function(name, isWhat){
  //Some styling text for when this function is called
  let starterText = 
    breakEquals + 
      "Retrieving song details!\n" + 
    breakEquals;

  //Logging the command text that called this function
  let cmd = cmdTxt + "spotify-this-song " + name + "\n";

  //Creating a print array that changes if this was run from "What it says"
  let printArr = isWhat ? 
    [whatTxt, cmd, starterText] : [cmd, starterText];

  //Calling the spotify API
  Spotify
    .search({ type: 'track', query: name })
    .then( function(response) {
      //console.log(response.tracks);

      //Shortening paths
      let track = response.tracks.items[0];
      let album = track.album;
      //console.log(track);

      //Getting Content and putting it into an array
      printArr = printArr.concat([
        preview = "Preview link: " + album.external_urls.spotify,
        artist = "Artist:       " + album.artists[0].name,
        song = "Song:         " + track.name,
        albumName = "Album:        " + album.name
      ]);
    }).then( function() {
      //When all this other stuff above is done, print the results
      log(printArr);
    })
    .catch( function(err) {
      console.log(err);
    });
}

//Getting movie info
var movie = function (name, isWhat){
  //Some styling text for when this function is called
  let starterText = 
    breakEquals + 
      "Grabbing movie information\n" + 
    breakEquals;

  //Logging the command text that called this function
  let cmd = cmdTxt + "movie-this " + name + "\n";

  //Creating a print array that changes if this was run from "What it says"
  let printArr = isWhat ? 
    [whatTxt, cmd, starterText] : [cmd, starterText];

  //setting up the queryURL
    var queryURL = `https://www.omdbapi.com/?t=${name}&y=&plot=short&apikey=trilogy`;

  query(queryURL).then(
    function(movie) {
      // console.log(movie);
      // console.log(breakDashes);

      //Getting Content and putting it into an array
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
    //When all this other stuff above is done, print the results
    log(printArr);
  });
}

//Created a function for queries so I don't have to type this more than once
function query(queryURL) {
  return axios 
    //Query
    .get(queryURL)
    //After query is made
    .then( 
      function(response) {
        console.log(response.data);
        return response.data;
      })
    //If Query fails
    .catch(function(error) { 
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
  //Letting us know we're running the log function
  console.log("Logging commands and results!")

  //file path to the log.txt
  var logLoc = "./assets/text/log.txt";

  //printing out console results and logging them
  for( let i = 0; i < arr.length; i++ ) {
    //making sure this is in order
    if(i < arr.length) { //if spot in loop is valid
      //console log array item
      console.log(arr[i]);

      //log to text file this array item
      fs.appendFileSync(logLoc, arr[i] + "\n", function(error) {
        if(error){console.log(error);};
      });

    } else { //If this for loop is somehow invalid

      //Log the error to console and text log
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