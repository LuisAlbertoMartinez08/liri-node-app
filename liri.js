var Twitter = require('twitter');var twitterKey = require('./keys.js');

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'dhUdsSrmTCsTcREiVLobwcciC',
  consumer_secret: 'SOgYzOhuWVDgojoTSpTYBzMcpgMN7T7xq2XydDzR7wKzTudsLC',
  access_token_key: '808005943602675712-mdAsjQ6vDP50GpoAt9oVZfIhMsw77P0',
  access_token_secret: 't5e9WTrbaqDRByQZ6mHkMw7EksImRRSaAC4URmR7bekkQ'
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});