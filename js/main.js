// for side bar
// .clicked class insert to minu-icon span
function sideMinue() {
    minuIcon.classList.add('clicked');
    sideMinu.classList.remove('slid-out')
}

function exiteMinue() {
    minuIcon.classList.remove('clicked');
    sideMinu.classList.add('slid-out')
}

const minuIcon = document.querySelector('nav .minu-icon');

const sideMinu = document.querySelector('.side-minu');
const sideMinuUlInner = document.querySelector('.side-minu ul');

const navLiItime = document.querySelectorAll('header nav li');

for (let index = 0; index < navLiItime.length; index++) {
    sideMinuUlInner.appendChild(navLiItime[index].cloneNode(true));
}

sideMinu.classList.add('visible');

// for nav bar
const linkSelected = document.querySelector('header nav');
const linkRemove = document.querySelectorAll('header nav ul.hiden a');
const crazy = document.querySelectorAll('.side-minu ul a');

linkSelected.addEventListener(`click`, function(e){
    if (e.target.tagName === `A`){
        for (let index = 0; index < linkRemove.length; index++) {
            if (linkRemove[index].classList.contains('active')){
                linkRemove[index].classList.remove('active');
            }
        }
        e.target.classList.add(`active`);
    }
});

linkSelected.addEventListener(`click`, function(e){
    if (e.target.tagName === `A`){
        for (let index = 0; index < linkRemove.length; index++) {
            if (crazy[index].classList.contains('active')){
                crazy[index].classList.remove('active');
                minuIcon.classList.remove('clicked');
            }
        }
        e.target.classList.add(`active`);
    }
});