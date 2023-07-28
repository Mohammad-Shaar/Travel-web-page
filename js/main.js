// for nav bar
const linkSelected = document.querySelector('header nav');
const linkRemove = document.querySelectorAll('header nav ul a');

linkSelected.addEventListener(`click`, function(e){
    if (e.target.tagName === `A`){
        for (let index = 0; index < linkRemove.length; index++) {
            if (linkRemove[index].classList.contains('active')){
                linkRemove[index].classList.remove('active');
            }
        }
        e.target.classList.add(`active`); // toggle: if class not insert he add and vis virsa
    }
});

// for side bar
const minuIcon = document.querySelector('nav .minu-icon');

function sideMinue() {
    minuIcon.classList.toggle('clicked')
}

const sideMinu = document.querySelector('.side-minu');
const sideMinuUlInner = document.createElement('ul');

const navLiItime = document.querySelectorAll('header nav li');

for (let index = 0; index < navLiItime.length; index++) {
    sideMinuUlInner.appendChild(navLiItime[index].cloneNode(true));
}

sideMinu.appendChild(sideMinuUlInner);

sideMinu.classList.add('visible');