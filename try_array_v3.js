///SETTING UP TWITTER CAPABILITY///

var Twit = require('twit')
var T = new Twit({
    consumer_key:         'bMB6ddzxdmILSqqse5nQrugOj'
  , consumer_secret:      'NH0IJ5Fi1JcpZAQbbMR6k4tXUYzWH5CKxmdJkLoEVHq1jWx5MF'
  , access_token:         '2998545328-byMfYpWLtE8ziPHHlK287BFoE1aDsratLxyC791'
  , access_token_secret:  'VC8whj8etnuQgaIkAC8kJ4ngRpdne5j6CWnbQCKpfitR6'
});

var tweets = [];
var tweetIndex=  0;

///SETTING UP WORDNIK API///GET NEW API KEY///

var Wordnik = require('wordnik');
var wn = new Wordnik({
    api_key: '254a7bf663aa7d0cf100d0baf5906dfde36d98f2c32711530'
});
var fs = require('fs');

///WORDNIK GRABBING WORDS AND NUMBERS///

///NOUN///
function getRandomNoun(fn) {
    var randomNoun = wn.randomWord({useCanonical:"false", includePartOfSpeech:"noun", excludePartOfSpeech:"noun-plural", minCorpusCount:10000}, function(e, defs) {
		fn(defs.word);
    });
}
///VERB///
function getRandomVerb(fn) {
    var randomVerb = wn.randomWord({useCanonical:"false", includePartOfSpeech:"verb, imperative", excludePartOfSpeech:"verb-intransitive, verb-transitive, past-participle", minCorpusCount:10000}, function(e, defs) {
		fn(defs.word);
    });
}
///ADJECTIVE///
function getRandomAdjective(fn) {
    var randomAdjective = wn.randomWord({useCanonical:"false", includePartOfSpeech:"adjective", minCorpusCount:10000}, function(e, defs) {
		fn(defs.word);
    });
}
///SAME WORD///
function getWord(fn,word) {
    fn(word);
}
///NUMBER///
function getRandomNumber(fn) {
	var randomNumber = (Math.floor(Math.random() * 50) + 1); 
	fn(randomNumber);
}

getRandomNoun();

var myTweets = [
	"This guy put his " + randomNoun + " into a " + randomNoun + " and you wont believe what happened next",
	"<#> facts every " + randomNoun + " lover cant " + randomNoun + " without"
];

//function getTweet(err, tweet){
//	var tweet = myTweets[Math.floor(Math.random()*myTweets.length)];
//	console.log(tweet);
//}

//getTweet();

function sendTweet(err, data){
	//getTweet();
	getRandomNoun();
	var tweet = myTweets[Math.floor(Math.random()*myTweets.length)];


	T.post('statuses/update', { status: tweet}, function(err, data, response) {
		if(err)
			console.log("err: " + err);
		else
			console.log("Posted: " + tweet);

	});
}

sendTweet();
