// Implement an Event Listener
// We've provided you with three files: index.html style.css and script.js.

// Inside of index.html, you'll find two buttons, one that should turn the background to red and a second that should turn the background to blue. Write the necessary JavaScript to implement an event for each button.

// You have been provided with two functions -- changeBackgroundColorToBlue and changeBackgroundColorToRed -- that can be used as callbacks. You do not need to change the content of these functions.

// When you're done, it should display this functionality.

// Bonus:
// If you finish early, see if you can implement it so that the background color changes when the user hovers over one of the buttons.

function changeBackgroundColorToBlue() {
    // No need to change the content of this function. Don't worry if this code is new to you.
    document.body.style.backgroundColor = 'blue';
}
// // Target element on HTML document
// let buttonBlue = document.querySelector('.button.blue.js-blue-button');
// // Add event listener
// buttonBlue.addEventListener('click', function () {
//     // Callback function
//     changeBackgroundColorToBlue();
// });

let buttonBlue = document.querySelector('.button.blue');
// Changed click to mouseover
buttonBlue.addEventListener('mouseover', function () {
    changeBackgroundColorToBlue();
});

function changeBackgroundColorToRed() {
    // No need to change the content of this function. Don't worry if this code is new to you.
    document.body.style.backgroundColor = 'red';
}

// let buttonRed = document.querySelector('.button.red.js-red-button');

// buttonRed.addEventListener('click', function () {
//     changeBackgroundColorToRed();
// });

let buttonRed = document.querySelector('.button.red');

buttonRed.addEventListener('mouseover', function () {
    changeBackgroundColorToRed();
});

// Link for repo here: https://github.com/rixiobarrios/js-event-listener-practi
