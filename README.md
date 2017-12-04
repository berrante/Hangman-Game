# Hangman-Game
## Description
 
A classic hangman-style game, for cat people.  
**=^..^=**


## Technologies Used
* HTML/CSS
* Javascript


## Gameplay
Game begins with the following default parameters:
* **Wins** : 0
* Randomly generated **Current Word**
* **Guesses Remaining**: 10
* **Letters Guessed**: blank
![landing](https://i.imgur.com/T42e62l.png)

As letters are guessed, the following occurs:
* They are added to the **Letter Guessed** list
* If the letter **IS** a correct guess,
   * It gets filled in on the **Current Word**. No guesses are deducted.
* If the letter is **NOT** a correct guess,
   * 1 guess is deducted.
![guessed](https://i.imgur.com/1g3DSWW.png)

If a player **wins**:
* **Wins** counter goes up by 1
* Game resets to defaults
![win](https://i.imgur.com/hb55NM3.png)

If a player **loses**:
* **Wins** counter remains the same
* Game resets to defaults
