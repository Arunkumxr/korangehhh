
const envelope = document.querySelector('.envelope');
const heartSeal = document.querySelector('.heart-seal');

let isOpen = false;

envelope.addEventListener('click', () => {
  isOpen = !isOpen;
  envelope.classList.toggle('open', isOpen);
  heartSeal.style.opacity = isOpen ? 0 : 1;
});
