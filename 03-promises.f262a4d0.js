var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequire7bc7;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequire7bc7=n);var o=n("iQIUW");const i=document.querySelector(".form");document.querySelector('button[type="submit"]');function l(e,t){return new Promise(((r,n)=>{const o=Math.random()>.3;setTimeout((()=>{o?r(` Fulfilled promise ${e} in ${t}ms`):n(` Rejected promise ${e} in ${t}ms`)}),t)}))}i.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.elements,r=t.amount.value,n=Number(t.step.value);let i=Number(t.delay.value);if(r<0||n<0||i<0)return void o.Notify.failure("Enter a positive number",{position:"center-top"});for(let t=1;t<=r;t+=1)i+=n,l(t,i).then(((e,t)=>{o.Notify.success(` Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{o.Notify.failure(` Rejected promise ${e} in ${t}ms`)})).finally(e.currentTarget.reset())}));
//# sourceMappingURL=03-promises.f262a4d0.js.map