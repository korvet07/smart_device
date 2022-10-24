
export function addAutofocus() {
  const inputName = document.querySelector('#name_user');
  const buttonOpenModal = document.querySelector('a[data-open-modal="feedback"]');

  if (inputName && buttonOpenModal) {
    buttonOpenModal.addEventListener('click', () => {
      setTimeout(() => inputName.focus(), 200);
    });
  }
}
