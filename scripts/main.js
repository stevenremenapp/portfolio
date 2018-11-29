// NAME ANIMATION

// document.getElementById('hero-left').addEventListener('mouseover', function(event) {
//     console.log(event.target);
// });

let nameLetter = document.getElementsByClassName('name-letter');

for (let i = 0; i < nameLetter.length; i++) {
    nameLetter[i].addEventListener('mouseover', function() {
        nameLetter[i].classList.add('animatedLetter');
    });
    nameLetter[i].addEventListener('animationend', function() {
        nameLetter[i].classList.remove('animatedLetter');
    });
}

// MENU

let menuBtn = document.querySelector('.menu-icon');
let menuCloseBtn = document.querySelector('.menu-closed-icon');
let menu = document.querySelector('.menu');
let overlay = document.querySelector('.menu-overlay');

menuBtn.addEventListener('click', function() {
    menuBtn.style.display = "none";
    menuCloseBtn.style.display = "block";
    menu.style.display = "flex";
    overlay.style.display = "block";
});

menuCloseBtn.addEventListener('click', function() {
    menuBtn.style.display = "block";
    menuCloseBtn.style.display = "none";
    menu.style.display = "none";
    overlay.style.display = "none";
});

overlay.addEventListener('click', function() {
    menuBtn.style.display = "block";
    menuCloseBtn.style.display = "none";
    menu.style.display = "none";
    overlay.style.display = "none";
});