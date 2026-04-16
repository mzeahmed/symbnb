export declare const loader: {
    /**
     * Shows the page loader
     */
    show: () => void;
    /**
     * Hides the page loader
     */
    hide: () => void;
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
    freezeElement(element: HTMLElement, options?: {
        darken?: boolean;
        rounded?: string | boolean;
        text?: string;
        textColor?: string;
    }): void;
    /**
     * Unfreezes a previously frozen element
     *
     * @param {HTMLElement} element
     */
    unfreezeElement: (element?: HTMLElement) => void;
};
