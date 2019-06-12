
function getRandomCountry(){
    return countries[Math.floor(Math.random()*countries.length)];
}

var country = getRandomCountry().name;
console.log(country);

var guessList = [];
var guessesRemaining = 14;

function updateGuessWord(){
    var word = "";
    var guessWord = new Array(country.length);
    var isGameWon = true;

    for(var i = 0; i < guessWord.length; i++){
        guessWord[i] = {
            letter: country[i],
            visisble: false
        };
        
        guessList.forEach(function(guessedLetter){
            if(guessWord[i].letter.toLowerCase() === guessedLetter.toLowerCase()){
                guessWord[i].visisble = true;
            }
        });
    }

    for(var i = 0; i < guessWord.length; i++){
        if(guessWord[i].letter === " "){
            word += "- ";
        }else if(!guessWord[i].visisble){
            isGameWon = false;
            word += "_ ";
        }else{
            word += `${guessWord[i].letter} `;
        }
    }

    $("#guessesRemaining").text(`You have ${guessesRemaining} guesses remaining!`);

    $("#guessWord").text(word);

    if(isGameWon){
        alert("YOU WIN!");
        
        country = getRandomCountry().name;
        console.log(country);
        guessesRemaining = 14;
        guessList = [];
        updateGuessWord();
    }
}

$(document).keypress(function(event){
    if(!guessList.includes(event.key.toLowerCase())){
        guessList.push(event.key.toLowerCase());
        guessesRemaining -= 1;
        if(guessesRemaining <= 0){
            alert("NO MORE GUESSES, GAME OVER!");
            
            country = getRandomCountry().name;
            console.log(country);
            guessesRemaining = 14;
            guessList = [];
        }
        updateGuessWord();
    }
});

$(document).ready(function(){
    updateGuessWord();
});