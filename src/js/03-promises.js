import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const button = document.querySelector('button[type="submit"]');

let position = 0;
let STEP;
let isActive = false;
// console.log(STEP)

form.addEventListener('submit', onFormSubmit);
button.addEventListener('input', onFormSubmit)

function onFormSubmit(evt) {
  evt.preventDefault()
  const { elements: { delay, step, amount } } = evt.currentTarget;
 
  if (position === amount) {
    return
  }
  position += 1;
  STEP = step.value;
  
  console.log(amount.value);
  console.log(delay.value);
  console.log(step.value);
  createPromise(position, delay.value)
}

function createPromise(position, delay) {
  if (isActive) {
      return;
  }
  isActive = true;
  return new Promise((fulfill, rejec) => {
    const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      
     fulfill(`✅ Fulfilled promise ${position} in ${delay}ms`)
    } else {
      rejec(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  }, delay);
  })
  
  
};

Promise(position, STEP)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });