


//containers etc
const firstContainer = document.querySelector('.firstContainer');

const magnifier = document.querySelector('.magnifier')
magnifier.addEventListener('click', timeOutText);


const area = document.querySelector('.area');

const textContainer = document.querySelector('.textContainer');
//textContainer.classList.add("textContainer");
const text = document.querySelector('.text');

const bell = document.querySelector('.bell');

const compass = document.querySelector('.compass')
compass.addEventListener('click', showCompassText);

let compassText = document.querySelector('.compassText')


const quill = document.querySelector('.quill');
quill.addEventListener('click', inputQuill);


const firstInput = document.querySelector("#firstInput");
//firstInput.type = "text";
//const value = firstInput.value;


const value = document.querySelector('#firstInput').value;
const correctInput = ["Three North", "three norths", "the three norths"]
firstInput.className = "firstInput"; // set the CSS class//same as classList.add? it works
const lowercasedValue = value.toLowerCase();

const firstSubmit = document.createElement("button");
firstSubmit.type = "submit";
firstSubmit.textContent = "Enter"



//Audios
const windAudio = new Audio('./resurssit/sound/wind.mp3');
windAudio.loop = true;

const bellAudio = new Audio('./resurssit/sound/belltolls.wav');
bellAudio.loop = false;
bell.addEventListener('click', playBell);



//Buttons
//const soundButton = document.createElement('button');
//soundButton.classList.add("soundButton");
//firstContainer.appendChild(soundButton);
//soundButton.innerHTML ="Sound";
const soundButton = document.querySelector('.soundButton');
soundButton.addEventListener('click', soundOn );




//counters
let puzzleCount = 2;
const puzzleCounter = document.querySelector('.puzzleCounter');
puzzleCounter.innerHTML = puzzleCount;




//simple funcs
function soundOn() {
    windAudio.play();
}

function timeOutText() {
    setTimeout(() => {
        area.style.display = 'flex';
      }, 1000);
      setTimeout(() => {
        text.innerHTML= "Once there was a great mystery." ;

      }, 3500);
      setTimeout(() => {
        text.innerHTML="..." ;

      }, 6000);
}



function playBell() {
    bellAudio.play();

}



function showCompassText() {
    compassText.innerHTML="Up, up my way goes... "
    setTimeout(() => {
      compassText.innerHTML="";
    }, 3000);
}


function inputQuill(){
    firstInput.style.display= "block";
    //textContainer.appendChild(firstInput);
    textContainer.appendChild(firstSubmit);
    checkPuzzles();
}




function moveNext() {


  if(lowercasedValue.includes("three north")){  //works also the three norths
 
    bellAudio.play();
    checkPuzzles();

    setTimeout(() => {
        window.location.href = 'second.html';
        return false;
      }, 2000);

    }

    else{
      text.innerHTML="...no." ;
      
    }

}

function checkPuzzles() {
  puzzleCount --;
  puzzleCounter.innerHTML = puzzleCount;
 }
 
 

firstSubmit.addEventListener("click", moveNext);






