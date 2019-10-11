console.log("Liri loaded");

const fs = require("fs");

//Packages
require("dotenv").config();
const axios = require("axios");
const moment = require('moment');

//API
const Spotify = require('node-spotify-api');

//keys
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify); //example from assignment

//formatting variables
var cmdTxt = "Command: node run.js ";

var breakEquals = "==========================\n",
    breakDashes = "--------------------------\n";

var concertFn = function concert(search, name){
  var queryURL = `https://rest.bandsintown.com/artists/${search}/events?app_id=codingbootcamp`;

  var cmd = cmdTxt + "concert-this " + name;

  var starterText = 
    breakEquals +
      "Searching for concerts!\n" + 
    breakEquals +"\n"+ 
      "Upcoming Events\n" + 
    breakDashes;

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
    log(printArr);
    console.log(printArr);
  });
  
}

var spotifyFn = function spotify(){
  console.log("Retrieving song details!");
}

var movieFn = function movie(){
  console.log("Grabbing movie information");
}

var whatItSaysFn = function whatItSays(){
  console.log("What does the random text say?");
}

//Querying
function query(queryURL) {
  return axios 
    .get(queryURL) 
    .then(
      function(response) {
        // console.log(response.data);
        return response.data;
      })
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
function log(strArr){
  console.log("Logging commands and results!")

  var logLoc = "./assets/text/log.txt";

  for( let i = 0; i < strArr.length+1; i++ ) {
    //making sure this is in order
    if(i < strArr.length) {
      fs.appendFile(logLoc, strArr[i], function(error) {
        if(error){console.log(error);};
      });
    } else {
      fs.appendFile(logLoc, "\n\n" + breakEquals + "\n\n", function(error) {
        if(error){console.log(error);};
      });
    }
  }
  
  
}


//exports
exports.concert = concertFn;
exports.spotify = spotifyFn;
exports.movie = movieFn;
exports.whatItSays = whatItSaysFn;