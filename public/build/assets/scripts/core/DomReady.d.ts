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
     * Executes the callback when the DOM is ready.
     */
    static run(callback: () => void): void;
}
