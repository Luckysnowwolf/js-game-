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

addwordtoDom()
function addwordtoDom(){
    randomWord = words[Math.floor(Math.random() * words.length)]
    word.innerHTML = randomWord
}

function updatescore(){
    scoreDisplay ++ 
    score.innerHTML = scoreDisplay 
}
function GameOverScreen(){
    GameOver.style.display = "flex";
    GameOver.innerHTML = `<h1>Time ran out!</h1> <p>Your final score is ${scoreDisplay}</p> <button onClick="location.reload()">Reload</button>`
}

text.addEventListener("input",(e) => {
    if (randomWord === e.target.value){
        addwordtoDom();
        updatescore();
        e.target.value = ""
        timeDisplay = timeDisplay + 5;
    } 
})


    let Timer = setInterval(() => { 
        if (timeDisplay === 0){
            clearInterval(Timer);
            GameOverScreen();
            console.log("Game Over");
        } else {
            timeDisplay --;
            time.innerHTML = timeDisplay;
        }
      }, 1000);
