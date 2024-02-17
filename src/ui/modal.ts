import * as bootstrap from 'bootstrap';

const getModal = (modalEl: any | null) => {
  if (!modalEl || !modalEl.$el) return;
  const modalZEl = modalEl.$el as HTMLElement;
  return modalZEl;
};

const hideModal = (modalEl: HTMLElement | null) => {
  const modalZEl = getModal(modalEl);
  if (!modalZEl) return;
  const zModal = bootstrap.Modal.getInstance(modalZEl);
  zModal?.hide();
};

const showModalAsync = async (
  modalEl: any | null,
  backdrop = false
): Promise<unknown> => {
  showModal(modalEl, backdrop);

  return new Promise((resolve) => {
    const modalZEl = getModal(modalEl);
    const listener = () => {
      modalZEl!.removeEventListener('hidden.bs.modal', listener);
      resolve(modalEl.isConfirmed);
    };

    modalZEl!.addEventListener('hidden.bs.modal', listener);
  });
};

const showModal = (
  modalEl?: HTMLElement | null,
  backdrop: boolean = false
): void => {
  const modalZEl = getModal(modalEl);
  if (!modalZEl) return;

  let options = {};

  if (backdrop) {
    options = {
      ...options,
      keyboard: false,
      backdrop: 'static',
    };
  }

  const zModal = new bootstrap.Modal(modalZEl, options);
  zModal?.show();
};

export { getModal, showModal, hideModal, showModalAsync };
