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
 
const time = document.getElementById("time")
const score = document.getElementById("score")
const text = document.getElementById("text")
const word = document.getElementById("word")
const GameOver = document.getElementById("end-game-container")

let randomWord;
let scoreDisplay = 0
let timeDisplay = 10
let Gameover = false;

addwordtoDom()
function addwordtoDom(){
    randomWord = words[Math.floor(Math.random() * words.length)]
    word.innerHTML = randomWord
}
function GameOverScreen(){
GameOver.innerHTML
}

function updatescore(){
    scoreDisplay ++ 
    score.innerHTML = scoreDisplay 
}

text.addEventListener("input",(e) => {
    if (randomWord === e.target.value){
        addwordtoDom();
        updatescore();
        e.target.value = ""
        timeDisplay = timeDisplay + 5;
        GameOverScreen();
    } 
})


    var Timer = setInterval(() => { 
        if (timeDisplay === 0){
            clearInterval(timeInterval); 
            Gameover = true;
            console.log("Game Over");
        } else {
            timeDisplay --;
            time.innerHTML = timeDisplay;
        }
      }, 1000);
