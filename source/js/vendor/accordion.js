import Accordion from 'accordion-js';
const accordion = document.querySelector('.accordion-container');
function showAccordion() {
  if (window.innerWidth <= 767 && accordion) {
    new Accordion(accordion, {
      duration: 400,
    });
  }
};
export default showAccordion;
