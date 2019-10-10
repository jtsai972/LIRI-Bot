//Packages
const axios = require("axios");

require("dotenv").config();

//keys
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify); //example from assignment

//formatting variables
var n = "\n\n"; //(2 lines)
var t = "\t"; //a tab

//switch commands
var cmd = process.argv[2],
    search = process.argv[3];

switch(cmd.toLowerCase) {
  case "concert-this":
    concert();
    break;

  case "spotify-this-song":
    spotify();
    break;
  
  case "movie-this":
    movie();
    break;

  case "do-what-it-says":
    whatItSays();
    break;

  default:
    console.log("Sorry, I don't think I know that command.");
}

function concert(){
  console.log("Searching for concerts!");
}

function spotify(){
  console.log("Retrieving song details!");
}

function movie(){
  console.log("Grabbing movie information");
}

function whatItSays(){
  console.log("What does the random text say?");
}

function log(){
  console.log("Logging commands and results!")
}

function err(str){
  console.log(`Oops, there's a problem with the ${str} functionality!`)
  switch(str) {
    case "api":
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
      break;

    case "concert":
      console.log("Oops, there's a problem with the concert functionality!")
      break;

    case "spotify":
      break;

    case "movie":
      break;

    case "whatItSays":
      break;

    case "log":
      break;
  }


}