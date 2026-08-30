// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function (link) {

  link.addEventListener("click", function () {
    navLinks.classList.remove("show");
  });

});


// Typing Effect

const words = [
  "Web Developer",
  "Web Designer",
  "Creative Learner"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");


function typeEffect() {

  const currentWord = words[wordIndex];

  if (isDeleting) {

    typing.textContent =
      currentWord.substring(0, charIndex--);

  } else {

    typing.textContent =
      currentWord.substring(0, charIndex++);

  }


  let speed = isDeleting ? 50 : 100;


  if (!isDeleting && charIndex > currentWord.length) {

    isDeleting = true;
    speed = 1500;

  }

  else if (isDeleting && charIndex < 0) {

    isDeleting = false;

    wordIndex =
      (wordIndex + 1) % words.length;

    charIndex = 0;

    speed = 300;

  }


  setTimeout(typeEffect, speed);

}


typeEffect();


// Automatic Year

document.getElementById("year").textContent =
  new Date().getFullYear();