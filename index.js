var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var randomImage = "dice" + randomNumber + ".png";
var randomSource = "images/" + randomImage;
var setSelector = document.querySelectorAll("img")[0].setAttribute("src", randomSource);
var randomNumber1 = Math.floor(Math.random()* 6) + 1;
var randomImage1 = "dice" + randomNumber1 + ".png";
var randomSource1 = "images/" + randomImage1;
document.querySelectorAll("img")[1].setAttribute("src", randomSource1);



if(randomNumber > randomNumber1){
    document.querySelector("h1").innerHTML = "player1 wins! 👑";
}
else if ( randomNumber1 > randomNumber){
    document.querySelector("h1").innerHTML = "player2 wins! 👑";
}
else{
    document.querySelector("h1").innerHTML = "draw!";
}
