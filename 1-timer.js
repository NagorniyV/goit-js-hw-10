/* empty css                     */import{f as p,i as f}from"./assets/vendor-BbSUbo7J.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const a=document.querySelector("[data-start]");let u=null,d;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const r=t[0];r<=new Date?(f.error({title:"Error",iconUrl:"../img/bix.png",message:"Please choose a date in the future",backgroundColor:"#ef4040",messageColor:"white",position:"topRight",titleColor:"white"}),a.disabled=!0):(u=r,a.disabled=!1)}};p("#datetime-picker",y);a.addEventListener("click",function(){u&&(d=setInterval(()=>{const t=u-new Date;if(t<=0){clearInterval(d),l(0,0,0,0),f.success({title:"Completed",message:"Timer has reached zero!"});return}const{days:r,hours:s,minutes:n,seconds:e}=g(t);l(r,s,n,e)},1e3),a.disabled=!0)});function g(t){const o=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:i,minutes:m,seconds:h}}function l(t,r,s,n){document.querySelector("[data-days]").textContent=c(t),document.querySelector("[data-hours]").textContent=c(r),document.querySelector("[data-minutes]").textContent=c(s),document.querySelector("[data-seconds]").textContent=c(n)}function c(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
