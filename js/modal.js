(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  let scrollTop = 0;

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    const body = document.querySelector('body');
    const otherModal = document.querySelector('[data-modal].is-open');

    if (refs.modal.classList.contains('is-hidden')) {
      if (otherModal) {
        otherModal.classList.add('is-hidden');
      }
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.top = `-${scrollTop}px`;
    } else {
      body.style.overflow = '';
      body.style.position = '';
      body.style.top = '';
      window.scrollTo(0, scrollTop);
    }
    refs.modal.classList.toggle('is-hidden');
  }
})();