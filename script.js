'use strict';

const el9 = document.getElementById('el9');
const el10 = document.querySelector('#el10');
el9.addEventListener('click', () => {
    if (el9.classList.contains('blue-background')) {
        el9.classList.remove('blue-background');
        el9.classList.add('green-background');
    } else {
        el9.classList.remove('green-background');
        el9.classList.add('blue-background');
    }
});

el10.addEventListener('click', () => {
    if (el10.classList.contains('green-background')) {
        el10.classList.remove('green-background');
        el10.classList.add('blue-background');
    } else {
        el10.classList.remove('blue-background');
        el10.classList.add('green-background');
    }
});