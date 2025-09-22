'use strict';

const imageLink = 'https://aws-travel-guide.s3.eu-west-1.amazonaws.com/default_image_size/6042a289a49a2_%D0%9A%D0%B8%D1%97%D0%B2.jpeg';

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

const container = document.querySelector('.image-link');
let img = document.getElementById('image');

document.getElementById('addBtn').addEventListener('click', () => {
    if (!img) {
        const newImg = document.createElement('img');
        newImg.id = 'image';
        newImg.src = imageLink;
        newImg.style.width = '200px';
        container.appendChild(newImg);
        img = newImg;
    }
});

document.getElementById('increaseBtn').addEventListener('click', () => {
    if (img) {
        let currentWidth = img.width;
        img.style.width = currentWidth + 20 + 'px';
    }
});

document.getElementById('decreaseBtn').addEventListener('click', () => {
    if (img) {
        let currentWidth = img.width;
        if (currentWidth > 40) {
            img.style.width = currentWidth - 20 + 'px';
        }
    }
});

document.getElementById('removeBtn').addEventListener('click', () => {
    if (img) {
        img.remove();
        img = null;
    }
});