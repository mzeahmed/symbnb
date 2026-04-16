/**
 * Debounce function that limits how often the original function can run.
 *
 * @param callback - The function to execute after the delay.
 * @param delay - The delay in ms before executing the function.
 * @param immediate - Whether to execute the function immediately.
 * @returns - A new function that can be called with the delay behavior.
 */
export declare function debounce<T extends unknown[]>(callback: (...args: T) => void, delay?: number, immediate?: boolean): (...args: T) => void;
