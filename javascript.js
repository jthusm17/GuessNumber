// random num
let autoNum = Math.floor(Math.random() * 15 + 1);
console.log("the number is " + autoNum);

//button stuff + input + restart
const disable=() => {
   document.getElementById("guessField").disabled = true;
   document.getElementById("myBtn2").disabled = true;
   console.log("did disable");
   }
const enable=() => {
   document.getElementById("guessField").disabled = false;
   document.getElementById("myBtn2").disabled = false;
   console.log("did enable");
   }
const restart=() => {
   Guess = 0;
   autoNum = Math.floor(Math.random() * 15 + 1);
   console.log("the number is " + autoNum);
   numGuesses = 1;
   document.getElementById("guess2").innerHTML = "Guess# 1";
   document.getElementById("guess1").innerHTML = "...";
   document.getElementById("myBtn1").disabled = true;
   document.getElementById("guessField").hidden = false;
   document.getElementById("lbl").innerHTML = "Guess a Number"; 
   console.log("buttons/lbl/textfield should have changed");
}

// adds setTimout
const timePat=() => {
   disable();
    timeVar = setTimeout(pat, 3000);
}
// initalize guessees
let numGuesses = 1

// big boy function- controls the verything
const pat=() => { 
  
// number guessed      
let Guess = document.getElementById("guessField").value; 
console.log(Guess);

if(Guess == autoNum) 
{   
document.getElementById("guess1").innerHTML = " Congrats, u guessed right in '" + numGuesses + "' guess(es)";
console.log("congrats you got it right in " + numGuesses)
document.getElementById("guess2").innerHTML = "Guess#: " + numGuesses;
document.getElementById("myBtn1").disabled = false; 
document.getElementById("guessField").value = "0";  
document.getElementById("guessField").hidden = true; 
document.getElementById("lbl").innerHTML = "Press 'Restart' to play again!";
} 
else if(Guess > autoNum)  
{ 
numGuesses++; 
document.getElementById("guess1").innerHTML = " Try Smaller";
 console.log("try smaller")
 document.getElementById("guess2").innerHTML = "Guess#: " + numGuesses;
} 
else
{ 
numGuesses++;
document.getElementById("guess1").innerHTML = " Try Bigger";
console.log("try bigger")
document.getElementById("guess2").innerHTML = "Guess #: " + numGuesses;

} 
enable();
} 
