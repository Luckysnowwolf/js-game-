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
  document.getElementById(words);
  if (words === yourtypedword){ 
    consoel.log("corect")
  } else (gameover)
  document.getElementById(text);
  
  
  const difficultylevel = document.getelementbyid(difficulty)
  if (difficultyleveleasy){
    console.log("you have picked easy")
  } else if (difficultylevelmedium){
    console.log("you have picked medium")
  } else if(difficultylevelhard){
    consoel.log("you have picked hard")
  }
  document.getelementbyvalue(easy);
  {}
  document.getelementbyvalue(medium);
  {}
  document.getelementbyvalue(hard);
  {}
  document.getelementbyid(time);
  if (thetimer > 0)
    console.log()
  else (thetimer == 0)
  console.log();
  document.getelementbyid(score);
  {}
  const gameover = consoel.log(`this is your end score "  " ${score}`);
  }