(()=>{var e={980:e=>{const t=document.querySelector(".slider"),r=document.querySelector(".continue"),n=Array.from(document.querySelectorAll(".scrollbar__radio"));e.exports={sliders:function(){n.forEach(((e,r)=>e.addEventListener("change",(()=>{const e=Math.ceil(t.getBoundingClientRect().width);t.scrollTo(e*r,0)})))),r.addEventListener("click",(()=>{const e=n.find((e=>e.checked)).parentElement.nextElementSibling;null===e?window.location="./index.html":e.click()}))}}},790:e=>{e.exports={showMainContent_two:function(){document.getElementById("splash").style.opacity="0",document.querySelector(".slider").style.opacity="1",document.querySelector(".continue").style.opacity="1",document.querySelector(".buttons__button").style.opacity="1",document.querySelector(".buttons").style.opacity="1",document.querySelector(".scrollbar").style.opacity="1",setTimeout((()=>{document.getElementById("splash").style.display="none",document.querySelector(".slider").style.display="flex",document.querySelector(".buttons").style.display="flex",document.querySelector(".continue").style.display="flex",document.querySelector(".buttons__button").style.display="flex",document.querySelector(".scrollbar").style.display="flex",document.getElementById("main").style.display="block"}),6500)}}},649:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(601),o=r.n(n),a=r(314),i=r.n(a)()(o());i.push([e.id,"body{max-width:430px}#wrapper{width:100vw;height:100vh;margin:0 auto}main{margin:0 auto;display:grid;justify-content:center}.line-container{display:flex;align-items:center;margin:20px 0}.line{flex-grow:1;height:2px;background-color:#000;margin-right:10px;margin-left:10px}",""]);const s=i},606:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(601),o=r.n(n),a=r(314),i=r.n(a)()(o());i.push([e.id,'.slider{width:100%;overflow:hidden;scroll-behavior:smooth;display:none;transition:opacity .7s ease-out}.slider__slide{width:100%;flex-shrink:0}.slider__slide p{max-width:85%;margin:0 auto}.slider__slide h2{text-align:center;max-width:70%;margin:0 auto;margin-top:10%}.slider__image{object-fit:cover;width:100%;aspect-ratio:1}.scrollbar{display:flex;gap:.5rem;justify-content:center;margin-top:1rem;height:100%;display:none;transition:opacity .7s ease-out;margin-top:20%}.scrollbar__label{width:1rem;aspect-ratio:1;border-radius:100%;background-color:#c5c5c5}.scrollbar__label:has(.scrollbar__radio:checked){margin:0 1.5rem}.scrollbar__label:has(.scrollbar__radio:checked)::after{content:"";display:block;width:4rem;height:100%;background-color:#4d861f;border-radius:1rem;transform:translateX(-1.5rem)}.scrollbar__radio{display:none}.buttons{justify-content:space-evenly;margin-top:25%}.buttons__button{text-align:center;padding:1rem 3rem;border:2px solid;color:#4d861f;text-decoration:none;border-radius:10rem;display:none;transition:opacity .7s ease-out}.continue{background-color:#4d861f;color:#fff}',""]);const s=i},455:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(601),o=r.n(n),a=r(314),i=r.n(a)()(o());i.push([e.id,"*{margin:0;box-sizing:border-box;padding:0;text-decoration:none;scroll-behavior:smooth}",""]);const s=i},860:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(601),o=r.n(n),a=r(314),i=r.n(a)()(o());i.push([e.id,"img{margin:0 auto}#splash{margin-top:150%;transition:opacity 1.5s ease;transition-delay:1.5s}#splash h1{text-align:center}",""]);const s=i},314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);n&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},601:e=>{"use strict";e.exports=function(e){return e[1]}},72:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=n.base?c[0]+n.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=r(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,n);n.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=r(a[i]);t[s].references--}for(var c=n(e,o),l=0;l<a.length;l++){var d=r(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},659:e=>{"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},540:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{"use strict";var e=r(72),t=r.n(e),n=r(825),o=r.n(n),a=r(659),i=r.n(a),s=r(56),c=r.n(s),l=r(540),d=r.n(l),u=r(113),p=r.n(u),m=r(606),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),t()(m.A,f),m.A&&m.A.locals&&m.A.locals;var y=r(860),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),t()(y.A,h),y.A&&y.A.locals&&y.A.locals;var v=r(649),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),t()(v.A,g),v.A&&v.A.locals&&v.A.locals;var b=r(455),x={};x.styleTagTransform=p(),x.setAttributes=c(),x.insert=i().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=d(),t()(b.A,x),b.A&&b.A.locals&&b.A.locals;const{showMainContent_two:A}=r(790);A();const{sliders:_}=r(980);console.log(_),_()})()})();