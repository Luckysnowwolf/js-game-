// Variables for the DOM elements

// Array
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
  input.addeventlistener("input", function (e) {
    if (e.input === words){
        console.log(this.value)
    }
  });
  let timer = 30 * 1000;
  setInterval(newgame, 30 * 1000);
  function newgame(){
    console.log(timer++);
    if( timer === 0){
        clearInterval(gameover)
    }
  document.getElementById(words).addeventlistener(){};
  document.getElementById(text).addeventlistener(){};
  
  
  const difficultylevel = document.getelementbyid(difficulty).addeventlistener(){};
  if (difficultyleveleasy){
    console.log("you have picked easy")
  } else if (difficultylevelmedium){
    console.log("you have picked medium")
  } else if(difficultylevelhard){
    consoel.log("you have picked hard")
  }
  document.getelementbyvalue(easy).addeventlistener(){};
  {}
  document.getelementbyvalue(medium).addeventlistener(){};
  {}
  document.getelementbyvalue(hard).addeventlistener(){};
  {}
  document.getelementbyid(time).addeventlistener(){};
  if (timer > 0)
    console.log()
  else (timer == 0)
  console.log();
  document.getelementbyid(score).addeventlistener(){};
  const gameover = consoel.log(`this is your end score "  " ${score}`);
  }