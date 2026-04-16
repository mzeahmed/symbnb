export interface ApiResponse<T = any> {
    success: boolean;
    message: string | null;
    data: T | null;
    errors: T | null;
    meta: T | null;
}
