//elements
let box1=document.getElementById('box1');
let box2=document.getElementById('box2');
let box3=document.getElementById('box3');
let box4=document.getElementById('box4');
let box5=document.getElementById('box5');
let box6=document.getElementById('box6');
let box7=document.getElementById('box7');
let box8=document.getElementById('box8');
let h1=document.getElementById('h1');
let h3=document.getElementById('h3');


//functions
function turnPink() {
    box1.style.backgroundColor='pink';
}


function turnYellow() {
    box3.style.backgroundColor='lightyellow';
}

function turnGreen() {
    box4.style.backgroundColor='lightgreen';
}


function turnBlue() {
    box5.style.backgroundColor='lightblue';
}

function turnWhite() {
    box8.style.backgroundColor='white';
}


function moveRight() {
    box2.style.marginLeft='100px';
}

function moveLeft() {
    box2.style.marginLeft='0px';
}

function changeText(event) {
    event.target.innerHTML = 'go listen to them!';
}
function changeBack(event) {
    event.target.innerHTML = 'some albums i like!';
}

function changed(event) {
    event.target.innerHTML = '♫ lalalalala ♫';
}

//events
box1.addEventListener('click', turnPink);
box3.addEventListener('click', turnYellow);
box4.addEventListener('click', turnGreen);
box5.addEventListener('click', turnBlue);
box8.addEventListener('click', turnWhite);
document.onkeydown=moveRight;
document.onkeyup=moveLeft;
h3.onmouseover=changeText;
h3.onmouseout=changeBack;
h1.addEventListener('dblclick', changed);