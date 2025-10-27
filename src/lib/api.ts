import { API_BASE_URL } from '@/config/env';
import axios from 'axios';


const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export interface RegisterData {
    email: string;
    password: string;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface RegisterResponse {
    status: 'success';
    message: string;
    user: {
        _id: string;
        email: string;
    };
}

export interface LoginResponse {
    status: 'success';
    message: string;
    token: string;
    user: {
        _id: string;
        email: string;
    };
}

export const registerUser = async (data: RegisterData): Promise<RegisterResponse> => {
    const response = await apiClient.post<RegisterResponse>('/user/register', data);
    return response.data;
};

export const loginUser = async (data: LoginData): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>('/user/login', data);
    return response.data;
};

export default apiClient;
