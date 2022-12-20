const inputText = document.getElementById('text-input');
const inputFile = document.getElementById('meme-insert');
const img = document.getElementById('meme-image');
const previewBorder = document.getElementById('meme-image-container');
const redButton = document.getElementById('fire');
const blueButton = document.getElementById('water');
const greenButton = document.getElementById('earth');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

function inputValue(text) {
  const paragraph = document.getElementById('meme-text');
  paragraph.innerText = text.value;
  return paragraph;
}

function inputImage(event) {
  const image = document.getElementById('meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
}

function buttonRed() {
  previewBorder.style.border = 'rgb(255 0 0) dashed 3px';
  return previewBorder;
}

function buttonBlue() {
  previewBorder.style.border = 'rgb(0 0 255) double 5px';
  return previewBorder;
}

function buttongreen() {
  previewBorder.style.border = 'rgb(0 128 0) groove 6px';
  return previewBorder;
}

meme1.addEventListener('click', () => {
  img.className = 'image';
  img.src = './imgs/meme1.png';
});

meme2.addEventListener('click', () => {
  img.className = 'image';
  img.src = './imgs/meme2.png';
});

meme3.addEventListener('click', () => {
  img.className = 'image';
  img.src = './imgs/meme3.png';
});

meme4.addEventListener('click', () => {
  img.className = 'image';
  img.src = './imgs/meme4.png';
});

inputText.oninput = function input() { inputValue(this); };
inputFile.onchange = function file(event) { inputImage(event); };
greenButton.onclick = function green() { buttongreen(); };
blueButton.onclick = function blue() { buttonBlue(); };
redButton.onclick = function red() { buttonRed(); };
