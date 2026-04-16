/**
 * Autogrow applies automatic height growth to textarea elements.
 */
export declare class Autogrow {
    private textarea;
    private readonly onResizeDebounced;
    constructor(textarea: HTMLTextAreaElement);
    destroy(): void;
    onFocus(): void;
    onResize(): void;
    autogrow(): void;
    static apply(textarea: HTMLTextAreaElement): void;
    /**
     * Applies autogrow to all existing textareas and watches for new ones via MutationObserver.
     */
    static init(): void;
}
