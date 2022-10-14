const redButton1 = document.getElementById('red-button1');
const redButton2 = document.getElementById('red-button2');
const redButton3 = document.getElementById('red-button3');
const redButton4 = document.getElementById('red-button4');
const redButton5 = document.getElementById('red-button5');
const redButton6 = document.getElementById('red-button6');
const redButton7 = document.getElementById('red-button7');
const redButton8 = document.getElementById('red-button8');

const yellowButton1 = document.getElementById('yellow-button1');
const yellowButton2 = document.getElementById('yellow-button2');
const yellowButton3 = document.getElementById('yellow-button3');
const yellowButton4 = document.getElementById('yellow-button4');
const yellowButton5 = document.getElementById('yellow-button5');
const yellowButton6 = document.getElementById('yellow-button6');
const yellowButton7 = document.getElementById('yellow-button7');
const yellowButton8 = document.getElementById('yellow-button8');

let a = 1;
let b = 1;
let c = 1;
let d = 1;
let e = 1;
let f = 1;
let g = 1;
let h = 1;

const slota1 = document.getElementById('column-a1');

//red buttons
redButton1.onclick = () => {
  document.getElementById(`column-a${a++}`).classList.add('red-click');
}

redButton2.onclick = () => {
  document.getElementById(`column-b${b++}`).classList.add('red-click');
}
redButton3.onclick = () => {
  document.getElementById(`column-c${c++}`).classList.add('red-click');
}
redButton4.onclick = () => {
  document.getElementById(`column-d${d++}`).classList.add('red-click');
}
redButton5.onclick = () => {
  document.getElementById(`column-e${e++}`).classList.add('red-click');
}
redButton6.onclick = () => {
  document.getElementById(`column-f${f++}`).classList.add('red-click');
}
redButton7.onclick = () => {
  document.getElementById(`column-g${g++}`).classList.add('red-click');
}
redButton8.onclick = () => {
  document.getElementById(`column-h${h++}`).classList.add('red-click');
}

//yellow buttons
yellowButton1.onclick = () => {
  document.getElementById(`column-a${a++}`).classList.add('yellow-click');
}
yellowButton2.onclick = () => {
  document.getElementById(`column-b${b++}`).classList.add('yellow-click');
}
yellowButton3.onclick = () => {
  document.getElementById(`column-c${c++}`).classList.add('yellow-click');
}
yellowButton4.onclick = () => {
  document.getElementById(`column-d${d++}`).classList.add('yellow-click');
}
yellowButton5.onclick = () => {
  document.getElementById(`column-e${e++}`).classList.add('yellow-click');
}
yellowButton6.onclick = () => {
  document.getElementById(`column-f${f++}`).classList.add('yellow-click');
}
yellowButton7.onclick = () => {
  document.getElementById(`column-g${g++}`).classList.add('yellow-click');
}
yellowButton8.onclick = () => {
  document.getElementById(`column-h${h++}`).classList.add('yellow-click');
}
