const modals = document.querySelectorAll('.modal');
const gridItems = document.querySelector('.grid').children;

const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', function() {
  gsap.to(modals, {autoAlpha: 0})
  gsap.to(closeBtn, {autoAlpha: 0})
  for(let i = 0; i < 9; i++) {
    gsap.to(gridItems[i], {autoAlpha: 1})
  }
});
const modalBtns = document.querySelectorAll('[modal]');
modalBtns.forEach(function(modalBtn) {
  modalBtn.addEventListener('click', function() {
    gsap.to(reviews, {autoAlpha: 1})
    gsap.to(".reviews-card", {autoAlpha: 0})
    gsap.to(gridItems[7], {autoAlpha: 1})

    let modalClasses = modalBtn.getAttribute('modal').split(" ");
    let modals = [];
    modalClasses.forEach(function(modalClass) {
      modals.push(document.querySelector(modalClass));
    });
    gsap.to(modals, {autoAlpha: 1})
    gsap.to(closeBtn, {autoAlpha: 1})
    for(let i = 0; i < 9; i++) {
      gsap.to(gridItems[i], {autoAlpha: 0})
    }
  });
});

const reviews = document.querySelector('.reviews');
reviews.addEventListener('click', function() {
  gsap.to(reviews, {autoAlpha: 0})
  gsap.to(".reviews-card", {autoAlpha: 1})
  gsap.to(gridItems[7], {autoAlpha: 0})
})
const closeReviews = document.querySelector('.reviews-close');
closeReviews.addEventListener('click', function() {
  gsap.to(reviews, {autoAlpha: 1})
  gsap.to(".reviews-card", {autoAlpha: 0})
  gsap.to(gridItems[7], {autoAlpha: 1})
})

