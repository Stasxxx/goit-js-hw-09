!function(){var e=document.querySelector(".form");document.querySelector('input[name="delay"]'),document.querySelector('input[name="step"]'),document.querySelector('input[name="amount"]'),document.querySelector('button[type="submit"]');function n(e,n){return new Promise((function(t,o){var c=Math.random()>.3;setTimeout((function(){c?t("✅ Fulfilled promise ".concat(e+=1," in ").concat(n,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}console.log(e),e.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,o=(t.delay,t.step,t.amount);if(0===o)return;n()})),n(2,1500).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}();
//# sourceMappingURL=03-promises.44184f8e.js.map
