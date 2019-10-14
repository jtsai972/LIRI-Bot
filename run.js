//Maybe make a system to add date to log.txt?
const liri = require("./assets/javascript/liri.js");
const inquirer = require("inquirer");

//Old stuff I left in just in case
let defaultCmd = process.argv[2],
    defaultName = process.argv.slice(2).join("+");


//Setting up choices
let choiceConcert = "Concert this!",
    choiceSpotify = "Spotify this Song",
    choiceMovie = "Movie this!",
    choiceDoWhat = "Do what it says!";

//Using the inquirer library to prompt user about what command to run
inquirer.prompt([
    { 
        type: "list",
        message: "What command do you want to run?",
        choices: [
            choiceConcert, 
            choiceSpotify, 
            choiceMovie,
            choiceDoWhat
        ],
        name: "command"
    }
]).then( function(response) {
    //Getting the command they sent 
    //console.log(response);
    var cmd = response.command;
    console.log(cmd);

    //Using a switch statement to see what they chose
    switch(cmd) {
        //running the what it says command
        case choiceDoWhat: 
            liri.whatItSays(); 
            break;

        //passing the searching function the topic, function name, and default search query for concerts
        case choiceConcert:
            searching("artist", "concert", "The Chainsmokers");
            break;
        
        //passing the searching function the topic, function name, and default search query for songs
        case choiceSpotify:
            searching("song", "spotify", "Ace of Base The Sign");
            break;
            
        //passing the searching function the topic, function name, and default search query for movies
        case choiceMovie:
            searching("movie", "movie", "Mr. Nobody");
            break;

        default:
            break;
    }
});

//Setting up the searches
function searching(topic, fn, base) {
    //Asking them what they want to search about
    inquirer.prompt([
        {
            type: "input",
            message: `What's the name of the ${topic} you want to know about?`,
            name: "name"
        }
    ]).then( function(response) {
        var name = response.name;//getting the search term
        let chk = name === ""; //if the search term string is empty
        console.log(name);

        //passing this to liri.js
        //taking the function name (parameter 2) we gave it to run [fn]
        //and then checking to see if the search is an empty string (chk ? base: name)
        //if it's an empty string, pass it the default search term (parameter 3), otherwise, pass it the search term we were given
        liri[fn](chk ? base : name);
        //Tl;dr, passing the info we got to liri[functionName]
        
    })
}