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