(()=>{"use strict";var t={261:(t,e,n)=>{const o=new WebSocket(`ws://${"MISSING_ENV_VAR".API_HOST}/updates`);n(575);const r=document.getElementById("nav"),c=document.getElementById("canvas");c.width=100,c.height=100,c.style.width="1000px",c.style.height="1000px";const i=new class{constructor(t,e){this.canvas=t,this.navPanel=e,this.ctx=t.getContext("2d"),this.ctx.imageSmoothingEnabled=!1,this.rect=t.getBoundingClientRect()}draw(t,e,n){this.ctx.fillStyle=n,this.ctx.fillRect(t,e,1,1)}clickEvent(t){const e=Math.floor((t.clientX-this.rect.left)/10),n=Math.floor((t.clientY-this.rect.top)/10);r.innerHTML=`${Math.floor(e/10)}, ${Math.floor(n/10)}`,async function(t,e){return fetch(`https://${"MISSING_ENV_VAR".API_HOST}/set`,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({x:t,y:e,color:"black"})})}(e,n).then((t=>console.log(t.json().then())))}moveEvent(t){let e=Math.floor(t.x-this.rect.left),n=Math.floor(t.y-this.rect.top);r.innerHTML=`${Math.floor(e/10)}, ${Math.floor(n/10)}`}}(c,r);(async function(){return fetch(`https://${host}/state`)})().then((t=>{t.json().then((t=>{for(const e in t)for(const n in e)console.log({color:t[e][n],row:e,col:n}),i.draw(e,n,t[e][n])}))})),c.addEventListener("click",i.clickEvent.bind(i)),c.addEventListener("mousemove",i.moveEvent.bind(i)),o.addEventListener("message",(function(t){const e=JSON.parse(t.data);i.draw(e.x,e.y,e.color)}))},575:(t,e,n)=>{n.p}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var c=e[o]={exports:{}};return t[o](c,c.exports,n),c.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!t||!/^http(s?):/.test(t));)t=o[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n(261),n(575)})();