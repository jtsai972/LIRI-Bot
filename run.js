//Maybe make a system to add date to log.txt?
const liri = require("./assets/javascript/liri.js");

//switch commands
var cmd = process.argv[2].toLowerCase(),
    base = process.argv.slice(3);
    search = base.join("+"),
    name = base.join(" ");

var testStr = "Random & Random";

var rndChar = "~!@#$%^&*";
var strangeChar = "\\" + base.match(/([~!@#$%^&*])/g);
//var test = process.argv.slice(3).replace(strangeChar, "\\" + strangeChar);

console.log(strangeChar);

// switch(cmd) {
//   case "concert-this":
//     liri.concert(search, name);
//     break;

//   case "spotify-this-song":
//     liri.spotify(search)
//     break;
  
//   case "movie-this":
//     liri.movie(search)
//     break;

//   case "do-what-it-says":
//     liri.whatItSays();
//     break;

//   default:
//     console.log("Sorry, I don't think I know that command.");
// }