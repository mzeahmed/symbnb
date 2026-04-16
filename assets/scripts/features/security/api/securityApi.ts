import {ApiResponse} from '../../../interfaces/ApiResponse';
import {api} from '../../../core/Api';

export const securityApi = {
  register: async (data: FormData): Promise<ApiResponse> => {
    return api.post('/register', data);
  }
};
