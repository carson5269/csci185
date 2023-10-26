const body = document.body;
const defaultButton = document.getElementById("default");
const oceanButton = document.getElementById("ocean");
const desertButton = document.getElementById("desert");
const highContrastButton = document.getElementById("high-contrast");
const customThemeButton = document.getElementById("custom-theme");

function defaultTheme() {
    body.className = "";
}

function oceanTheme() {
    body.className = "ocean";
}

function desertTheme() {
    body.className = "desert";
}

function highContrastTheme() {
    body.className = "high-contrast";
}

/*
    Hints: 
    1. Attach the event handlers (functions) above to the click event
       of each of the four buttons (#default, #ocean, #desert, 
        and #high-contrast) in index.html.
    2. Then, modify the  body of each function so that it
       sets the className property of the body tag based on 
       the button that was clicked.
*/