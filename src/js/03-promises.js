import { Notify } from 'notiflix/build/notiflix-notify-aio';


// const delayInput = document.querySelector('input[name="delay"]');
// const stepInput = document.querySelector('input[name="step"]');
// const amountInput = document.querySelector('input[name="amount"]');
const formInput = document.querySelector('.form');
const buttonInput = document.querySelector('button[type="submit"]');




formInput.addEventListener('submit', onFormSubmit);
// buttonInput.addEventListener('input', onFormSubmit)

function onFormSubmit(evt) {
  evt.preventDefault()
  // formData[evt.currentTtarget.elements.name] = evt.currentTtarget.elements.value;
  // const { elements: { delay, step, amount } } = evt.currentTarget;
  const elements = evt.currentTarget.elements;
  const amount = elements.amount.value;
  const step = Number(elements.step.value);
  let delay = Number(elements.delay.value);
  

  if (amount < 0 || step < 0 || delay < 0) {
    Notify.failure(`Enter a positive number`,
      { position: "center-top" });
    return
  };

  for (let position = 1; position <= amount; position += 1) {
    delay += step;
    // let { position: position, delay: delay } = object;

  createPromise(position, delay)
    .then(({ position, delay }) => {
    Notify.success(` Fulfilled promise ${position} in ${delay}ms`);
  })
    .catch(({ position, delay }) => {
    Notify.failure(` Rejected promise ${position} in ${delay}ms`);
  })
  .finally(evt.currentTarget.reset());
    
  }
}

function createPromise(object) {
   let { position: position, delay: delay } = object;
  return new Promise((resolve, reject) => {
   
    const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      resolve(` Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(` Rejected promise ${position} in ${delay}ms`);
    }
  }, delay);
     
  })
  
  return
};

