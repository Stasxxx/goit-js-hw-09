const form = document.querySelector('.form');
const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const button = document.querySelector('button[type="submit"]');

let position = 0;
console.log(form)

form.addEventListener('submit', onFormSubmit);
// amount.addEventListener('input', onFormSubmit)

function onFormSubmit(evt) {
  evt.preventDefault()
  const { elements: { delay, step, amount } } = evt.currentTarget;
  if (position === amount) {
    return
  }

  createPromise()
  // console.log(amount.value);
}

function createPromise(position, delay) {

  return new Promise((fulfill, rejec) => {
    const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      position += 1;
     fulfill(`✅ Fulfilled promise ${position} in ${delay}ms`)
    } else {
      rejec(`❌ Rejected promise ${position} in ${delay}ms`) 
    }
  }, delay);
  })
  
  
};

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });