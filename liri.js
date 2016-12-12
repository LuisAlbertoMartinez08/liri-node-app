var Twitter = require('twitter');var twitterKey = require('./keys.js');
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