const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");let d=null;e.setAttribute("disabled",""),t.addEventListener("click",(()=>{d=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.setAttribute("disabled",""),e.removeAttribute("disabled")}),1e3)})),e.addEventListener("click",(()=>{clearInterval(d),t.removeAttribute("disabled"),e.setAttribute("disabled","")}));
//# sourceMappingURL=01-color-switcher.3d72680c.js.map
