/**
 * Allows executing a function when the DOM is fully loaded.
 * Avoids repeating document.addEventListener('DOMContentLoaded', ...)
 *
 * Usage:
 * DomReady.run(() => {
 *   console.log('DOM ready');
 * });
 */
export class DomReady {
  /**
   * Executes the callback when the entire page (including images and subframes) is loaded.
   * @param {() => void} callback
   * @returns {DomReady}
   */
  public onLoad (callback: () => void): DomReady {
    if (document.readyState === 'complete') {
      callback();
    } else {
      window.addEventListener('load', callback, {once: true});
    }

    return this;
  }

  /**
   * Executes the callback when the DOM is ready (but before images and subframes are loaded).
   * @param {() => void} callback
   * @returns {DomReady}
   */
  public ready (callback: () => void): DomReady {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }

    return this;
  }
}

export const domReady = new DomReady();
