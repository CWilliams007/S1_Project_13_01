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

var stars = document.querySelectorAll('span#stars img');
// init function
function init() {
      // step 5 a, creates a array with all stars in it.
      stars = document.querySelectorAll('span#stars img');

      // step 5 b for each value in stars array it will run these commands.
      for (var i = 0; i < stars.length; i++) {
            //  for all values in array stars changes mouse style to pointer
            stars[i].style.cursor = 'pointer';
            // checks the document for all items inside of element span id stars, listens for when mouse enters element, runs functions lightstars
            stars[i].addEventListener('mouseenter', lightStars);
      }
      // step 5 c searches document for commentLable id, listens for keyup events in the element, if heard will run update_count function
      document.getElementById('comment').addEventListener('keyup', updateCount);



}

// step 6 create function lighstars
function lightStars(e) {
      // step 6a, targets alt of the event object. stores it in variable starNumber
      var starNumber = e.target.alt;
      // step 6b declares stars variable with the object collection inside. 
      stars = document.querySelectorAll('span#stars img');

      var starSelected = e;
      // step 6c, runs a loop for all objects in the stars array
      for (var i = 0; i < starNumber; i++) {
            // for the img objects inside stars array, changes src to light up star
            stars[i].src = "bw_star2.png";
      }

      for (i = starNumber; i < 5; i++) {
            stars.src = "bw_star.png ";
      }
      // step 6e gets rating input, sets value to starNumber stars
      document.getElementById('rating').value = starNumber + ' ' + 'stars';

      // step 6f, on mouse leave turns off stars
      e.target.addEventListener('mouseleave', turnOffStars);
      // step 6g, on click removes turnoffstars event listener keeping stars lit
      e.target.addEventListener('click', function () {
            starSelected.target.removeEventListener('mouseleave', turnOffStars);
      })
}

function turnOffStars() {
      stars = document.querySelectorAll('span#stars img');
      for (var i = 0; i < stars.length; i++) {
            // for the img objects inside stars array, changes src to normal unlit star
            stars[i].src = "bw_star.png";
      }
      // resets rating to a empty text string
      document.getElementById('rating').value = ' ';
}

function updateCount() {
      // declares commentText with value of text string
      var commentText = document.getElementById('comment').value;
      // declares charCount using supplied function getting number of characters in text string from commentText
      var charCount = countCharacters(commentText);
      // displays the number of characters 
      document.getElementById('wordCount').value = charCount + '/1000';

      // if charCount value is greater than 1000, set wordCountBox font white background red
      if (charCount > 1000) {
            document.getElementById('wordCount').style.Color = 'white';
            document.getElementById('wordCount').style.backgroundColor = 'red';
      }
      // else charCount value is less than 1000, set wordCountBox font black background white
      else {
            document.getElementById('wordCount').style.Color = 'black';
            document.getElementById('wordCount').style.backgroundColor = 'white';
      }

}





/*=================================================================*/

function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}