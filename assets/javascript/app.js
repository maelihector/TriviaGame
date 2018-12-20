// Trivia questions set
var triviaQuestions = [{
        id: 1,
        question: "Who created the X-Files?",
        possibleAnswers: ["Bryan Fuller", "J.J. Abrams", "Chris Carter", "Neil deGrasse Tyson"],
        rightAnswer: "Chris Carter",
        rightAnswerImage: '<iframe src="https://giphy.com/embed/RJKSRBczXJQ3e" width="480" height="354" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/chris-carter-david-duchovny-the-x-files-RJKSRBczXJQ3e">via GIPHY</a></p>',
        wrongAnswerImage: '<iframe src="https://giphy.com/embed/46f0tmfnYe0fK" width="392" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-x-files-gillian-anderson-46f0tmfnYe0fK">via GIPHY</a></p>'
    },
    {
        id: 2,
        question: "What is the name of David Duchovny's character?",
        possibleAnswers: ["Cat Bolder", "Seeley Booth", "Agent Bert Macklin", "Fox Mulder"],
        rightAnswer: "Fox Mulder",
        rightAnswerImage: '<iframe src="https://giphy.com/embed/4ABqHGQIMZay4" width="309" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-x-files-mulder-scully-msr-4ABqHGQIMZay4">via GIPHY</a></p>',
        wrongAnswerImage: '<iframe src="https://giphy.com/embed/l0NwQm6rURw46Nccg" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-x-files-x-files-the-x-files-fox-tv-l0NwQm6rURw46Nccg">via GIPHY</a></p>'
    },
    {
        id: 3,
        question: "What do some pople call Fox Mulder behind his back?",
        possibleAnswers: ["Fatty Bolger", "Spooky Mulder", "Buffalo Bill", "Tall Tales Mulder"],
        rightAnswer: "Spooky Mulder",
        rightAnswerImage: '<iframe src="https://giphy.com/embed/XUHaEglC894hq" width="480" height="332" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/xfiles-scully-mulder-XUHaEglC894hq">via GIPHY</a></p>',
        wrongAnswerImage: '<iframe src="https://giphy.com/embed/EkZZ421XIrRe0" width="353" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-x-files-my-babies-EkZZ421XIrRe0">via GIPHY</a></p>'
    },
    {
        id: 4,
        question: "What is the name of Gillian Anderson's character?",
        possibleAnswers: ["Diana Bones", "Temperence Geller", "Dana Scully", "Clarice Starling"],
        rightAnswer: "Dana Scully",
        rightAnswerImage: '<iframe src="https://giphy.com/embed/l0NwurhyqtwWLh6y4" width="480" height="267" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-x-files-x-files-the-x-files-fox-tv-l0NwurhyqtwWLh6y4">via GIPHY</a></p>',
        wrongAnswerImage: '<iframe src="https://giphy.com/embed/PmO1A8IcPP4EE" width="480" height="294" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/david-duchovny-mulder-PmO1A8IcPP4EE">via GIPHY</a></p>'
    },
    {
        id: 5,
        question: "Which character claims to have assasinated Jonh F. Kennedy?",
        possibleAnswers: ["Bill Mulder", "The Smoking Man", "Alex Krycek", "Walter Skinner"],
        rightAnswer: "The Smoking Man",
        rightAnswerImage: '<iframe src="https://giphy.com/embed/fbmAyiNeACwAU" width="480" height="353" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/x-files-xfiles-gifs-fbmAyiNeACwAU">via GIPHY</a></p>',
        wrongAnswerImage: '<iframe src="https://giphy.com/embed/l0Nwv0XodQMQguNUs" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-x-files-the-x-files-fox-tv-l0Nwv0XodQMQguNUs">via GIPHY</a></p>'
    },
    {
        id: 6,
        question: "What is one of the names of the Lone Gunman trio?",
        possibleAnswers: ["Ron Swanson", "Frohicke", "Tom Bombadill", "Seeley"],
        rightAnswer: "Frohicke",
        rightAnswerImage: '<iframe src="https://giphy.com/embed/IR2llpxPTsGqs" width="480" height="357" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/x-files-x-files-gifs-IR2llpxPTsGqs">via GIPHY</a></p>',
        wrongAnswerImage: '<iframe src="https://giphy.com/embed/26gN2hokB0p4GfcEU" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/foxtv-the-x-files-scully-26gN2hokB0p4GfcEU">via GIPHY</a></p>'
    },
    {
        id: 7,
        question: "Which famous actor appeared on the X-Files?",
        possibleAnswers: ["Shia LeBeouf", "Ryan Reynolds", "Jack Black", "All of Them"],
        rightAnswer: "All of Them",
        rightAnswerImage: '<iframe src="https://giphy.com/embed/xT0BKwUZfmqWJ8xY2Y" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-x-files-x-files-the-x-files-xT0BKwUZfmqWJ8xY2Y">via GIPHY</a></p>',
        wrongAnswerImage: '<iframe src="https://giphy.com/embed/3o85xGvmQJ1QYfPgmk" width="480" height="365" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-x-files-3o85xGvmQJ1QYfPgmk">via GIPHY</a></p>'
    },
    {
        id: 8,
        question: "Which univeristy did Fox Mulder graduate from before Quantico?",
        possibleAnswers: ["Harvard University", "Massachusetts Institute of Technology", "University of Oxford", "University of Cambridge"],
        rightAnswer: "University of Oxford",
        rightAnswerImage: '<iframe src="https://giphy.com/embed/26uf2uTigyaTBggdG" width="480" height="330" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/hulu-the-x-files-fox-television-classics-26uf2uTigyaTBggdG">via GIPHY</a></p>',
        wrongAnswerImage: '<iframe src="https://giphy.com/embed/3oEdvcPNJJCBxquJz2" width="480" height="363" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-x-files-3oEdvcPNJJCBxquJz2">via GIPHY</a></p>'
    },
    {
        id: 9,
        question: "What is missing from Mulder's apartment until season 6?",
        possibleAnswers: ["T.V.", "Bed", "Microwave", "Stove"],
        rightAnswer: "Bed",
        rightAnswerImage: '<iframe src="https://giphy.com/embed/dTOZledlBkPg4" width="480" height="258" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/x-files-the-fox-mulder-dTOZledlBkPg4">via GIPHY</a></p>',
        wrongAnswerImage: '<iframe src="https://giphy.com/embed/xTiTnrdatCmIKiF37G" width="480" height="365" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-x-files-xTiTnrdatCmIKiF37G">via GIPHY</a></p>'
    },
    {
        id: 10,
        question: "Which episode happened?",
        possibleAnswers: ["Scully becomes immortal.", "Aliens take Mulder and Scully to Mars.", "Scully finds out that her dog is a spy robot."],
        rightAnswer: "Scully becomes immortal.",
        rightAnswerImage: '<iframe src="https://giphy.com/embed/l2JIaj14KNEWf5T8I" width="480" height="274" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-x-files-x-files-the-xfiles-l2JIaj14KNEWf5T8I">via GIPHY</a></p>',
        wrongAnswerImage: '<iframe src="https://giphy.com/embed/41813ZE5pOHPq" width="480" height="272" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/chris-carter-triangle-50-ufos-41813ZE5pOHPq">via GIPHY</a></p>'
    }
];


