window.addEventListener(`load`, init);
input.addeventlistener("input", function (e) {
    if (e.input === words) {
        console.log(this.value)
    }
});
let time = 5;
let score = 0;
let isplaying;




const currentword = document.getElementById(words)
const wordinput = document.getElementById(text)
const difficultylevel = document.getelementbyid(difficulty)
const difficultylevelez = document.getelementbyvalue(easy)
const difficultylevelmed = document.getelementbyvalue(medium)
const difficultylevelhard = document.getelementbyvalue(hard)
const timeDisplay = document.getelementbyid(time)
const scoreDisplay = document.getelementbyid(score)
const words = [
    "dependent",
    "dog",
    "superficial",
    "admit",
    "juice",
    "javascript",
    "developer",
    "airplane",
    "great",
    "fun",
    "manipulate",
    "cat",
    "transition",
    "school",
    "computer",
    "programming",
    "drag",
    "loving",
    "north",
];
// initilize game
function init() {
    // loads word form array
    showWord(words);
    //start match word input
    wordinput.input.addeventlistener("input", newgame);
    // call countdown every second
    setInterval(countdown, 1000)
    // check game status
    setInterval(checkstatus, 50);
}
// START MATCH
function newgame() {
    if (matchword) {
      isplaying = true;
      time = 6;
      showWord(words);
      wordinput.value = "";
      score++;
    } 
    // if score is -1 display 0
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    } else{
    scoreDisplay.innerHTML = score;
}
}
//match current word
function matchword() {
    if (wordinput.value === currentword.innerHTML) {
        message.innerHTML = "correct";
        return true;
    } else{
        message.innerHTML = "";
        return false;
    }

}
// pick and show random word
function showWord(words) {
    // generate random array index
    const randIndex = math.floor(math.random() * words.length);
    // output random word
    currentword.innerHtml = words[randIndex];
}
function countdown() {
    // make sure time has not run out 
    if (time > 0) {
        //decrement
        time--;
    } else if (time === 0) {
        // game is over
        isplaying = false;
    }
    // show time
    timeDisplay.innerHTML = time;
}

//Check game status
function checkstatus() {
    if (isplaying && time === 0) {
        message.innerHTML = "Game Over";
        score = -1;
    }
}