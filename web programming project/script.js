const div1 = document.querySelector(".posisi");
const button = document.querySelector(".backgroundbutton")
const input1 = document.querySelector(".input")
const paragraph = document.querySelector(".text.font")
const button2 = document.querySelector(".widthbutton")

function background() {
    div1.classList.toggle("background");
}

function date() {
    paragraph.innerHTML = input1.value;
    
}

function width(){
    div1.classList.toggle("width")
}

button.onclick = background;
input1.onchange = date;
button2.onclick = width;