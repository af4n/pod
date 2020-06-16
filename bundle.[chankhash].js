!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var r=t(1),o=t(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function s(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var i=e[o],c=n.base?i[0]+n.base:i[0],u=t[c]||0,l="".concat(c," ").concat(u);t[c]=u+1;var d=s(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:v(f,n),references:1}),r.push(l)}return r}function u(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function f(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function v(e,n){var t,r,o;if(n.singleton){var i=h++;t=m||(m=u(n)),r=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=u(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=s(t[r]);a[o].references--}for(var i=c(e,n),u=0;u<t.length;u++){var l=s(t[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=i}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,"/**\r\n* Body CSS\r\n*/\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nhtml,\r\nbody,\r\ninput,\r\ntextarea,\r\nbutton {\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\r\n}\r\n\r\n\r\n/**\r\n* Sidebar CSS\r\n*/\r\n\r\n#sidebar {\r\n  background-color: #2196F3;\r\n  padding: 15px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  #sidebar {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 180px;\r\n    height: 100%;\r\n    padding-top: 30px;\r\n  }\r\n}\r\n\r\n\r\n/**\r\n* Content CSS\r\n*/\r\n@media (min-width: 768px) {\r\n  #content {\r\n    margin-left: 180px;\r\n  }\r\n}\r\n\r\n.floating-btn {\r\n  position: fixed;\r\n  right: 50px;\r\n  bottom: 50px;\r\n}\r\n\r\n.modal {\r\n  max-width: 600px;\r\n  max-height: 300px;\r\n  margin: 100px auto;\r\n  overflow-y: auto;\r\n  background: #fff;\r\n}\r\n\r\n.modal > h1 {\r\n  text-align: center;\r\n}\r\n\r\n.modal .modal-content {\r\n  padding: 1rem\r\n}\r\n\r\n.error {\r\n  color: red;\r\n}",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([o]).join("\n")}var a,s,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},function(e,n,t){"use strict";t.r(n);class r{static create(e){return fetch("https://podcast-6868.firebaseio.com/questions.json",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(n=>(e.id=n.name,e)).then(o).then(r.renderList)}static fetch(e){return e?fetch("https://podcast-6868.firebaseio.com/questions.json?auth="+e).then(e=>e.json()).then(e=>e&&e.error?`<p class="error">${e.error}</p>`:e?Object.keys(e).map(n=>({...e[n],id:n})):[]):Promise.resolve('<p class="error">У вас нет токена</p>')}static renderList(){const e=i(),n=e.length?e.map(a).join(""):'<div class="mui--text-headline">Вы пока ничего не спрашивали.</div>';document.getElementById("list").innerHTML=n}static listToHTML(e){return e.length?`<ol>${e.map(e=>`<li>${e.text}</li>`).join("")}</ol>`:"<p>Вопросов пока нет</p>"}}function o(e){const n=i();n.push(e),localStorage.setItem("questions",JSON.stringify(n))}function i(){return JSON.parse(localStorage.getItem("questions")||"[]")}function a(e){return`\n    <div class="mui--text-black-54">\n      ${new Date(e.date).toLocaleDateString()}\n      ${new Date(e.date).toLocaleTimeString()}\n    </div>\n    <div>${e.text}</div>\n    <br>\n  `}function s(e){return e.length>=10}function c(e,n){const t=document.createElement("div");t.classList.add("modal"),t.innerHTML=`\n    <h1>${e}</h1>\n    <div class="modal-content">${n}</div>\n  `,mui.overlay("on",t)}t(0);const u=document.getElementById("form"),l=document.getElementById("modal-btn"),d=u.querySelector("#question-input"),f=u.querySelector("#submit");function p(e){e.preventDefault();const n=e.target.querySelector("button"),t=e.target.querySelector("#email").value,o=e.target.querySelector("#password").value;n.disabled=!0,function(e,n){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCBySKSkkAQFC2NgjFjMjSgr5QcRaMsuZc",{method:"POST",body:JSON.stringify({email:e,password:n,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>e.idToken)}(t,o).then(r.fetch).then(m).then(()=>n.disabled=!1)}function m(e){"string"==typeof e?c("Ошибка!",e):c("Список вопросов",r.listToHTML(e))}window.addEventListener("load",r.renderList),u.addEventListener("submit",(function(e){if(e.preventDefault(),s(d.value)){const e={text:d.value.trim(),date:(new Date).toJSON()};f.disabled=!0,r.create(e).then(()=>{d.value="",d.className=""})}})),l.addEventListener("click",(function(){c("Авторизация",'\n    <form class="mui-form" id="auth-form">\n      <div class="mui-textfield mui-textfield--float-label">\n        <input type="email" id="email" required>\n        <label for="email">Email</label>\n      </div>\n      <div class="mui-textfield mui-textfield--float-label">\n        <input type="password" id="password" required>\n        <label for="password">Пароль</label>\n      </div>\n      <button type="submit" class="mui-btn mui-btn--raised mui-btn--primary">Войти</button>\n    </form>\n  '),document.getElementById("auth-form").addEventListener("submit",p,{once:!0})})),d.addEventListener("input",()=>{f.disabled=!s(d.value)})}]);