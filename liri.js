
//this is the only line needed to 'require'  the dotenv module
require("dotenv").config();

//requiring the following npm modules: Twitter, Spotify API & Inquirer
//Note: To request info to OMDB API the Request will be used
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var inquirer = require("inquirer");


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
      console.log("Your " + inquirerResponse.SelectedCommand + " is ready for battle!");
      switch (inquirerResponse.SelectedCommand) {

        case 'my-tweets':
            console.log('this section contains the code for the twitter selection');
            //Per the Twitter module docs the snippet 
            //below uses enviormental variables to store  the twitter keys 
            //this approach is preferred when developers want to keep some information private 
            inquirer.prompt([ 
                { type: "input",
                message: "What is your twitter handle (without the '@')?",
                name: "username"
                 },
                 { type: "confirm",
                message: "Are you sure:",
                name: "confirm",
                default: true
             }]).then(function(result){
                console.log("the then part of the request works")

                console.log("here is the username entered: " + JSON.stringify(result.username))
                 
                var client = new Twitter({
                consumer_key: process.env.TWITTER_CONSUMER_KEY,
                consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
                access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
                access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
                })
               
                
                    // https://dev.twitter.com/rest/reference/get/statuses/user_timeline
                    client.get('statuses/user_timeline', { screen_name: result.username, count: 20 }, function(error, tweets) {
                      if (error != null) {
                        console.log("Error " + JSON.stringify(error, null, 2))
                      }
                      else {
                        
                        let singleTweet = "\nHere is the index 0 of the tweet object: \n" + JSON.stringify(tweets[0].text, null, 2)
                        console.log(singleTweet)
                        console.log("the length of the tweets: " + tweets.length)
                      }
                    });
                 
                // client.get('search/tweets', {q: 'cats'}, function(error, tweets, response) {
                // console.log(tweets);});
            })
            //now that the 'client'  has been declared into existence 
            //we can  use the template below to 'get' the desired tweets
            //template: client.get(path, params, callback);
            //the parameters do the following
            //path sets the path to 'search/tweets'
            //the {q: 'cats'} states that we are querying the term 'cats'
            //rgw last paramater become an anon functions that recieves the 
            //error msg, 15 tweets & reponse info
            //here i can customise the search query term to what evs i like
            //perhaps change this to a prompt asking what to search for?
           
             
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





