function inputValue(text) {
  const paragraph = document.getElementById('meme-text');
  paragraph.innerText = text.value;
  return paragraph;
}

const inputText = document.getElementById('text-input');
inputText.oninput = function input() { inputValue(this); };
