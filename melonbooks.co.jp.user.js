// ==UserScript==
// @name         Auto Adult Melonbooks
// @version      1.1
// @description  Automatically gives adult permission on Melonbooks
// @author       Freed
// @match        https://www.melonbooks.co.jp/*
// @updateURL    https://github.com/KNFreed/Adult-Website-Auto-Enabler/raw/master/melonbooks.co.jp.user.js
// ==/UserScript==

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var adult = getCookie("AUTH_ADULT");
if (adult != "1") {
  document.cookie = "AUTH_ADULT=1";
    location.reload();
}
