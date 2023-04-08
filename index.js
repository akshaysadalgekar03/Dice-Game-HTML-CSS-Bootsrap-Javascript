// 2 random numbers for dice
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

// create and select random dice number string using string concatenation
var randomDiceImage1 = 'dice' + randomNumber1 + '.png';
var randomDiceImage2 = 'dice' + randomNumber2 + '.png';

// Change attribute vlaue of image source based on radnome value
var randomImageSource1 = "images/" + randomDiceImage1;
var randomImageSource2 = "images/" + randomDiceImage2;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

// src attribute of img tag is updated
// element.setAttribute(name, value)
image1.setAttribute("src",randomImageSource1);
image2.setAttribute("src",randomImageSource2);

// Decide Winner
if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 1 Wins!';
}
else if (randomNumber2 > randomNumber1){
    document.querySelector('h1').innerHTML = 'Player 2 Wins!';
}

else{
    document.querySelector('h1').innerHTML = 'Draw!';
}