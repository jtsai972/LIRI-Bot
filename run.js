//Maybe make a system to add date to log.txt?
const liri = require("./assets/javascript/liri.js");

//switch commands
var cmd = process.argv[2].toLowerCase(),
    search = process.argv.slice(3).join("+");
    name = process.argv.slice(3).join(" ");

switch(cmd) {
  case "concert-this":
    liri.concert(search, name);
    break;

  case "spotify-this-song":
    liri.spotify(search)
    break;
  
  case "movie-this":
    liri.movie(search)
    break;

  case "do-what-it-says":
    liri.whatItSays();
    break;

  default:
    console.log("Sorry, I don't think I know that command.");
}