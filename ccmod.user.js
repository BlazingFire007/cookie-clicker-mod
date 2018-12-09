// ==UserScript==
// @name         Cookie Clicker Console Mod
// @version      0.9
// @description  Console Mod for Cookie Clicker
// @author       Center-Z
// @match        http://orteil.dashnet.org/cookieclicker/
// ==/UserScript==
fetch("https://cdn.jsdelivr.net/gh/BlazingFire007/cookie-clicker-mod@master/src/source.js").then(res=>{if(res.ok) return res.text();}).then(result=>{eval(result);});
