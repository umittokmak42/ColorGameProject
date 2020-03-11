var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
})

resetButton.addEventListener("click", function(){
    // generate all new colors
    colors = generateRandomColors(numberOfSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors to spuares
    for(var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
})

colorDisplay.textContent = pickedColor;


for(var i=0; i<squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?"
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again"
        }
    })
}

function changeColors(color){
    // loop through all sqaures
    for(var i=0; i<squares.length; i++){
    // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    // pick a random number
    var random = Math.floor(Math.random() * colors.length );
    return colors[random];
}

function generateRandomColors(num){
    // make array
    var arr = [];
    // add num random colors to array
    for (var i = 0; i < num; i++){
    // get random color and push in to array
        arr.push(randomColor());
    }
    // return the array
    return arr;
}

function randomColor(){
    // pick a "red" from 0 to 255
    var r = Math.floor(Math.random()*256);
    // pick a "green" from 0 to 255
    var g = Math.floor(Math.random()*256);
    // pick a "blue" from 0 to 255
    var b = Math.floor(Math.random()*256);
    // insert to string "rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";

}