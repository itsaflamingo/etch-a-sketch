let container = document.querySelector('.container');

let title = document.createElement('h1');
title.classList.add('title');
title.innerText = "Etch-a-sketch";

let etchMenuContainer = document.createElement('div');
etchMenuContainer.classList.add('etchMenuContainer');

let menu = document.createElement('div');
menu.classList.add('menu');

let etchContainer = document.createElement('div');
etchContainer.classList.add('etchContainer');

let black = document.createElement('button');
black.classList.add('black');

let color = document.createElement('button');
color.classList.add('color');

let clear = document.createElement('button');
clear.classList.add('clear');

let numOfSquares = document.createElement('button');
numOfSquares.classList.add('numOfSquares');

// let rangeSlider = document.createElement('div');
// rangeSlider.id = 'range';

let eraser = document.createElement('button');
eraser.classList.add('eraser');

menu.appendChild(black);
menu.appendChild(color);
menu.appendChild(eraser);
menu.appendChild(clear);
menu.appendChild(numOfSquares);

etchMenuContainer.appendChild(menu);
etchMenuContainer.appendChild(etchContainer);

container.appendChild(title);
container.appendChild(etchMenuContainer);

//button text content 

document.querySelector('.black').textContent = 'Black Pen';
document.querySelector('.color').textContent = 'Coloured Pen';
document.querySelector('.eraser').textContent = 'Eraser';
document.querySelector('.clear').textContent = 'Clear';
document.querySelector('.numOfSquares').textContent = 'Size';

//grid change variables
let clientWidth = etchContainer.clientWidth;

let sideNum;
let plusMinusDivs;
let totalGridNum;

//black pen button

let blackPenButton = document.querySelector('.black');
let colorPenButton = document.querySelector('.color');
let clearCanvas = document.querySelector('.clear');
let eraseDivs = document.querySelector('.eraser')

blackPenButton.addEventListener('click', function () {
    let divList = document.querySelectorAll(".plusMinusDivs");

    divList.forEach(div => {
        div.addEventListener('mouseover', function() {
        div.style.backgroundColor = 'black';
    });
    });
});

//random color button

function randomColor() { //must be in function otherwise each div will display the same color.
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16); //# of colors that exist from black to white are 16777215
    return randomColor;
}

colorPenButton.addEventListener('click', function() {
    let divList = document.querySelectorAll(".plusMinusDivs");

    divList.forEach(div => {
        div.addEventListener('mouseover', function() {
        
        
        div.style.backgroundColor = randomColor();
    });
    });
});

//clear canvas button (clears full canvas at once)

clearCanvas.addEventListener('click', function() {
    let divList = document.querySelectorAll(".plusMinusDivs");

    divList.forEach(div => {
        div.style.backgroundColor = 'white';
    });
});

//eraser button, turns divs white on mouseover

eraseDivs.addEventListener('click', function() {
    let divList = document.querySelectorAll(".plusMinusDivs");

    divList.forEach(div => {
        div.addEventListener('mouseover', function() {
        div.style.backgroundColor = 'white';
    });
    });
});


//default div display
    //totalGridNum = ideal number of divs, i=iterations of first div. Min # of divs is 1. 

function divs(sideNum) {
    
    totalGridNum = sideNum * sideNum; 
    let divSide  = clientWidth/(totalGridNum/sideNum);

    //totalGridNum = ideal number of divs, i=iterations of first div. Min # of divs is 1. 
    for (i=0; i<=totalGridNum; i++) {

        plusMinusDivs = document.createElement('div');
        plusMinusDivs.classList.add('plusMinusDivs');

        let divList = document.querySelectorAll(".plusMinusDivs");
        
        divList.forEach(div => {
                div.style.width = (divSide - 1.6) + "px"; //border is 1.6px, divSide = border
                div.style.height = (divSide - 1.6) + "px";
        });

        etchContainer.appendChild(plusMinusDivs);

    }

}

function defaultDisplay() { 

        divs(16);

}

defaultDisplay();


//function for changing number of divs with button
function divDisplay() {


    sideNum = prompt("Name a number between 0 and 100 inclusive for the size of your canvas", 16);

    if (sideNum > 100 || sideNum < 0) {
        sideNum = 16;
    }
    
    divs(sideNum);
    

}
//clears all divs 
function clearDiv()
{
    let divList = document.querySelectorAll(".plusMinusDivs");
    divList.forEach(div => { 
        div.remove();
    });
}

numOfSquares.addEventListener('click', clearDiv);
numOfSquares.addEventListener('click', divDisplay);







