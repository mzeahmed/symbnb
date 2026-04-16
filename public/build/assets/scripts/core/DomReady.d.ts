/**
 * Allows executing a function when the DOM is fully loaded.
 * Avoids repeating document.addEventListener('DOMContentLoaded', ...)
 *
 * Usage:
 * DomReady.run(() => {
 *   console.log('DOM ready');
 * });
 */
export declare class DomReady {
    /**
     * Executes the callback when the entire page (including images and subframes) is loaded.
     * @param {() => void} callback
     * @returns {DomReady}
     */
    onLoad(callback: () => void): DomReady;
    /**
     * Executes the callback when the DOM is ready (but before images and subframes are loaded).
     * @param {() => void} callback
     * @returns {DomReady}
     */
    ready(callback: () => void): DomReady;
}
export declare const domReady: DomReady;
