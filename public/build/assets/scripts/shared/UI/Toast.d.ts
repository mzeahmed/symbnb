import 'notyf/notyf.min.css';
export declare class Toast {
    private notyf;
    success(message: string): void;
    error(message: string): void;
    info(message: string, iconHtml?: string): void;
    confirm(options: ConfirmOptions): Promise<{
        isConfirmed: boolean;
    }>;
}
export interface ConfirmOptions {
    title: string;
    text?: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
    confirmButtonColor?: string;
    cancelButtonColor?: string;
    reverseColors?: boolean;
}
export declare const toast: Toast;
