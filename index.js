//Dice 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

//Dice 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Dice Roll

var imagePath1 = "images/dice" + randomNumber1 + ".png";

var imagePath2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", imagePath1);

document.querySelector(".img2").setAttribute("src", imagePath2);


//Results

if (randomNumber1 > randomNumber2) {

    document.querySelector(".container h1").textContent="🏆 Player One Wins!";

} else if (randomNumber2 > randomNumber1) {

    document.querySelector(".container h1").textContent="Player Two Wins! 🏆";

} else if (randomNumber1 === randomNumber2) {

    document.querySelector(".container h1").textContent="It's A Draw!";

}
