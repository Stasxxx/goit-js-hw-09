import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

let selectedDate = '';


const refs = {
  input: document.querySelector('input#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
}
// console.log(refs.days);

refs.startBtn.setAttribute('disabled', '');
// input.addEventListener('input', flatpickr)
// let selectedDate = Date.now(input.value);
// console.log(selectedDate)
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= options.defaultDate) {
      window.alert("Please choose a date in the future");
    } else {
      refs.startBtn.removeAttribute('disabled');   
      selectedDate = selectedDates[0];
    }    
    // console.log(selectedDates[0]);
  },
  
};


flatpickr(refs.input, options);

class Timer {
  constructor({ onTick }) {
    this.isActive = false;
    this.onTick = onTick;
  }

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    
    setInterval(() => {
      const currentTiem = Date.now();
      const deltaTime = selectedDate - currentTiem;
      const time = convertMs(deltaTime);
      // console.log(time);
      this.onTick(time);
      // updateClockface(time)
    }, 1000);
  }
}

const timer = new Timer({
  onTick: updateClockface,
});



function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


// const clock = new Timer({
//   onTick: updateClockface,
// });


refs.startBtn.addEventListener('click', () => {
  timer.start();
});
// // refs.startBtn.addEventListener('click', timer.start.bind(timer));
// // refs.stopBtn.addEventListener('click', timer.stop.bind(timer))
function updateClockface({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}