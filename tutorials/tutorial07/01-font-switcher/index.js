// Made it increase and decrease sizes instead of just a big and a small option

function makeBigger() {
   var contentElement = document.querySelector('.content');
   var h1Element = document.querySelector('h1');
   var newFontSize = (parseInt(getComputedStyle(contentElement).fontSize) + 2) + 'px';
   contentElement.style.fontSize = newFontSize;
   h1Element.style.fontSize = newFontSize;
}

function makeSmaller() {
   var contentElement = document.querySelector('.content');
   var h1Element = document.querySelector('h1');
   var newFontSize = (parseInt(getComputedStyle(contentElement).fontSize) - 2) + 'px';
   contentElement.style.fontSize = newFontSize;
   h1Element.style.fontSize = newFontSize;
};

/*
Tips:
1. First, in the index.html file, add an onclick attribute to each button.
   The value of the attribute should be a call to the corresponding function
   (see class demos).

2. Then modify the body of the "makeBigger" and 
   "makeSmaller" functions (in between the curly braces)
   to target the body element and set it's font size.
*/