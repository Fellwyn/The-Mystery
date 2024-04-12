


//containers etc
const firstContainer = document.querySelector('.firstContainer');

const magnifier = document.querySelector('.magnifier')
magnifier.addEventListener('click', timeOutText);


const area = document.querySelector('.area');

const textContainer = document.querySelector('.textContainer');
//textContainer.classList.add("textContainer");

const bell = document.querySelector('.bell');

const compass = document.querySelector('.compass')
compass.addEventListener('click', showCompassText);

let compassText = document.querySelector('.compassText')


const quill = document.querySelector('.quill');
quill.addEventListener('click', inputQuill);

const firstInput = document.createElement("input");
firstInput.type = "text";
//firstInput.value ="three north";
firstInput.className = "firstInput"; // set the CSS class//same as classList.add? it works

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
const soundButton = document.createElement('button');
soundButton.classList.add("soundButton");
firstContainer.appendChild(soundButton);
soundButton.innerHTML ="Sound";
soundButton.addEventListener('click', soundOn );




//simple funcs
function soundOn() {
    windAudio.play();
}

function timeOutText() {
    setTimeout(() => {
        area.style.display = 'flex';
      }, 1000);
      setTimeout(() => {
        textContainer.innerHTML="Once there was a great mystery." ;
      }, 3500);
      setTimeout(() => {
        textContainer.innerHTML="...";
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
    textContainer.appendChild(firstInput);
    textContainer.appendChild(firstSubmit);
}




function moveNext() {

  if((firstInput.value == "three" + "north")){

 
    bellAudio.play();

    setTimeout(() => {
        window.location.href = 'second.html';
        return false;
      }, 2000);

    }

    

}



firstSubmit.addEventListener("click", moveNext);






