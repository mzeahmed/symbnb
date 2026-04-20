import {domReady} from '../core/DomReady';

domReady.ready(() => {
  const addImageButton = document.getElementById('add-image');
  const widgetsCounter = document.getElementById('widgets-counter') as HTMLInputElement | null;
  const adImages = document.getElementById('ad_images');

  if (!addImageButton || !widgetsCounter || !adImages) {
    return;
  }

  const getCounterValue = (): number => {
    const value = Number.parseInt(widgetsCounter.value, 10);
    return Number.isNaN(value) ? 0 : value;
  };

  const updateCounter = (): void => {
    const count = adImages.querySelectorAll('div.form-group').length;
    widgetsCounter.value = String(count);
  };

  addImageButton.addEventListener('click', () => {
    const index = getCounterValue();
    const prototype = adImages.dataset.prototype;

    if (!prototype) {
      return;
    }

    const template = prototype.replace(/__name__/g, String(index));
    adImages.insertAdjacentHTML('beforeend', template);
    widgetsCounter.value = String(index + 1);
  });

  // Event delegation also covers widgets added after initial page load.
  adImages.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const deleteButton = target.closest('button[data-action="delete"]') as HTMLButtonElement | null;

    if (!deleteButton) {
      return;
    }

    const selector = deleteButton.dataset.target;
    if (!selector) {
      return;
    }

    const blockToRemove = document.querySelector(selector);
    blockToRemove?.remove();
    updateCounter();
  });

  updateCounter();
});
