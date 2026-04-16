export const loader = {
  /**
   * Shows the page loader
   */
  show: function () {
    const pageLoader = document.getElementById('page_loader') as HTMLElement;

    if (pageLoader) {
      pageLoader.classList.remove('d-none');

      if (pageLoader.hasAttribute('style')) {
        pageLoader.removeAttribute('style');
      }
    }
  },

  /**
   * Hides the page loader
   */
  hide: function () {
    const pageLoader = document.getElementById('page_loader') as HTMLElement;
    if (pageLoader) pageLoader.classList.add('d-none');
  },

  /**
   * Freezes an HTML element by displaying a loader over it
   *
   * @param {HTMLElement} element The element to freeze
   * @param options {
   *   darken?: boolean;
   *   rounded?: string | boolean;
   *   text?: string;
   *   textColor?: string;
   * }
   */
  freezeElement (
    element: HTMLElement,
    options: {
      darken?: boolean;
      rounded?: string | boolean;
      text?: string;
      textColor?: string
    } = {}
  ) {
    if (!element) return;

    const {darken = true, rounded = false, text = '', textColor = '#232d55'} = options;

    // Remove any existing loader
    this.unfreezeElement(element);

    // Overlay wrapper
    const wrapper = document.createElement('div');
    wrapper.classList.add('element-loader-wrapper');

    wrapper.style.position = 'absolute';
    wrapper.style.top = '0';
    wrapper.style.left = '0';
    wrapper.style.width = '100%';
    wrapper.style.height = '100%';
    wrapper.style.zIndex = '9999';
    wrapper.style.pointerEvents = 'all';
    wrapper.style.display = 'flex';
    wrapper.style.justifyContent = 'center';
    wrapper.style.alignItems = 'center';

    // Force the parent to relative positioning
    const computedStyle = window.getComputedStyle(element);
    if (computedStyle.position === 'static' || !computedStyle.position) {
      element.style.position = 'relative';
    }

    // Main loader element
    const loader = document.createElement('div');
    loader.classList.add('element-loader');

    if (darken) loader.classList.add('darken');

    // Border radius applied here
    if (rounded) {
      loader.style.borderRadius =
        typeof rounded === 'string'
          ? rounded
          : '0.5rem'; // default value when rounded = true
    }

    // Spinner
    const spinner = document.createElement('div');
    spinner.classList.add('element-loader-spinner');

    loader.appendChild(spinner);

    // Text added inside the loader
    if (text) {
      const textEl = document.createElement('div');

      textEl.classList.add('element-loader-text');
      textEl.textContent = text;
      textEl.style.marginTop = '8px';
      textEl.style.fontSize = '0.9rem';
      textEl.style.fontWeight = '500';
      textEl.style.color = textColor;

      loader.appendChild(textEl);
    }

    wrapper.appendChild(loader);
    element.appendChild(wrapper);
  },

  /**
   * Unfreezes a previously frozen element
   *
   * @param {HTMLElement} element
   */
  unfreezeElement: function (element?: HTMLElement) {
    if (element) {
      const wrapper = element.querySelector('.element-loader-wrapper') as HTMLElement;
      if (wrapper) wrapper.remove();
    } else {
      // Global fallback: remove all loaders from the DOM
      document.querySelectorAll('.element-loader-wrapper')
        .forEach((el) => el.remove());
    }
  },
};
