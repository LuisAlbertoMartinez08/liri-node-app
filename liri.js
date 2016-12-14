
var spotify = require('spotify')
var input1 = process.argv[2];
var input2 = process.argv[3];



//--------tweeter

if (input1 == 'my-tweets') {
var Twitter = require('twitter');
var twitterKey = require('./keys.js');
var client = new Twitter({
  consumer_key: twitterKey.twitterKeys.consumer_key,
  consumer_secret: twitterKey.twitterKeys.consumer_secret,
  access_token_key: twitterKey.twitterKeys.access_token_key,
  access_token_secret: twitterKey.twitterKeys.access_token_secret
});
 
var params = {screen_name:'one2code',count:20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
  	for (var i = 0; i < tweets.length; i++) {
  		console.log(tweets[i].text);
  	}
    
  }

});
};


//----------spotify

if(input1 == 'my-song'){
    spotifyThis(input2);
}

function spotifyThis(input2){
spotify.search({ type: 'track', query: input2 }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
   console.log(data.tracks.items[0].name);
});
}
