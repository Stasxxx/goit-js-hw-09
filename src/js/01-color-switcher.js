const startSwitchColor = document.querySelector('button[data-start]');


console.log(startSwitchColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}