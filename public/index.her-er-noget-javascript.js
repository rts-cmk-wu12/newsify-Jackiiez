(()=>{var t,e,n,o,r={721:(t,e,n)=>{"use strict";n.a(t,(async(t,e)=>{try{n(57),n(118),console.log("pokemons");const{fetchMostPopular:o,fetchTopStories:r}=n(467),{showMainContent:a}=n(469);a();const s=await o();function i(){const t="fuck";return console.log(t),t}console.log(s),i();let c="test";console.log(c),e()}catch(u){e(u)}}),1)},469:t=>{t.exports={showMainContent:function t(){document.getElementById("splash").style.opacity="0",document.getElementById("logosection").style.opacity="1",setTimeout((()=>{document.getElementById("splash").style.display="none",document.getElementById("main").style.display="block",document.getElementById("logosection").style.display="grid"}),4e3),setTimeout(t,5e3)}}},118:t=>{t.exports=class{}},467:t=>{const e="xLbrZhh8GbfMpxgJdhTYa6kPJvEP12VO",n="https://api.nytimes.com/svc/",o="search/v2/";t.exports={fetchMostPopular:async function(){const t=new URL(`${arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}.json`,n+"mostpopular/v2/viewed/");t.searchParams.set("api-key",e);const o=await fetch(t);return await o.json()},fetchTopStories:async function(){const t=new URL(`${arguments.length>0&&void 0!==arguments[0]?arguments[0]:"articlesearch"}.json?q=health&`,n+o);t.searchParams.set("api-key",e);const r=await fetch(t);return await r.json()},fetchSport:async function(){const t=new URL(`${arguments.length>0&&void 0!==arguments[0]?arguments[0]:"articlesearch"}.json?q=sport&`,n+o);t.searchParams.set("api-key",e);const r=await fetch(t);return await r.json()}}},450:(t,e,n)=>{"use strict";n.d(e,{A:()=>i});var o=n(601),r=n.n(o),a=n(314),s=n.n(a)()(r());s.push([t.id,"*{margin:0;box-sizing:border-box;padding:0;text-decoration:none;scroll-behavior:smooth}body{max-width:430px}#wrapper{width:100vw;height:100vh;margin:0 auto}main{margin:0 auto;display:grid;justify-content:center}.line-container{display:flex;align-items:center;margin:20px 0}.line{flex-grow:1;height:2px;background-color:#000;margin-right:10px;margin-left:10px}img{margin:0 auto}#splash{margin-top:150%;transition:opacity 1.5s ease;transition-delay:1.5s}#splash h1{text-align:center}.logo2{width:38%;justify-self:center}h1{font-size:35px}#logosection{padding-top:15%;display:grid;text-align:center;justify-content:center;margin:0 auto;display:none;transition:opacity .7s ease-out}button{width:110%;padding-top:7%;margin-top:50%;margin:0 auto;display:grid;border:none;padding-bottom:7%;border-radius:18px}p{padding-bottom:25%}h1{padding-bottom:10%;padding-top:10%}.button1{margin-bottom:5%}.button2{margin-bottom:15%}.button1,.button2{color:#fff}.button1 a,.button2 a{color:#000}.button3{margin-bottom:10%;background-color:#4d861f;color:#fff}.accountA{color:#4d861f}",""]);const i=s},314:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var u=0;u<t.length;u++){var p=[].concat(t[u]);o&&s[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},601:t=>{"use strict";t.exports=function(t){return t[1]}},57:(t,e,n)=>{"use strict";var o=n(72),r=n.n(o),a=n(825),s=n.n(a),i=n(659),c=n.n(i),u=n(56),p=n.n(u),l=n(540),d=n.n(l),f=n(113),m=n.n(f),h=n(450),y={};y.styleTagTransform=m(),y.setAttributes=p(),y.insert=c().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=d(),r()(h.A,y),h.A&&h.A.locals&&h.A.locals},72:t=>{"use strict";var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},s=[],i=0;i<t.length;i++){var c=t[i],u=o.base?c[0]+o.base:c[0],p=a[u]||0,l="".concat(u," ").concat(p);a[u]=p+1;var d=n(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var m=r(f,o);o.byIndex=i,e.splice(i,0,{identifier:l,updater:m,references:1})}s.push(l)}return s}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var s=0;s<a.length;s++){var i=n(a[s]);e[i].references--}for(var c=o(t,r),u=0;u<a.length;u++){var p=n(a[u]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=c}}},659:t=>{"use strict";var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},a={};function s(t){var e=a[t];if(void 0!==e)return e.exports;var n=a[t]={id:t,exports:{}};return r[t](n,n.exports,s),n.exports}t="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=t=>{t&&t.d<1&&(t.d=1,t.forEach((t=>t.r--)),t.forEach((t=>t.r--?t.r++:t())))},s.a=(r,a,s)=>{var i;s&&((i=[]).d=-1);var c,u,p,l=new Set,d=r.exports,f=new Promise(((t,e)=>{p=e,u=t}));f[e]=d,f[t]=t=>(i&&t(i),l.forEach(t),f.catch((t=>{}))),r.exports=f,a((r=>{var a;c=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[t])return r;if(r.then){var a=[];a.d=0,r.then((t=>{s[e]=t,o(a)}),(t=>{s[n]=t,o(a)}));var s={};return s[t]=t=>t(a),s}}var i={};return i[t]=t=>{},i[e]=r,i})))(r);var s=()=>c.map((t=>{if(t[n])throw t[n];return t[e]})),u=new Promise((e=>{(a=()=>e(s)).r=0;var n=t=>t!==i&&!l.has(t)&&(l.add(t),t&&!t.d&&(a.r++,t.push(a)));c.map((e=>e[t](n)))}));return a.r?u:s()}),(t=>(t?p(f[n]=t):u(d),o(i)))),i&&i.d<0&&(i.d=0)},s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s.nc=void 0,s(721)})();