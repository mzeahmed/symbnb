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
   * Executes the callback when the DOM is ready.
   */
  public static run(callback: () => void): void {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  }
}
