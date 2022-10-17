import Accordion from 'accordion-js';
function showAccordion(){
  if (window.innerWidth <= 767) {
     new Accordion('.accordion-container', {
      duration: 400,
    });
  }
};
export default showAccordion;
