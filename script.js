function inputValue(text) {
  const paragraph = document.getElementById('meme-text');
  paragraph.innerText = text.value;
  return paragraph;
}

const inputText = document.getElementById('text-input');
inputText.oninput = function input() { inputValue(this); };

function inputImage(event) {
  const image = document.getElementById('meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
}

const inputFile = document.getElementById('meme-insert');
inputFile.onchange = function file(event) { inputImage(event); };

const previewBorder = document.getElementById('meme-image-container');

function buttonRed() {
  previewBorder.style.border = 'rgb(255 0 0) dashed 3px';
  return previewBorder;
}

const redButton = document.getElementById('fire');
redButton.onclick = function red() { buttonRed(); };

function buttonBlue() {
  previewBorder.style.border = 'rgb(0 0 255) double 5px';
  return previewBorder;
}

const blueButton = document.getElementById('water');
blueButton.onclick = function blue() { buttonBlue(); };

function buttongreen() {
  previewBorder.style.border = 'rgb(0 128 0) groove 6px';
  return previewBorder;
}

const greenButton = document.getElementById('earth');
greenButton.onclick = function green() { buttongreen(); };
