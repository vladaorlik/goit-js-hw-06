function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector('body');

const collorEl = document.querySelector('.change-color');
console.log(collorEl);
collorEl.addEventListener('click', changecolor);


const spanColor = document.querySelector('.color');
console.log(spanColor);

const color = getRandomHexColor();

function changecolor() {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = color

}
