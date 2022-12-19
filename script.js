function inputValue(text) {
  const paragraph = document.getElementById('meme-text');
  paragraph.innerText = text.value;
  return paragraph;
}

const inputText = document.getElementById('text-input');
inputText.oninput = function input() { inputValue(this); };

const inputImage = function img(event) {
  const image = document.getElementById('meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
};

const inputFile = document.getElementById('meme-insert');
inputFile.onchange = function file(event) { inputImage(event); };
