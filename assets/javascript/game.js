// VARIABLES
var wins = 0;
var currentWord;
var guessesRemaining = 10;
var lettersGuessed = [];
var lettersMatched = [];
var letters;
var correctGuesses = 0;

// array of possible words to guess
var word = ['hamilton', 'chicago', 'wicked', 'cabaret', 'hairspray', 'cats', 'annie', 'rent'];

// array of allowed keys 
var charAllowed = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Start new game by getting new word
getWord();
// Update the HTML
updateHTML();

// FUNCTIONS

// Create the word and split up letters into an array
function getWord() {
	// Randomly select word from array of words
	currentWord = word[Math.floor(Math.random() * word.length)];
	// Split word into letters into an array
	letters = currentWord.split('');
}

// Update HTML
function updateHTML() {
	// Build html string
	var html =	"<p>wins: " + wins +
				"</p><p>current word: " +
				"<br><br>";
	
	// Loop through letters array and see if letters have been guessed
	for (var i = 0; i < letters.length; i++){
		// if letter isn't undefined, it's a match
		if (lettersMatched[i] !== undefined){
			// add match to html string and add space after letter
			html += lettersMatched[i] + " ";	
		} else {
			// if it's not a match, add the dash instead
			html += "- ";
		}		
	}
	
	// Close paragraph tag
	html += "</p>";
	// Continue building html string, add remaining guesses
	html += "<p>guesses remaining: " + guessesRemaining + "</p><p>letters guessed: ";
	// loop through letters guessed array
	for (i = 0; i < lettersGuessed.length; i++){
		if (i > 0){
			// list out letters guessed, separated by a comma
			html += ", " + lettersGuessed[i];
		} else {
			// list out letters guessed, separated by a space
			html += lettersGuessed[i];
		}
	}
	// close paragraph tag
	html += "</p>";

	// find game div and update the innerHTML
	document.querySelector("#game").innerHTML = html;
}

// Game Complete, reset vars
function resetGame() {
	// refresh number of guesses
	guessesRemaining = 10;
	// clear letters guessed array
	lettersGuessed = [];
	// clear letters matched array
	lettersMatched = [];
	// reset correct guesses
	correctGuesses = 0;
	// Start game over by guessing another word
	getWord();
}

// Handle Loss
function youLose() {
	// Build html
	var html =	"<p>wins: " + wins + "</p>";
	html += "<p>current word: " + currentWord + "</p>";
	html += "<p>guesses remaining: " + guessesRemaining + "</p>";
	html += "<p>letters guessed: " + lettersGuessed + "</p>";

	document.querySelector("#game").innerHTML = html;
}

// Listen for key up event
document.onkeyup = function(event) {
	// Establish what the users keystroke was
	var userGuess = event.key;
	// Set var for allowed key match
	var allowed = 0;
	// loop through all allowed characters
	for (var i = 0; i < charAllowed.length; i++){
		// look for match against users key
		if (userGuess === charAllowed[i]) {
			// track match 
			allowed++;
		}
	}
	
	// Cheeck to see if user has remaining guessing and that the key pressed was allowed
	if (guessesRemaining > 0 && allowed > 0){
		// set var to track if letters has already been guessed
		var guessed = 0;
		// loop through guessed letters
		for (var i = 0; i < lettersGuessed.length; i++){
			// check for match
			if (userGuess === lettersGuessed[i]) {
				// track match
				guessed++;
			}
		}
	
		// proceed if no match and letter has not been guessed yet
		if (guessed === 0){
			// letter has not been guessed before so add letter to array of guessed letters
			lettersGuessed.push(userGuess);
			// set var to track letter match
			var matches = 0;
					
			// loop through array of letters in current word
			for (i = 0; i < letters.length; i++){
				// check for a match between users guess and letters in current word
				if (userGuess === letters[i]) {
					// if its a match update the matched letters array to the specific index of the matched letter
					lettersMatched[i] = letters[i];
					// track the match
					matches++;
					// update number of correct guess to track if user has guessed all letters and possibly won
					correctGuesses++;
				}
			}
			
			console.log(lettersMatched)
			
			// check if the number of correct guesses equals the number of letters in current word
			if (correctGuesses === letters.length){
				// increment the number of wins
				wins++;
				// reset the game vars
				resetGame();
			}
			
			// check if it was a bad guess and no matches
			if (matches === 0){
				// take away a guess
				guessesRemaining--;
			}
			
			// check if there are any guess left
			if (guessesRemaining === 0 ){
				// if no guesses left trigger end of game
				youLose();
			} else {
				// otherwise, update the HTML
				updateHTML();
			}
		}
	}
}



