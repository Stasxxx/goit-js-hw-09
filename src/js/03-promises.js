import { Notify } from 'notiflix/build/notiflix-notify-aio';


const formInput = document.querySelector('.form');
const buttonInput = document.querySelector('button[type="submit"]');

formInput.addEventListener('submit', onFormSubmit);


function onFormSubmit(evt) {
  evt.preventDefault();
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
    

    createPromise(position, delay)
      .then(({ position, delay }) => {
    Notify.success(` Fulfilled promise ${position} in ${delay}ms`);
  })
    .catch(({ position, delay }) => {
    Notify.failure(` Rejected promise ${position} in ${delay}ms`);
  })
      .finally(evt.currentTarget.reset());
    delay += step;
  }
}

function createPromise( position, delay) {
   
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      resolve({position, delay});
    } else {
      reject({position, delay});
    }
  }, delay);   
  })
};

