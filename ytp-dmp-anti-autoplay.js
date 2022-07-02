// ==UserScript==
// @name         ytp-dmp-anti-autoplay
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.youtube.com/*
// @match        https://*.dailymotion.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.addEventListener("load", () => {
        // Fully loaded!
        console.log("Fully loaded");
        let video = document.getElementsByTagName("video")[0];
        video.addEventListener("loadstart", function() {
            console.log("loadstart");
            video.pause();
            if ( video.readyState == 4 ) {
                console.log("[Finished] loading of video");
            }
        });

    });

})();
