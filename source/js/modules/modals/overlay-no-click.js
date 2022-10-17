const content = document.querySelector('.modal__content');
const overlay = document.querySelector('.modal__overlay');

document.addEventListener('click', (evt) => {
  const withinBoundaries = evt.composedPath().includes(content);
  if (!withinBoundaries) {
    overlay.style.pointerEvents = 'none';
  }
});
