$(document).ready(function () {

  // Trivia questions objects array
  var triviaQuestions = [{
      id: 1,
      question: "Who created the X-Files?",
      possibleAnswers: ["Bryan Fuller", "J.J. Abrams", "Chris Carter", "Neil deGrasse Tyson"],
      rightAnswer: "Chris Carter",
      rightAnswerImage: '<iframe src="https://giphy.com/embed/l41lUZGnCzLErXevK" width="480" height="366" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-x-files-l41lUZGnCzLErXevK">via GIPHY</a></p>',
      wrongAnswerImage: '<iframe src="https://giphy.com/embed/3o85xszYjodRIMeJPy" width="480" height="363" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-x-files-3o85xszYjodRIMeJPy">via GIPHY</a></p>'
    },
    {
      id: 2,
      question: "What is the name of David Duchovny's character?",
      possibleAnswers: ["Cat Bolder", "Seeley Booth", "Agent Bert Macklin", "Fox Mulder"],
      rightAnswer: "Fox Mulder",
      rightAnswerImage: '<iframe src="https://giphy.com/embed/xT0BKzsRhhgeNy29yM" width="480" height="267" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-x-files-x-files-the-x-files-xT0BKzsRhhgeNy29yM">via GIPHY</a></p>',
      wrongAnswerImage: '<iframe src="https://giphy.com/embed/l0NwQm6rURw46Nccg" width="262" height="175" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-x-files-x-files-the-x-files-fox-tv-l0NwQm6rURw46Nccg">via GIPHY</a></p>'
    },
    {
      id: 3,
      question: "What do some pople call Fox Mulder behind his back?",
      possibleAnswers: ["Fatty Bolger", "Spooky Mulder", "Buffalo Bill", "Tall Tales Mulder"],
      rightAnswer: "Spooky Mulder",
      rightAnswerImage: '<iframe src="https://giphy.com/embed/26hlSREy00jSmIRWw" width="480" height="356" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/david-duchovny-xfiles-jamming-26hlSREy00jSmIRWw">via GIPHY</a></p>',
      wrongAnswerImage: '<iframe src="https://giphy.com/embed/2Yb1rvMnPJ9k67QXyF" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-x-files-foxtv-scully-2Yb1rvMnPJ9k67QXyF">via GIPHY</a></p>'
    },
    {
      id: 4,
      question: "What is the name of Gillian Anderson's character?",
      possibleAnswers: ["Diana Bones", "Temperence Geller", "Dana Scully", "Clarice Starling"],
      rightAnswer: "Dana Scully",
      rightAnswerImage: '<iframe src="https://giphy.com/embed/l0NwurhyqtwWLh6y4" width="315" height="175" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-x-files-x-files-the-x-files-fox-tv-l0NwurhyqtwWLh6y4">via GIPHY</a></p>',
      wrongAnswerImage: '<iframe src="https://giphy.com/embed/3ohhwrDbQrPihOOJk4" width="196" height="175" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/paleycenter-gillian-anderson-dana-scully-3ohhwrDbQrPihOOJk4">via GIPHY</a></p>'
    },
    {
      id: 5,
      question: "Which character claims to have assasinated Jonh F. Kennedy?",
      possibleAnswers: ["Bill Mulder", "The Smoking Man", "Alex Krycek", "Walter Skinner"],
      rightAnswer: "The Smoking Man",
      rightAnswerImage: '<iframe src="https://giphy.com/embed/xT0BKpr1lrYdvzkH9S" width="480" height="271" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-x-files-x-files-the-x-files-xT0BKpr1lrYdvzkH9S">via GIPHY</a></p>',
      wrongAnswerImage: '<iframe src="https://giphy.com/embed/l0Nwv0XodQMQguNUs" width="262" height="175" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-x-files-the-x-files-fox-tv-l0Nwv0XodQMQguNUs">via GIPHY</a></p>'
    },
    {
      id: 6,
      question: "What is one of the names of the Lone Gunman trio?",
      possibleAnswers: ["Ron Swanson", "Frohicke", "Tom Bombadill", "Seeley"],
      rightAnswer: "Frohicke",
      rightAnswerImage: '<iframe src="https://giphy.com/embed/l0NwqRhNXKhdGodGw" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-x-files-the-x-files-fox-tv-l0NwqRhNXKhdGodGw">via GIPHY</a></p>',
      wrongAnswerImage: '<iframe src="https://giphy.com/embed/26gN2hokB0p4GfcEU" width="311" height="175" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/foxtv-the-x-files-scully-26gN2hokB0p4GfcEU">via GIPHY</a></p>'
    },
    {
      id: 7,
      question: "Which famous actor appeared on the X-Files?",
      possibleAnswers: ["Shia LeBeouf", "Ryan Reynolds", "Jack Black", "All of Them"],
      rightAnswer: "All of Them",
      rightAnswerImage: '<iframe src="https://giphy.com/embed/xT0BKwUZfmqWJ8xY2Y" width="262" height="175" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-x-files-x-files-the-x-files-xT0BKwUZfmqWJ8xY2Y">via GIPHY</a></p>',
      wrongAnswerImage: '<iframe src="https://giphy.com/embed/3o85xGvmQJ1QYfPgmk" width="230" height="175" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-x-files-3o85xGvmQJ1QYfPgmk">via GIPHY</a></p>'
    },
    {
      id: 8,
      question: "Which univeristy did Fox Mulder graduate from before Quantico?",
      possibleAnswers: ["Harvard University", "Massachusetts Institute of Technology", "University of Oxford", "University of Cambridge"],
      rightAnswer: "University of Oxford",
      rightAnswerImage: '<iframe src="https://giphy.com/embed/26uf2uTigyaTBggdG" width="255" height="175" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/hulu-the-x-files-fox-television-classics-26uf2uTigyaTBggdG">via GIPHY</a></p>',
      wrongAnswerImage: '<iframe src="https://giphy.com/embed/3oEdvcPNJJCBxquJz2" width="231" height="175" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-x-files-3oEdvcPNJJCBxquJz2">via GIPHY</a></p>'
    },
    {
      id: 9,
      question: "What is missing from Mulder's apartment until season 6?",
      possibleAnswers: ["T.V.", "Bed", "Microwave", "Stove"],
      rightAnswer: "Bed",
      rightAnswerImage: '<iframe src="https://giphy.com/embed/l2SqfRIaRZrRsNJa8" width="480" height="330" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/hulu-the-x-files-fox-television-classics-l2SqfRIaRZrRsNJa8">via GIPHY</a></p>',
      wrongAnswerImage: '<iframe src="https://giphy.com/embed/xTiTnrdatCmIKiF37G" width="230" height="175" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-x-files-xTiTnrdatCmIKiF37G">via GIPHY</a></p>'
    },
    {
      id: 10,
      question: "Which episode happened?",
      possibleAnswers: ["Scully becomes immortal.", "Aliens take Mulder and Scully to Mars.", "Scully finds out that her dog is a spy robot."],
      rightAnswer: "Scully becomes immortal.",
      rightAnswerImage: '<iframe src="https://giphy.com/embed/l2SpVBS80rurCwtzi" width="255" height="175" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/hulu-the-x-files-fox-television-classics-l2SpVBS80rurCwtzi">via GIPHY</a></p>',
      wrongAnswerImage: '<iframe src="https://giphy.com/embed/l2JIaj14KNEWf5T8I" width="307" height="175" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-x-files-x-files-the-xfiles-l2JIaj14KNEWf5T8I">via GIPHY</a></p>'
    }
  ];

  // Global Variables
  var landingDiv = $(".startDiv");
  var quizDiv = $("#quiz");
  var intervalId;
  var threeSecondDelay;

  // Game Object
  var game = {

    // Reference the trivia questions objects array
    triviaQuestions: triviaQuestions,

    // Start current question and number of games played at 0
    currentQuestion: 0,
    numberGamesPlayed: 0,
    // Keep track of player's correct and incorrect answers
    correct: 0,
    incorrect: 0,

    // Keep track of game scores in an array
    gamesPlayedScores: [],

    // Method that loads questions
    loadQuestion: function () {
      quizDiv.css("color", "#fff");
      // If all trivia questions have been asked
      if (this.currentQuestion === 10) {
        clearInterval(intervalId);
        this.numberGamesPlayed++;
        this.gamesPlayedScores.push("Game " + this.numberGamesPlayed + ": " + this.correct + " out of 10<br>");
        quizDiv.html("<h2>Thanks for playing!</h2><br><h1>You got " + this.correct + " out of 10 right!</h1><hr>");
        quizDiv.append("<h1>" + game.gamesPlayedScores + "</h1>");
        quizDiv.append("<hr><button id='startBtn'>Retake Quiz</button>");
      } else {
        // Else start that 10 second timer
        this.tenSecondTimer();
        // Show player the current question
        quizDiv.html("<h2>" + triviaQuestions[this.currentQuestion].question + "</h2><hr>");
        // Loop through the current question's possible answers and append the answer to it
        for (var i = 0; i < triviaQuestions[this.currentQuestion].possibleAnswers.length; i++) {
          quizDiv.append("<button class='user-choice' data-name='" + triviaQuestions[this.currentQuestion].possibleAnswers[i] + "'>" + triviaQuestions[this.currentQuestion].possibleAnswers[i] + "</button>");
        }
        // Update question count
        quizDiv.append("<h1> Question " + triviaQuestions[this.currentQuestion].id + " of 10</h1>");
      }
    },

    // Method to give player only 10 seconds to answer each question
    tenSecondTimer: function () {
      clearInterval(intervalId);
      // Grab reference to rightAnswer since it will be unavailable from global in the nested function.
      var answer = triviaQuestions[this.currentQuestion].rightAnswer;

      // Start timer at 10
      var questionTimerStart = 10;
      // Show timer on the DOM
      $("#tenSecondTimer").html("<h2>" + questionTimerStart + "</h2>");

      intervalId = setInterval(function () {
        // Start decrementing timer
        questionTimerStart--;
        // Show timer on the DOM while time is running
        if (questionTimerStart > 0) {
          $("#tenSecondTimer").html("<h2>" + questionTimerStart + "</h2>");
          // If time runs out, count as incorrect
        } else if (questionTimerStart === 0) {
          this.incorrect--;
          quizDiv.css("color", "#ff0000e8");
          // Show right answer on the DOM with accompanying gif
          quizDiv.html("<h1>Time is Up!</h1><br><p>The correct answer was: " + answer + "</p>");
          quizDiv.append(triviaQuestions[game.currentQuestion].wrongAnswerImage);
          quizDiv.append("<div height='50px'></div>");
          // Reset time on the DOM
          $("#tenSecondTimer").html("<h2>" + 0 + "</h2>");

        }
        // Give player three seconds before the next question appears.
        else if (questionTimerStart === -3) {
          game.currentQuestion++;
          game.loadQuestion();
        } else {
          $("#tenSecondTimer").html("<h2>" + 0 + "</h2>");
        }
      }, 1000);
    },

    // Method that gets answer from player
    playerAnswer: function (e) {
      clearInterval(intervalId);
      // If target of click event's 'data-name' attribute value === the rightAnswer increment correct amount by 1
      if ($(e.target).attr('data-name') === triviaQuestions[this.currentQuestion].rightAnswer) {
        this.correct++;
        // Tell player they are correct
        quizDiv.html("<h1>Correct!</h1>");
        // Show right answer gif on the DOM
        quizDiv.append(triviaQuestions[this.currentQuestion].rightAnswerImage);
        quizDiv.append("<div height='50px'></div>");

        this.currentQuestion++;
      }
      // Else player is wrong, and increment incorrect amount by 1
      else {
        this.incorrect++;
        // Show player they were wrong on the DOM with accompanying gif
        quizDiv.html("<h1>Wrong Answer!</h1><br><p>The correct answer was: " + triviaQuestions[this.currentQuestion].rightAnswer + "</p>");
        quizDiv.css("color", "#ff0000e8");
        quizDiv.append(triviaQuestions[this.currentQuestion].wrongAnswerImage);
        quizDiv.append("<div height='50px'></div>");
        this.currentQuestion++;

      }
      // Wait three seconds after answer has been clicked before loading the next question.
      threeSecondDelay = setTimeout(function () {
        game.loadQuestion();
      }, 3000);

    },

    // Method that resets whole game
    resetGame: function () {
      this.currentQuestion = 0;
      this.correct = 0;
      this.incorrect = 0;
      this.loadQuestion();
    }

  };

  // Click event to start a game
  $(document).on('click', '#startBtn', function () {
    landingDiv.hide();
    quizDiv.show();
    game.resetGame();
  });

  // Click event for when a player chooses a trivia answer
  $(document).on('click', '.user-choice', function (e) {
    game.playerAnswer(e);
  });

  // Audio/Background music
  var audio = document.getElementById("xFilesThemeSongAudio");
  $(document).on('click', '#startBtn', function () {
    audio.play();
  });

  // Give players the option to play or pause the audio
  $('#playAudio').on('click', function () {
    audio.play();
  });
  $('#pauseAudio').on('click', function () {
    audio.pause();
  });

});