import {debounce} from '../functions/debounce';

/**
 * Autogrow applies automatic height growth to textarea elements.
 */
export class Autogrow {
  private textarea: HTMLTextAreaElement;
  private readonly onResizeDebounced: () => void;

  constructor (textarea: HTMLTextAreaElement) {
    this.textarea = textarea;
    this.onFocus = this.onFocus.bind(this);
    this.autogrow = this.autogrow.bind(this);
    this.onResizeDebounced = debounce(this.onResize.bind(this), 300);
    this.textarea.addEventListener('focus', this.onFocus);
  }

  destroy () {
    window.removeEventListener('resize', this.onResizeDebounced);
  }

  onFocus () {
    this.textarea.style.overflow = 'hidden';
    this.textarea.style.resize = 'none';
    this.textarea.style.boxSizing = 'border-box';
    this.autogrow();
    window.addEventListener('resize', this.onResizeDebounced);
    this.textarea.addEventListener('input', this.autogrow);
    this.textarea.removeEventListener('focus', this.onFocus);
  }

  onResize () {
    this.autogrow();
  }

  autogrow () {
    this.textarea.style.height = 'auto';
    this.textarea.style.height = this.textarea.scrollHeight + 'px';
  }

  static apply (textarea: HTMLTextAreaElement) {
    if (!(textarea as any).__autogrow) {
      (textarea as any).__autogrow = new Autogrow(textarea);
    }
  }

  /**
   * Applies autogrow to all existing textareas and watches for new ones via MutationObserver.
   */
  static init () {
    document.querySelectorAll<HTMLTextAreaElement>('textarea').forEach(Autogrow.apply);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node instanceof HTMLTextAreaElement) {
            Autogrow.apply(node);
          } else if (node instanceof Element) {
            node.querySelectorAll<HTMLTextAreaElement>('textarea').forEach(Autogrow.apply);
          }
        }
      }
    });

    observer.observe(document.body, {childList: true, subtree: true});
  }
}