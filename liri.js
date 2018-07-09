
//this is the only line needed to 'require'  the dotenv module
require("dotenv").config();

//requiring the following npm modules: Twitter, Spotify API & Inquirer
//Note: To request info to OMDB API the Request will be used
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var inquirer = require("inquirer");




//Per the Twitter module docs the snippet 
//below uses enviormental variables to store  the twitter keys 
//this approach is preferred when developers want to keep some information private 
var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });

  //here i will create  prompt that asks which of the commands ou would like to run
  inquirer.prompt([
    // Here we give the user a list to choose from.
    {
      type: "list",
      message: "Hi, I'm LIRI! What command would you like to run?",
      choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"],
      name: "SelectedCommand"
    },
    // Here we ask the user to confirm.
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we then use a switch
    //statement to run the specified code
    if (inquirerResponse.confirm) {
      console.log("Your " + inquirerResponse.SelectedCommand + " is ready for battle!\n");
      switch (inquirerResponse.SelectedCommand) {

        case 'my-tweets':
            console.log('this section contains the code for the twitter selection');
            break;
        case 'spotify-this-song':
            console.log('this section contains the code for the spotify selection');
            break;
        case 'movie-this':
            console.log('this section contains the code for the omdb selection');
            break;
        case 'do-what-it-says' : 
            console.log('this section contains the code for the do what is says selection');
            break;
        default:
          console.log("Sorry I didn't get, please run this program again.");
             }
    }
    else {
      console.log("\nI see you've changed your mind!\n" + "\nNo worries, come back again when you have made a decision.\n");
    }
  });




//var spotify = new Spotify(keys.spotify);
//var client = new Twitter(keys.twitter);


 
// var spotify = new Spotify({
//   id: 
//   secret: 
// });
 
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data); 
// });



