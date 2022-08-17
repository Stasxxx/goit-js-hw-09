import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

let selectedDate = '';

const refs = {
  input: document.querySelector('input#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
}

refs.startBtn.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= options.defaultDate) {
      Notify.failure("Please choose a date in the future",
        { position: "center-top" });
    } else {
      refs.startBtn.removeAttribute('disabled');   
      selectedDate = selectedDates[0];
    }   
  },
};


flatpickr(refs.input, options);

class Timer {
  constructor({ onTick }) {
    this.timerId = null;
    this.isActive = false;
    this.onTick = onTick;
  }

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    
    this.timerId =setInterval(() => {
      const currentTiem = Date.now();
      const deltaTime = selectedDate - currentTiem;
      const time = this.convertMs(deltaTime);
      
      this.onTick(time);

      if (deltaTime <= 1000) {
        clearInterval(this.timerId);
      }
      
    }, 1000);
  }

  convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = this.addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = this.addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = this.addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
  }
  
  addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
}

const timer = new Timer({
  onTick: updateClockface,
});


function updateClockface({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}

refs.startBtn.addEventListener('click', timer.start.bind(timer));