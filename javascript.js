// initalize guessees
let numGuesses = 1

// random num
let autoNum = Math.floor(Math.random() * 15 + 1);
console.log("the number is " + autoNum);
console.log("the number is ${autoNum}");

// shorthand stuff i guess?
let guessCount = $("#guessCount");
let helpText =  $("#helpText");
let restartBtn = $("#restartBtn");
   restartBtn.hide();
let submitBtn = $("#submitBtn");
let guessField = $("#guessField");
let sideLabel = $("#sideLabel");
let bottomText = $("#bottomText");
let spinner = $("#spinner");
   spinner.hide();

//button stuff + input + restart
const disable=() => {
   guessField.prop("disabled", true);
   submitBtn.prop('disabled', true);
   spinner.show();
   console.log("did disabled");
   }
const enable=() => {
   guessField.prop("disabled", false)
   submitBtn.prop("disabled", false);
   spinner.hide()
   console.log("did enable");
   }
const restart=() => {
   guess = 0;
   autoNum = Math.floor(Math.random() * 15 + 1);
   numGuesses = 1;
   guessCount.text("Guess# 1")
   helpText.text("...");
   guessField.show().val("");
   restartBtn.hide();
   submitBtn.show();
   sideLabel.text("Guess a Number");
   bottomText.text("Input your guess into the text box above."); 
   console.log("buttons/lbl/textfield returned to origanal state");
   console.log("the next number is " + autoNum);
}
$(document).ready(()=> {
   restartBtn.click (() => {
      restart()
   });
});

// adds setTimout
const timePat=() => {
   disable();
    timeVar = setTimeout(pat, 3000);
}

$(document).ready(()=> {
   submitBtn.click (() => {
      timePat()
   });
});

// big boy function- controls the verything
const pat=() => {  

// number guessed + does the stuff    
let guess = guessField.val(); 
console.log(guess);
enable();
if(guess == autoNum) 
{   
helpText.text(" Congrats, you guessed right in '" + numGuesses + "' guesses");
console.log("congrats you got it right in " + numGuesses)
guessCount.text("Guess# " + numGuesses);
restartBtn.show(); 
guessField.hide();
submitBtn.hide();
sideLabel.text("Press 'Restart' to play again!");
bottomText.text("Thanks for playing!");
// grammer fix if guessess = 1
if(numGuesses == 1 ) 
{
   helpText.text("Congrats, you guessed right in '" + numGuesses + "' guess");
}
} 
else if(guess > autoNum)  
{ 
numGuesses++; 
helpText.text("try smaller");
console.log("try smaller");
guessCount.text("Guess# " + numGuesses);
} 
else if(guess < autoNum)
{ 
numGuesses++;
helpText.text("try bigger");

console.log("try bigger");
guessCount.text("Guess# " + numGuesses);
} 
else 
{
helpText.text("Invalid. Use integers please");
console.log("Invalid input = " + guess + ". Guess not counted");
}
} 
