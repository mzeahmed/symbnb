/**
 * Debounce function that limits how often the original function can run.
 *
 * @param callback - The function to execute after the delay.
 * @param delay - The delay in ms before executing the function.
 * @param immediate - Whether to execute the function immediately.
 * @returns - A new function that can be called with the delay behavior.
 */
export function debounce<T extends unknown[]> (
  callback: (...args: T) => void,
  delay: number = 300,
  immediate?: boolean
): (...args: T) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function (this: unknown, ...args: T): void {
    const context = this;
    const callNow = immediate && !timer;

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null;
      if (!immediate) callback.apply(context, args);
    }, delay);

    if (callNow) callback.apply(context, args);
  };
}