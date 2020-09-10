
var nav = document.querySelector('.nav-list');
var menuBtn = document.querySelector('.nav-list__toggle');

nav.classList.add('nav-list--closed');
menuBtn.classList.remove('nav-list__toggle--nojs');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('nav-list__toggle--closed');
  nav.classList.toggle('nav-list--closed');
});
