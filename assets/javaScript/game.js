var userGuess;

var randchar = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1);

console.log(randchar);

function playGame(){

 userGuess = document.getElementById("user-guess").value;

 if(userGuess === randchar) {
    alert ("Yay!");
 }
 else if (usersGuess !== randchar){
     alert ("Guess again !")
 }
 else alert ("That is not the letter")

}