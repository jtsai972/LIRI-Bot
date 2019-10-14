<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo, twitter_handle, email
-->





<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">LIRI Bot</h3>

  <p align="center">
    Siri but not really
    <br />
    <a href="https://github.com/jtsai972/LIRI-Bot"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jtsai972/LIRI-Bot/issues">Report Bug</a>
    ·
    <a href="https://github.com/jtsai972/LIRI-Bot/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

LIRI is a Node.js app that lacks a front-end currently. It's an experiment in pulling from APIs using Node.js and hiding keys as well as a way to dip my toes into Node.js

LIRI is like iPhone's SIRI. 

However, while SIRI is a _**Speech**_ Interpretation and Recognition Interface, LIRI is a _**Language**_ Interpretation and Recognition Interface. 

LIRI will be a command line Node.js app that takes in parameters and gives you back data. 

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.


### Built With

 * [Node Package - Axios](https://www.npmjs.com/package/axios)
 * [Node Package - DotEnv](https://www.npmjs.com/package/dotenv)
 * [Node Package - Inquirer](https://www.npmjs.com/package/inquirer)
 * [Node Package - Moment](https://www.npmjs.com/package/moment)
 * [Node Package - API - Spotify API](https://www.npmjs.com/package/node-spotify-api)
 * [API - OMDB](http://www.omdbapi.com) 
 * [API - Bands In Town](http://www.artists.bandsintown.com/bandsintown-api)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You will need to create your own `.env` file with your own API keys in order to test this project. I won't be retrieving keys from firebase this time.

### Installation
 
1. Clone the repo
```sh
git clone https:://github.com/jtsai972/LIRI-Bot.git
```
2. Install NPM packages
```sh
npm install
```



<!-- USAGE EXAMPLES -->
## Usage

There are two ways to use it, in one way, you can type out the legacy commands to run different parts of the app, or you can simply run the file and answer prompts. The legacy command system and the updated inquirer system both do the same things, the only difference is in how it lets you input your commands.

Run this in the terminal using `node run.js` and LIRI will bring up an inquirer prompt.

If you want to use the legacy commands you can simply run `node run.js <legacy command> <search term>`

### Legacy Commands

App Command | Short Description
------------|-------------------
`concert-this`      | searches Bands in Town API for an artist's events
`spotify-this-song` | searches Spotify for info about a band or artist
`movie-this`        | Searches for info about the movie you entered
`do-what-it-says`   | runs the text in random.txt

#### concert-this

This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

  * Name of the venue
  * Venue location
  * Date of the Event (use moment to format this as "MM/DD/YYYY")
  
#### spotify-this-song

This will show the following information about the song in your terminal/bash window

  * Artist(s)
  * The song's name
  * A preview link of the song from Spotify
  * The album that the song is from
  
If no song is provided then your program will default to "The Sign" by Ace of Base.

#### movie-this

This will output the following information to your terminal/bash window:

  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.
  
If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

#### do-what-it-says

LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

  * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
  * Edit the text in random.txt to test out the feature for movie-this and concert-this.

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/jtsai972/LIRI-Bot/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- CONTACT -->
## Contact

Jasmine - [Email Me](jtsai972@gmail.com)

Project Link: [https://github.com/jtsai972/LIRI-Bot](https://github.com/jtsai972/LIRI-Bot)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jtsai972/LIRI-Bot.svg?style=flat-square
[contributors-url]: https://github.com/jtsai972/LIRI-Bot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jtsai972/LIRI-Bot.svg?style=flat-square
[forks-url]: https://github.com/jtsai972/LIRI-Bot/network/members
[stars-shield]: https://img.shields.io/github/stars/jtsai972/LIRI-Bot.svg?style=flat-square
[stars-url]: https://github.com/jtsai972/LIRI-Bot/stargazers
[issues-shield]: https://img.shields.io/github/issues/jtsai972/LIRI-Bot.svg?style=flat-square
[issues-url]: https://github.com/jtsai972/LIRI-Bot/issues