var dotenv = require("dotenv").config();

var keys = require("./keys.js");
var request = require("request");
var Spotify = require("node-spotify-api");
var fs = require("fs");
var action = process.argv[2];
var input = process.argv[3];

switch(action) {
    case "concert-this":
    bands(input);
    break;

    case "spotify-this-song":
    spotify(input);
    break;

    case "movie-this":
    movie(input);
    break;

    case "do-what-it-says":
    random();
    break;

    default:
    console.log('This command does not exist');
    break;
};

//Function for concert-this input
function bands(input) {

	var queryUrl = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";

	request(queryUrl, function(err, response, body) {
		 
		console.log("Venue: " + JSON.parse(body)[0].venue.name);
		console.log("Location: " + JSON.parse(body)[0].venue.city);
		var date = JSON.parse(body)[0].datetime;
		// formattedDate = moment().format("MM/DD/YYYY");
		// console.log("Event Date: " + JSON.parse(body)[0].datetime.formattedDate);
});

}

//Function for spotify-this-song input
function spotify(input) {

var spotify = new Spotify(keys.spotify);
		if (!input) {
        	input = "The Sign";
    	}
		spotify.search({ type: 'track', query: input }, function(err, data) {
			if (err) {
	            console.log(err);
	            return;
	        }

	        var song = data.tracks.items;
	        console.log("Artist(s): " + song[0].artists[0].name);
	        console.log("Song Name: " + song[0].name);
	        console.log("Preview Link: " + song[0].preview_url);
	        console.log("Album: " + song[0].album.name);
    });
    
}

//Function for movie-this input
function movie(input) {

	if (!input) {
		input = 'Mr. Nobody';
	}

	var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";
		
	request(queryUrl, function(err, response, body) {

		    console.log("Title: " + JSON.parse(body).Title);
		    console.log("Release Year: " + JSON.parse(body).Year);
		    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
		    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
		    console.log("Country: " + JSON.parse(body).Country);
		    console.log("Language: " + JSON.parse(body).Language);
		    console.log("Plot: " + JSON.parse(body).Plot);
		    console.log("Actors: " + JSON.parse(body).Actors);
	});
}

//Function for do-what-it-says input
function random() {
    fs.readFile('random.txt', "utf8", function(err, data){
      var text = data.split(',');
  
      spotify(text[1]);
    });
  }

