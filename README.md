

# X-Files Trivia


## What is X-Files Trivia?

X-Files Trivia is a  [The X-Files](https://www.fox.com/the-x-files/) TV-show themed, [JavaScript](https://en.wikipedia.org/wiki/JavaScript) and [jQuery](https://jquery.com/) game application that runs on the browser. 

The game application has 10 timed questions only a true fan of the [The X-Files](https://www.fox.com/the-x-files/) would know. 

The object of the game is to answer 10 out of 10 questions right.

## How does X-Files Trivia work?

X-Files Trivia uses JavaScript for logic and [jQuery](https://jquery.com/) to manipulate the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).

The game uses Object Oriented Programming and has the majority of its code organized inside an object with several methods that power the game. 

The game methods are triggered by [jQuery](https://jquery.com/) `click` mouse events and by other methods used to get and/or set the HTML within the specified element. This way the game is able to dynamically update the HTML.

## What does X-Files Trivia do?

Upon page load the player is asked to click on a button to begin the quiz. During the quiz the player is presented with one multiple-choice question at time, and is given 10 seconds to answer the question. If the timer runs out the question is counted as incorrect.

After selecting an answer the player is told if they answered correctly or not. If the player answered incorrectly, they are shown the correct answer.

After each question is answered there is a 3-second delay while an [X-Files](https://www.fox.com/the-x-files/) themed [gif](https://github.com/Giphy) is shown on the DOM. The player also has time to ready themselves for the next question during this time.

After all ten questions have been answered the player is given their score with an option to re-take the quiz. 

The game will record and show the history of the player's scores at the end of each game unless the player refreshes the page.

The player also has an option to play the X-Files theme song while they take the quiz.

## Technologies Used

HTML

Vanilla CSS

JavaScript

[jQuery](https://jquery.com/)

## Credits

[Giphy](https://github.com/Giphy)

Reset CSS by [Meyerweb](http://meyerweb.com/eric/tools/css/reset/)


> Written with  [StackEdit](https://stackedit.io/)