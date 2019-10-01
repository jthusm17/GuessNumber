// initalize guessees
let numGuesses = 1

// random num
let autoNum = Math.floor(Math.random() * 15 + 1);
console.log("the number is " + autoNum);

// shorthand stuff i guess?
let guessCount = document.getElementById("guessCount");
let helpText = document.getElementById("helpText");
let restartBtn = document.getElementById("restartBtn");
let submitBtn = document.getElementById("submitBtn");
let guessField = document.getElementById("guessField");
let sideLabel = document.getElementById("sideLabel");
let bottomText = document.getElementById("bottomText");
let spinner = document.getElementById("spinner");

//button stuff + input + restart
const disable=() => {
   guessField.disabled = true;
   submitBtn.disabled = true;
   spinner.hidden = false;
   console.log("did disable");
   }
const enable=() => {
   guessField.disabled = false;
   submitBtn.disabled = false;
   spinner.hidden = true;
   console.log("did enable");
   }
const restart=() => {
   guess = 0;
   autoNum = Math.floor(Math.random() * 15 + 1);
   numGuesses = 1;
   guessCount.innerHTML = "Guess# 1";
   helpText.innerHTML = "...";
   restartBtn.disabled = true;
   submitBtn.disabled = false;
   guessField.hidden = false;
   restartBtn.hidden = true;
   submitBtn.hidden = false;
   sideLabel.innerHTML = "Guess a Number";
   //bottomText.innerHTML = "Input your guess into the text box above."; 
   console.log("buttons/lbl/textfield returned to origanal state");
   console.log("the next number is " + autoNum);
}

// adds setTimout
const timePat=() => {
   disable();
    timeVar = setTimeout(pat, 3000);
}

// big boy function- controls the verything
const pat=() => {  
// number guessed + does the stuff    
let guess = guessField.value; 
console.log(guess);
enable();
if(guess == autoNum) 
{   
helpText.innerHTML = " Congrats, you guessed right in '" + numGuesses + "' guesses";
console.log("congrats you got it right in " + numGuesses)
guessCount.innerHTML = "Guess# " + numGuesses;
restartBtn.disabled = false; 
guessField.value = "";  
guessField.hidden = true;
submitBtn.hidden = true; 
sideLabel.innerHTML = "Press 'Restart' to play again!";
//bottomText.innerHTML = " ";
submitBtn.disabled = true;
restartBtn.hidden = false
// grammer fix if guessess = 1
if(numGuesses == 1 ) 
{
   helpText.innerHTML = " Congrats, you guessed right in '" + numGuesses + "' guess";
}
} 
else if(guess > autoNum)  
{ 
numGuesses++; 
helpText.innerHTML = " Try Smaller";
console.log("try smaller");
guessCount.innerHTML = "Guess# " + numGuesses;
} 
else if(guess < autoNum)
{ 
numGuesses++;
helpText.innerHTML = " Try Bigger";
console.log("try bigger");
guessCount.innerHTML = "Guess# " + numGuesses;
} 
else 
{
helpText.innerHTML = "Invalid. Use integers please.";
console.log("Invalid input = " + guess + ". Guess not counted");
}
} 
