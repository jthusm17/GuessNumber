// random num
var autoNum = Math.floor(Math.random() * 15 + 1);
console.log("the number is " + autoNum); 

function disable() {
   document.getElementById("guessField").disabled = true;
   }
function enable() {
   document.getElementById("guessField").disabled = false;
   }

function timePat(){
   disable();
    timeVar = setTimeout(pat, 2000);
}
function pat(){ 
  
// number guessed      
var Guess = document.getElementById("guessField").value; 
console.log(Guess);

if(Guess == autoNum) 
{    
document.getElementById("guess1").innerHTML = " Congrats, u guessed right";
console.log("congrats you got it right")    
} 
else if(Guess > autoNum)  
{     
document.getElementById("guess1").innerHTML = " Try Smaller";
 console.log("try smaller")
} 
else
{ 
document.getElementById("guess1").innerHTML = " Try Bigger";
console.log("try bigger")
} 
enable();
} 
