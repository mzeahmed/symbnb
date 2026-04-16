import {ApiResponse} from '../interfaces/ApiResponse';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type Payload = FormData | Record<string, unknown>;

interface RequestConfig {
  headers?: Record<string, string>;
  timeout?: number;
  credentials?: RequestCredentials;
}

export class Api {
  private readonly defaultTimeout = 15000;

  public get<T = unknown> (
    url: string,
    payload?: Payload,
    config: RequestConfig = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>('GET', url, payload, config);
  }

  public post<T = unknown> (
    url: string,
    payload?: Payload,
    config: RequestConfig = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>('POST', url, payload, config);
  }

  public put<T = unknown> (url: string, payload?: Payload, config: RequestConfig = {}): Promise<ApiResponse<T>> {
    return this.request<T>('PUT', url, payload, config);
  }

  public delete<T = unknown> (url: string, payload?: Payload, config: RequestConfig = {}): Promise<ApiResponse<T>> {
    return this.request<T>('DELETE', url, payload, config);
  }

  public async request<T = unknown> (
    method: HttpMethod,
    rawUrl: string,
    payload?: Payload,
    config: RequestConfig = {}
  ): Promise<ApiResponse<T>> {
    const controller = new AbortController();
    const timeout = config.timeout ?? this.defaultTimeout;

    const timeoutId = setTimeout(() => {
      controller.abort();
    }, timeout);

    const options: RequestInit = {
      method,
      signal: controller.signal,
      credentials: config.credentials ?? 'same-origin',
      headers: {
        ...config.headers,
      },
    };

    const url = payload ? this.payloadHandler(method, payload, rawUrl, options) : rawUrl;

    return this.fetch<T>(url, options, timeoutId);
  }

  private async fetch<T = unknown> (
    url: string,
    options: RequestInit,
    timeoutId: ReturnType<typeof setTimeout>
  ): Promise<ApiResponse<T>> {
    try {
      const response = await globalThis.fetch(url, options);
      const contentType = response.headers.get('content-type') || '';

      if (!response.ok) {
        return this.buildErrorResponse<T>(response, contentType);
      }

      if (response.status === 204 || response.status === 205) {
        return {
          success: true,
          message: 'success',
          data: null,
          errors: null,
          meta: null,
        };
      }

      if (contentType.includes('json')) {
        const payload = await response.json() as Partial<ApiResponse<T>> | T;

        if (this.isApiResponse<T>(payload)) {
          return {
            success: payload.success ?? true,
            message: payload.message ?? 'success',
            data: payload.data ?? null,
            errors: payload.errors ?? null,
            meta: payload.meta ?? null,
          };
        }

        return {
          success: true,
          message: 'success',
          data: payload as T,
          errors: null,
          meta: null,
        };
      }

      const textContent = await response.text();
      return {
        success: true,
        message: 'success',
        data: textContent as T,
        errors: null,
        meta: null,
      };
    } catch (error) {
      const isAbortError = error instanceof DOMException && error.name === 'AbortError';

      return {
        success: false,
        message: isAbortError ? 'Request timeout' : 'Network error',
        data: null,
        errors: isAbortError ? {timeout: true} as unknown as T : error as T,
        meta: null,
      };
    } finally {
      clearTimeout(timeoutId);
    }
  }

  private async buildErrorResponse<T> (response: Response, contentType: string): Promise<ApiResponse<T>> {
    const fallbackMessage = `HTTP ${response.status}`;

    if (contentType.includes('json')) {
      const payload = await response.json() as unknown;

      if (this.isApiResponse<T>(payload)) {
        return {
          success: false,
          message: payload.message ?? fallbackMessage,
          data: payload.data ?? null,
          errors: payload.errors ?? null,
          meta: payload.meta ?? null,
        };
      }

      const raw = payload as Record<string, unknown>;

      return {
        success: false,
        message: typeof raw.message === 'string' ? raw.message : fallbackMessage,
        data: (raw.data as T | null | undefined) ?? null,
        errors: ((raw.errors as T | undefined) ?? (payload as T)),
        meta: (raw.meta as T | null | undefined) ?? null,
      };
    }

    const text = await response.text();
    return {
      success: false,
      message: text || fallbackMessage,
      data: null,
      errors: null,
      meta: null,
    };
  }

  private payloadHandler (
    method: HttpMethod,
    payload: Payload,
    url: string,
    options: RequestInit
  ): string {
    if (method === 'GET') {
      const qs = new URLSearchParams();

      if (payload instanceof FormData) {
        payload.forEach((value, key) => {
          if (value !== undefined && value !== null) {
            qs.append(key, String(value));
          }
        });
      } else {
        Object.entries(payload).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            qs.append(key, String(value));
          }
        });
      }

      const queryString = qs.toString();
      if (queryString) {
        return url + (url.includes('?') ? '&' : '?') + queryString;
      }

      return url;
    }

    if (payload instanceof FormData) {
      options.body = payload;
      return url;
    }

    options.headers = {
      ...(options.headers as Record<string, string>),
      'Content-Type': 'application/json',
    };
    options.body = JSON.stringify(payload);

    return url;
  }

  private isApiResponse<T = unknown> (value: unknown): value is Partial<ApiResponse<T>> {
    if (typeof value !== 'object' || value === null) {
      return false;
    }

    return 'success' in value || 'message' in value || 'data' in value || 'errors' in value || 'meta' in value;
  }
}

export const api = new Api();
