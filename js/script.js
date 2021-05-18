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

