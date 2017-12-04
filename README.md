# Hangman-Game
## Description
 
A classic hangman-style game, for cat people.  
**=^..^=**


## Technologies Used
* HTML/CSS
* Javascript


## Gameplay
Game begins with the following default parameters:
* Wins : 0
* Randomly generated "Current Word" that must be guessed
* Guesses Remaining: 10
* Letters Guessed: blank
![image](https://i.imgur.com/T42e62l.png)

As letters are guessed, the following occurs:
* They are added to the "Letter Guessed" list
* If the letter IS a correct guess,
   * It gets filled in on the Current Word. No guesses are deducted.
* If the letter is NOT a correct guess,
   * 1 guess is deducted.