// Create Global Variables
var landingDiv = $(".startDiv");
var quizDiv = $("#quiz");
// Variables for our timers
var intervalId;
var threeSecondDelay;


// Create Game Object
var game = {
    // Reference the triviaQuestions objects array.
    triviaQuestions: triviaQuestions,

    // Start currentQuestion at 0.
    currentQuestion: 0,

    // Keep track of game scores in an array.
    gamesPlayedScores: [],
    numberGamesPlayed: 0,

    loadQuestion: function () {
        if (this.currentQuestion === 10) {
            clearInterval(intervalId);
            this.numberGamesPlayed++;
            this.gamesPlayedScores.push("Game " + this.numberGamesPlayed + ": " + this.correct + " out of 10<br>");
            quizDiv.html("<h2>Thanks for playing!</h2><br><h1>You got " + this.correct + " out of 10 right!</h1><hr>");
            quizDiv.append("<h1>" + game.gamesPlayedScores + "</h1>");
            quizDiv.append("<hr><button id='startBtn'>Retake Quiz</button>");
        } else {
            this.tenSecondTimer();
            // Show player the 'currentQuestion' 'question',
            quizDiv.html("<h2>" + triviaQuestions[this.currentQuestion].question + "</h2><hr>");
            // loop through the 'currentQuestion' 'possibleAnswers' array,
            for (var i = 0; i < triviaQuestions[this.currentQuestion].possibleAnswers.length; i++) {
                // and append each as a button with class='user-choice' and attribute of 'date-name='triviaQuestions[this.currentQuestion].possibleAnswers[i]'.
                quizDiv.append("<button class='user-choice' data-name='" + triviaQuestions[this.currentQuestion].possibleAnswers[i] + "'>" + triviaQuestions[this.currentQuestion].possibleAnswers[i] + "</button>");
            }
            quizDiv.append("<h1> Question " + triviaQuestions[this.currentQuestion].id + " of 10</h1>")
        }
    },

    // Create function to give player only 10 seconds to answer each question.
    tenSecondTimer: function () {
        clearInterval(intervalId);
        // Grab referenct to rightAnswer since it will be unavailable from global in the nested function.
        var answer = triviaQuestions[this.currentQuestion].rightAnswer;

        // Start timer at 10
        var questionTimerStart = 10;
        $("#tenSecondTimer").html("<h2>" + questionTimerStart + "</h2>");

        intervalId = setInterval(() => {
            // Start decrementing timer.
            questionTimerStart--;
            // Show player the timer.
            if (questionTimerStart > 0) {
                $("#tenSecondTimer").html("<h2>" + questionTimerStart + "</h2>");
            } else if (questionTimerStart === 0) {
                // count answer as incorrect,   
                this.incorrect--;
                // and show the right answer.
                quizDiv.html("<h1>Time is Up!</h1><br><p>The correct answer was: " + answer + "</p>");
                quizDiv.append(triviaQuestions[this.currentQuestion].wrongAnswerImage);
                quizDiv.append("<div height='50px'></div>");
                $("#tenSecondTimer").html("<h2>" + 0 + "</h2>");

            }
            // Give player three seconds before the next question appears.
            else if (questionTimerStart === -3) {
                this.currentQuestion++;
                this.loadQuestion();
            } else {
                $("#tenSecondTimer").html("<h2>" + 0 + "</h2>");
            }
        }, 1000);
    },


    // Keep track of player's correct and incorrect answers. 
    correct: 0,
    incorrect: 0,
    playerAnswer: function (e) {
        clearInterval(intervalId);
        // If target of click event's 'data-name' attribute value === the rightAnswer,
        if ($(e.target).attr('data-name') === triviaQuestions[this.currentQuestion].rightAnswer) {
            // increment correct amount by 1,
            this.correct++;
            // tell player they are correct,
            quizDiv.html("<p>Correct!</p>");
            // show player the rightAnswerImage/Gif.
            quizDiv.append(triviaQuestions[this.currentQuestion].rightAnswerImage);
            quizDiv.append("<div height='50px'></div>");

            this.currentQuestion++;
        }
        // Else player is wrong,
        else {
            // increment incorrect amount by 1,
            this.incorrect++;
            // tell player thay got it wrong and show them the right answer,
            quizDiv.html("<h1>Wrong Answer!</h1><br><p>The correct answer was: " + triviaQuestions[this.currentQuestion].rightAnswer + "</p>");
            // show player the wrongAnswerImage/Gif.
            quizDiv.append(triviaQuestions[this.currentQuestion].wrongAnswerImage);
            quizDiv.append("<div height='50px'></div>");
            this.currentQuestion++;

        }
        // Wait 4 seconds after answer has been clicked before loading the next question.
        threeSecondDelay = setTimeout(function () {
            game.loadQuestion();
        }, 3000);

    },

    resetGame: function () {
        this.currentQuestion = 0;
        this.correct = 0;
        this.incorrect = 0;

        this.loadQuestion();
    }
}

$(document).on('click', '#startBtn', () => {
    landingDiv.hide();
    quizDiv.show();
    game.resetGame();
});


// Reference each '.user-chice' element click event and call 'game.playerAnswer' function.
$(document).on('click', '.user-choice', (e) => {
    game.playerAnswer(e);
});

// Audio/Background music
var audio = document.getElementById("xFilesThemeSongAudio");
$(document).on('click', '#startBtn', () => {
    audio.play();
});

// Gives players the option to play or pause the audio
$('#playAudio').on('click', () => {
    audio.play();
});
// or pause the audio
$('#pauseAudio').on('click', () => {
    audio.pause();
});



// PseudoCode for Timed Quiz using jQuery
// Welcome Screen with instructions and start button.
// Show one question at a time, with 10 secs to answer
// If correct, show congratulations div in form of gif or similar
// If player runs out of time, tell them they have run out of time and display the correct answer.
// If player choses incorrect answer, tell them they are wrong and display correct answer
// After a 3 seconds, display the next question.
// On the final screen show number of correct answers and number of wrong answers