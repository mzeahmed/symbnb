import { ApiResponse } from '../interfaces/ApiResponse';
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type Payload = FormData | Record<string, unknown>;
interface RequestConfig {
    headers?: Record<string, string>;
    timeout?: number;
    credentials?: RequestCredentials;
}
export declare class Api {
    private readonly defaultTimeout;
    get<T = unknown>(url: string, payload?: Payload, config?: RequestConfig): Promise<ApiResponse<T>>;
    post<T = unknown>(url: string, payload?: Payload, config?: RequestConfig): Promise<ApiResponse<T>>;
    put<T = unknown>(url: string, payload?: Payload, config?: RequestConfig): Promise<ApiResponse<T>>;
    delete<T = unknown>(url: string, payload?: Payload, config?: RequestConfig): Promise<ApiResponse<T>>;
    request<T = unknown>(method: HttpMethod, rawUrl: string, payload?: Payload, config?: RequestConfig): Promise<ApiResponse<T>>;
    private fetch;
    private buildErrorResponse;
    private payloadHandler;
    private isApiResponse;
}
export declare const api: Api;
export {};
