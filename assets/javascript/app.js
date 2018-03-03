$(document).ready(() => {

    var x = document.getElementById("myAudio");
    // Gives players the option to play or pause the audio
    $('#playAudio').on('click', () => {
        x.play();

    })

    $('#pauseAudio').on('click', () => {
        x.pause();

    })
    
    var $question = $('.question');
// Array of possible wrong answers. Three of these should be randomly selected and dumped randomly onto the choices div
    var wrongAnswers = [
        "Diana Bones",
        "Cat Bolder",
        "Vladimir Putin",
        "Fatty Bolger",
        "Temperence Bones",
        "Seeley Booth",
        "Ross Geller",
        "Chandler Bing",
        "Fuzzy Dunlop",
        "Stringer Bell",
        "Donald Trump",
        "Sam Gamgee",
        "Tom Bombadill",
        "Kathy Reichs",
        "Shawn Corey Carter",
        "Agent Reyes",
        "Hank Moody",
        "Dwight Shrute",
        "Oscar Martinez",
        "Sean Bean",
        "Ron Swanson",
        "Rev. Graham Hess",
        "Bill Clinton",
        "Agent Bert Macklin",
        "Agent Clarice Starling",
        "Steve Harrington",
        "Neil deGrasse Tyson",
        "Hannibal Lector",
        "Buffalo Bill",


    ]

    // A loop from the beginnng should have each question shown in the question div
    // The correspongding answer should be dumped into on of the four (along with three random wrongAnswers) divs in the choices div
    var questionObj = [{
            question: "Who created the X-Files?",
            answer: "Chris Carter"
        },
        {
            question: "What is the name of David Duchovny's character?",
            answer: "Fox Mulder"
        },
        {
            question: "What is the name of the actor who plays Dana Scully's character?",
            answer: "Gillian Anderson"
        },
        {
            question: "What do some pople call Fox Mulder behind his back?",
            answer: "Spooky Mulder"
        },
        {
            question: "Who does the Smoking Man claims to have assasinated?",
            answer: "JFK"
        },
        {
            question: "What is one of the names of the Lone Gunman trio?",
            answer: "Frohicke"
        },
        {
            question: "Which famous actor got their big break on X-Files?",
            answer: "Shia LeBeouf"
        },
        {
            question: "The character of Dana Scully was inspired by which character from Silence of the Lambs?",
            answer: "Clarice Starling"
        },
        {
            question: "Who was once married to Tea Leoni?",
            answer: "David Duchovny"
        },
        {
            question: "Which actor replaced Fox Mulder as male lead during the show's last seasons?",
            answer: "Robert Patrick"
        },

    ];

    var $start = $('.start');
    var $quiz = $('.quiz');
    var $congratsBox = $('.congrats').hide();
    var $sorryBox = $('.sorry').hide();
    var $timesUpBox = $('.timesUp').hide();
    var $timer = $('.timer');
    var $kids = $('.parent').children().removeClass('.questions', '.choices', '.answer');

    var $parent = $('#parent');

    var $randomize = $('.choices');
    var $answer = $('.answer');

    
    function randomValue(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    
    
    // Not able to call function result

    function result() {
        var newQuestion = $question;
        var wrong = randomValue(wrongAnswers);

        function questionObj(question, answer) {

            for (var i = 0; i < questionObj.length; i++) {
                if (timer === 0) {
                    $timesUpBox.show();
                    this.answer.show();
                    threeSecCounter();
                    $timesUpBox.hide();
                } else if (this.answer != questionObj.answer) {
                    $sorryBox.show();
                    this.answer.show();
                    threeSecCounter();
                    $sorryBox.hide();
                } else {
                    $congratsBox.show();
                    threeSecCounter();
                    $congratsBox.hide();

                }

                result();
            }
        }
    }

// Timers 
    function tenSeconds() {
        for (i = 10000; i < 10001; i++) {
            if (i === 0) {
                $timesUpBox.show();
            } else {
                $('#timer').append("<p>You have 10 seconds!</p>")
            }
        }

    }

    function threeSecCounter() {
        for (i = 3000; i < 3001; i++) {
            if (i === 0) {
                result();
            }
        }
    }





});


