console.log("Liri loaded");

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
var cmdTxt = "Command: node run.js ";

var breakEquals = "==========================\n",
    breakDashes = "--------------------------\n";

var concert = function(name){
  var queryURL = `https://rest.bandsintown.com/artists/${name}/events?app_id=codingbootcamp`;

  var cmd = cmdTxt + "concert-this " + name + "\n\n";

  var starterText = 
    `${breakEquals} 
      Searching for concerts!\n 
    ${breakEquals}\n
      Upcoming Events\n
    ${breakDashes}`;

  console.log(starterText);
  var printArr = [cmd, starterText];

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

        console.log(venueText);
        printArr.push(venueText + "\n");
      }
    }
  ).then(function() {
    //log(printArr);
    console.log(printArr);
  });
  
}

var spotifyFn = function(name){
  let starterText = 
    breakEquals + 
      "Retrieving song details!" + 
    breakEquals + 
      "\n";

  console.log(starterText);
  log(starterText);

  Spotify
    .search({ type: 'track', query: name })
    .then(function(response) {
      //console.log(response.tracks);
      let track = response.tracks.items[0];
      let album = track.album;
      //console.log(track);

      let printArr = [
        breakDashes,
        preview = "Preview link: " + album.external_urls.spotify,
        artist = "Artist:       " + album.artists[0].name,
        song = "Song:         " + track.name,
        albumName = "Album:        " + album.name
      ]
      for(let i = 0; i < printArr.length; i++) {
        console.log(printArr[i]);
        log(printArr[i]);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
}

var movie = function (search){
  console.log("Grabbing movie information");
  var queryURL = `https://www.omdbapi.com/?t=${search}&y=&plot=short&apikey=trilogy`;

  query(queryURL).then(
    function(movie) {
      console.log(movie);
      console.log(breakDashes);
      console.log(`Title: ${movie.Title}`);
      console.log(`Release year: ${movie.Year}`);
      console.log(`IMDB Rating: ${movie.Ratings[0].Value}`);
      console.log(`Rotten Tomatoes Rating: ${movie.Ratings[1].Value}`);
      console.log(`Country: ${movie.Country}`);
      console.log(`Language: ${movie.Language}`);
      console.log(`Plot: ${movie.Plot}`);
      console.log(`Actors: ${movie.Actors}`);
    }
  );
}

var whatItSays = function(){
  console.log("What does the random text say?");
  fs.readFile(
    "./assets/text/random.txt", 
    "utf8", 
    function(error, data) {
      if (error) { return console.log(error); }
      console.log(data);
      let test = data.split(",");
      console.log(test);
    }
  );
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
function log(strArr){
  console.log("Logging commands and results!")

  var logLoc = "./assets/text/log.txt";

  for( let i = 0; i < strArr.length+1; i++ ) {
    //making sure this is in order
    if(i < strArr.length) {
      fs.appendFileSync(logLoc, strArr[i], function(error) {
        if(error){console.log(error);};
      });
    } else {
      fs.appendFileSync(logLoc, "\n\n" + breakEquals + "\n\n", function(error) {
        if(error){console.log(error);};
      });
    }
  }
}


//exporting stuff (to run.js)
exports.concert = concert;
exports.spotify = spotifyFn;
exports.movie = movie;
exports.whatItSays = whatItSays;