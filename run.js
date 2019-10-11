//Maybe make a system to add date to log.txt?
const liri = require("./assets/javascript/liri.js");
const inquirer = require("inquirer");

inquirer
    .prompt([
        { //Command List
            type: "list",
            message: "What command do you want to run?",
            choices: [
                "Concert this!", 
                "Spotify this Song", 
                "Movie this!",
                "Do what it says!"
            ],
            name: "command"
        },
        { //Question 1
            type: "input",
            message: "What's the name of what you want to know about?",
            name: "name"
        }
    ]).then( function(response) {
        var cmd = response.choices;
        var name = response.name
            search = name.replace(/ /g, "+");

        console.log("Name: " + name);
        console.log("Search: " + search);

        switch(cmd) {
            case "Concert this!":
                liri.concert(search, name);
                break;
            
            case "spotify-this-song":
                liri.spotify(search, name)
                break;
                
            case "movie-this":
                liri.movie(search, name)
                break;
            
            case "do-what-it-says":
                liri.whatItSays();
                break;
            default:
                break;
        }
    })