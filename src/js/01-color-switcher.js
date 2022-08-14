
const startSwitchColor = document.querySelector('button[data-start]');
const stopSwitchColor = document.querySelector('button[data-stop]');
const body = document.querySelector('body')
let timerId = null;


stopSwitchColor.setAttribute('disabled', '');

startSwitchColor.addEventListener("click", () => {
  timerId = setInterval(() => {
    body.style.backgroundColor = `${getRandomHexColor()}`;
    startSwitchColor.setAttribute('disabled', '');
    stopSwitchColor.removeAttribute('disabled')
  }, 1000);
});


stopSwitchColor.addEventListener("click", () => {
  clearInterval(timerId);
  startSwitchColor.removeAttribute('disabled');
  stopSwitchColor.setAttribute('disabled', '');
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}