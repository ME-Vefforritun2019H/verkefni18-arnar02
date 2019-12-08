let htmlhiddenword = document.getElementById("hidden");
let htmlmessage = document.getElementById("message");
let htmlletterinput = document.getElementById("letter");
let htmlwrongletters = document.getElementById("wrongletters");



let displayhiddenword ="";
let displaywrongletters = "";


let words = "";


let randomNumber = 0;
let randomWord = 0;


let hiddenWord = [];
let testedLetters = [];
let wrongLetters = [];


htmlletterinput.addEventListener("keyup", checkLetter, false);


if (randomWord === 0){
    words = ["siggi", "finnur", "gaman", "saman", "keila", "forritun"];

    randomNumber = math.floor(math.random() * word.length);

    randomWord = word [randomNumber];

    for (let i = 0; i < randomWord.length; i++){
        hiddenWord.push("_");
        if (i === randomWord.length-1){
            displayhiddenword = hiddenWord.toString();
            htmlhiddenword.textContent = displayhiddenword;
            console.log(hiddenWord);
            console.log(randomWord);

        }
    }
}
