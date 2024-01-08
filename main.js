// Get the DOM element
let screen = document.getElementById("screen");

function appendToDisplay(x){
  screen.value += x;
}

function clearDisplay(){
  screen.value = "";
}

function equalDisplay(){
  screen.value = eval(screen.value);
}