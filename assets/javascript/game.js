// VARIABLES
// var for tracking wins
var wins = 0;

//array of possible player choices
var playerChoices =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
					'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
					'u', 'v', 'w', 'x', 'y','z'];

// array of possible words to guess
var word =['Hamilton', 'Chicago', 'The Book of Mormon', 'The Lion King', 'Wicked',
			'Kinky Boots', 'Cabaret', 'The Phantom of the Opera', 'Guys and Dolls',
			'Les Miserables', 'A Chorus Line', 'Hairspray', 'Avenue Q',
			'Jersey Boys', 'The King and I', 'Miss Saigon', 'Cats'];

var currentWord = word[Math.floor(Math.random() * word.length)];

var guessesRemaining

var lettersGuessed

// FUNCTIONS

// function getWord() {

// var currentWord = word[Math.floor(Math.random() * word.length)];

// }

//this word needs to be displayed as dashes according to the word length.


// document.onkeyup = function() {

//         var playerChoices = event.key;
//         var currentWord = word[Math.floor(Math.random() * playerChoices.length)];


// html
var html =	"<p>wins: " + wins + "</p>";
			"<p>current word: " + currentWord + "</p>"
			"<p>guesses remaining: " + guessesRemaining + "</p>"
			"<p>letters guessed: " + lettersGuessed + "</p>";

document.querySelector("#game").innerHTML = html;

// };
