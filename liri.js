//read and set any environment variables with the dotenv package
require("dotenv").config();  

//access your keys information for spotify and twitter
var keys = require("./keys");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
// var omdb = require('movie-this');
// var fs = require(`do-what-it-says`);
var request = require('request');
request('http://www.omdbapi.com/?apikey=[trilogy]&', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

var commandArgs = process.argv
var command = process.argv[2];
var searchValue = "";
var input = process.argv[3];

var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);


function OMDB(moviename){

var movieName = "mr."+"nobody";


var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy"


request(queryURL, function(error, response, data){

    //200 response means that the page was found and a response received
    if (!error && response.statusCode == 200){
            console.log(queryURL);
    }
    
console.log("-------------------------------------------------------");
console.log("Title of the movie: " + JSON.parse(data)["Title"] + "/r/n");
console.log("Year the movie came out: " + JSON.parse(data)["Year"] + "/r/n");
console.log("Here's the movie's rating: " + JSON.parse(data)["imdbRating"]+ "\r\n");
console.log("Here's the movie's Rotten Tomatoes Rating: " + JSON.parse(data)["tomatoRating"]+ "\r\n");
console.log("The movie was produced in: " + JSON.parse(data)["Country"]+ "\r\n");
console.log("The movie's language is: " + JSON.parse(data)["Language"]+ "\r\n");
console.log("Here's the movie's plot: " + JSON.parse(data)["Plot"]+ "\r\n");
console.log("The movie's actors are: " + JSON.parse(data)["Actors"]+ "\r\n");
});
}
    if (command === "my-tweets"){
        var params = {
            screen_name: "sherryxxxxyang",
            count: 20
        }

    client.get('statuses/user_timeline', params, function(respError, tweets, response){
   
    for (var i = 0; i < tweets.length; i++) {
    	console.log(tweets[i].text);
    }
 });

} else if (command === "spotify-this-song") {
	spotify.search({ type: 'track', query: input }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data.tracks.items[0].name); 

for (var i = 0; i < data.tracks.items.length; i++) {
    	console.log(data.tracks.items[i].name);
    }
});
} else if (command === "movie-this") {

	OMDB(input);

};



