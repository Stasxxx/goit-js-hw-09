const e=document.querySelector(".form");document.querySelector('input[name="delay"]'),document.querySelector('input[name="step"]'),document.querySelector('input[name="amount"]'),document.querySelector('button[type="submit"]');function t(e,t){return new Promise(((n,o)=>{const u=Math.random()>.3;setTimeout((()=>{u?n(`✅ Fulfilled promise ${e+=1} in ${t}ms`):o(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}console.log(e),e.addEventListener("submit",(function(e){e.preventDefault();const{elements:{delay:n,step:o,amount:u}}=e.currentTarget;if(0===u)return;t()})),t(2,1500).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}));
//# sourceMappingURL=03-promises.3abceab7.js.map
