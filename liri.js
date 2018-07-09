
//this is the only line needed to 'require'  the dotenv module
require("dotenv").config();

//requiring the following npm modules: Twitter, Spotify API OMDB API

var Twitter = require('twitter');

//Per the documentation the snippet below uses enviormental variables to store 
//the twitter keys 
//this approach is preferred when developers want to keep some information private 
var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });


var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
