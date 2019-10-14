//Maybe make a system to add date to log.txt?
const liri = require("./assets/javascript/liri.js");
const inquirer = require("inquirer");
const fs = require("fs");

//Old stuff I left in just in case
let defaultCmd = process.argv[2],
    defaultName = process.argv.slice(3).join(" ");

let isWhat = false;

//checking if someone entered a command.
!defaultCmd ? updated() : legacy(); 

function updated() {
    console.log("Running new default");

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
                whatItSays();
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

            //default
            default:
                break;
        }
    });
}

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

//Left default assignment stuff just in case my readme isn't actually read.
function legacy(defaultCmd, defaultName, isWhat) {
    //console.log("running legacy switch"); 

    switch(defaultCmd) {
        //Setting up legacy stuff
        //concert-this
        case "concert-this":
            legacySearch("concert", "The Chainsmokers", defaultName, isWhat);
            break;

        //spotify-this-song
        case "spotify-this-song":
            legacySearch("spotify", "Ace of Base The Sign", defaultName, isWhat);
            break;

        //movie-this
        case "movie-this":
            legacySearch("movie", "Mr. Nobody", defaultName, isWhat);
            break;

        //do-what-it-says
        case "do-what-it-says":
            whatItSays();
            break;

        //if legacy stuff is going
        default:
            console.log("Sorry, I don't know this command");
            break;
    }
}

//I don't need inquirerer for this
function legacySearch(fn, base, defaultName, isWhat) {
    //console.log("Running legacy search");
    let name = defaultName;
    let chk = name === ""; //if the search term string is empty
    //console.log(name);

    //passing this to liri.js
    //taking the function name (parameter 2) we gave it to run [fn]
    //and then checking to see if the search is an empty string (chk ? base: name)
    //if it's an empty string, pass it the default search term (parameter 3), otherwise, pass it the search term we were given
    //parameter 4 is just a bool to keep track of whether this was called by what-it-says
    liri[fn](chk ? base : name, isWhat);
}

function whatItSays(){
    //letting us know this function ran
    console.log("What does the random text say?");

    //Reading the random.txt file
    fs.readFile("./assets/text/random.txt", "utf8", function(error, data) {
        if (error) { return console.log(error); }

        //console.log(data);

        //create an array called resArr that takes the data, replaces all quotation marks within it, and splits it based on a comma
        let resArr = data.replace(/"/g, "").split(",");

        //run the legacy function with the command, search, and a bool to let us know this came from the what it says function
        legacy(resArr[0].trim(), resArr[1].trim(), true);
    })
}