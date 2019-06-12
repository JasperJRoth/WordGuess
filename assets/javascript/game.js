
function getRandomCountry(){
    return countries[Math.floor(Math.random()*countries.length)];
}

var country = getRandomCountry().name;
var guessList = [];

function updateGuessWord(){
    var word = "";
    var guessWord = new Array(country.length);

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
            word += "_ ";
        }else{
            word += `${guessWord[i].letter} `;
        }
    }

    $("#guessWord").text(word);
}

$(document).keypress(function(event){
    if(!guessList.includes(event.key.toLowerCase())){
        guessList.push(event.key.toLowerCase());
        updateGuessWord();
    }
});

$(document).ready(function(){
    updateGuessWord();

    console.log(country);
});