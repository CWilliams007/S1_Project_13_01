"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

    Author: Chad Williams
    Date:   3.13.19
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/

// when the document loads it will run the init function
document.addEventListener('onload', init());
// step 5 a, creates a array with all stars in it.
var stars = document.querySelectorAll('span#stars img');

// init function
function init() {

      // step 5 b for each value in stars array it will run these commands.
      for (i = 0; i < stars.length; i++) {
            //  for all values in array stars changes mouse style to pointer
            stars[i].style.cursor = 'pointer';
            // checks the document for all items inside of element span id stars, listens for when mouse enters element, runs functions lightstars
            stars[i].addEventListener('mouseenter', lightstars)
      }
      // step 5 c searches document for commentLable id, listens for keyup events in the element, if heard will run update_count function
      document.getElementById('comment').addEventListener('keyup', update_Count)



}

function lightstars(e) {
      var starNumber = e.target.alt;
}







/*=================================================================*/

function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}