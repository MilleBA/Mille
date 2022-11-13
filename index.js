'use strict';

// Koden for slider
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('demo');
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' w3-red', '');
  }
  x[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' w3-red';
}

// For automatisk slider
let myIndex = 0;
carousel();

function carousel() {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  myIndex++;
  if (myIndex > slides.length) {
    myIndex = 1;
  }
  slides[myIndex - 1].style.display = 'block';
  setTimeout(carousel, 10000);
}

// Koden for responsive meny (hide på mobile str og show på større skjerm)
function myFunction(id) {
  let meny = document.getElementById(id);
  if (meny.className.indexOf('w3-show') == -1) {
    meny.className += ' w3-show';
  } else {
    meny.className = x.className.replace(' w3-show', '');
  }
}

// Koden for å validere form

function validateAddress() {
  let address = document.forms['myForm']['address'].value;
  if (address == '') {
    alert('Du må skrive adresse!');
    return false;
  }
}
function validatePhone() {
  let phone = document.forms['myForm']['phone'].value;
  if (phone.length != 8) {
    alert('Feil mobil nummer!');
    return false;
  }
}

function validateForm() {
  validateAddress();
  validatePhone();
}
