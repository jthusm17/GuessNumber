// random num
let autoNum = Math.floor(Math.random() * 15 + 1);
console.log("the number is " + autoNum);


const disable=() => {
   document.getElementById("guessField").disabled = true;
   document.getElementById("myBtn2").disabled = true;
   }
const enable=() => {
   document.getElementById("guessField").disabled = false;
   document.getElementById("myBtn2").disabled = false;
   }
const restart=() => {
   Guess = 0;
   autoNum = Math.floor(Math.random() * 15 + 1);
   console.log("the number is " + autoNum);
   numGuesses = 1;
   document.getElementById("guess2").innerHTML = "Guess# 1";
   document.getElementById("guess1").innerHTML = "...";
   document.getElementById("myBtn1").disabled = true;

}
const timePat=() => {
   disable();
    timeVar = setTimeout(pat, 3000);
}
let numGuesses = 1
const pat=() => { 
  
// number guessed      
let Guess = document.getElementById("guessField").value; 
console.log(Guess);

if(Guess == autoNum) 
{   
document.getElementById("guess1").innerHTML = " Congrats, u guessed right in " + numGuesses + " guesses";
console.log("congrats you got it right in " + numGuesses)
document.getElementById("guess2").innerHTML = "Guess#: " + numGuesses;
document.getElementById("myBtn1").disabled = false;    
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
