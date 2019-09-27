// initalize guessees
let numGuesses = 1

// random num
let autoNum = Math.floor(Math.random() * 15 + 1);
console.log("the number is " + autoNum);

//button stuff + input + restart
const disable=() => {
   document.getElementById("guessField").disabled = true;
   document.getElementById("submitBtn").disabled = true;
   document.getElementById("spinner").hidden = false;
   console.log("did disable");
   }
const enable=() => {
   document.getElementById("guessField").disabled = false;
   document.getElementById("submitBtn").disabled = false;
   document.getElementById("spinner").hidden = true;
   console.log("did enable");
   }
const restart=() => {
   guess = 0;
   autoNum = Math.floor(Math.random() * 15 + 1);
   numGuesses = 1;
   document.getElementById("guessCount").innerHTML = "Guess# 1";
   document.getElementById("helpText").innerHTML = "...";
   document.getElementById("restartBtn").disabled = true;
   document.getElementById("submitBtn").disabled = false;
   document.getElementById("guessField").hidden = false;
   document.getElementById("restartBtn").hidden = true;
   document.getElementById("submitBtn").hidden = false;
   document.getElementById("sideLabel").innerHTML = "Guess a Number";
   document.getElementById("bottomText").innerHTML = "Input your guess into the text box above."; 
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
let guess = document.getElementById("guessField").value; 
console.log(guess);
enable();
if(guess == autoNum) 
{   
document.getElementById("helpText").innerHTML = " Congrats, you guessed right in '" + numGuesses + "' guesses";
console.log("congrats you got it right in " + numGuesses)
document.getElementById("guessCount").innerHTML = "Guess# " + numGuesses;
document.getElementById("restartBtn").disabled = false; 
document.getElementById("guessField").value = "";  
document.getElementById("guessField").hidden = true;
document.getElementById("submitBtn").hidden = true; 
document.getElementById("sideLabel").innerHTML = "Press 'Restart' to play again!";
document.getElementById("bottomText").innerHTML = " ";
document.getElementById("submitBtn").disabled = true;
document.getElementById("restartBtn").hidden = false
// grammer fix if guessess = 1
if(numGuesses == 1 ) 
{
   document.getElementById("helpText").innerHTML = " Congrats, you guessed right in '" + numGuesses + "' guess";
}
} 
else if(guess > autoNum)  
{ 
numGuesses++; 
document.getElementById("helpText").innerHTML = " Try Smaller";
console.log("try smaller");
document.getElementById("guessCount").innerHTML = "Guess# " + numGuesses;
} 
else if(guess < autoNum)
{ 
numGuesses++;
document.getElementById("helpText").innerHTML = " Try Bigger";
console.log("try bigger");
document.getElementById("guessCount").innerHTML = "Guess# " + numGuesses;
} 
else 
{
document.getElementById("helpText").innerHTML = "Invalid. Use integers please.";
console.log("Invalid input = " + guess + ". Guess not counted");
}
} 
