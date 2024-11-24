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

let randomWord;
let scoreDisplay = 0
let timeDisplay = 10
let GameOver = false;

addwordtoDom()
function addwordtoDom(){
    randomWord = words[Math.floor(Math.random() * words.length)]
    word.innerHTML = randomWord
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
    } 
})


    var Timer = setInterval(function(){

        if (timeDisplay === 0){
            clearInterval(timeInterval); 
            GameOver = true;
        } else {
            timeDisplay --;
            time.innerHTML = timeDisplay;
        }
        document.getElementById("time").innerHTML =  (timeDisplay / 10).toFixed(2);
        time.innerHTML = timeDisplay
      }, 1000);

timeInterval = setInterval(updateTime, 1000)
