import type { AxiosInstance, CreateAxiosDefaults, AxiosRequestConfig } from "axios";
import axios from "axios";


export default defineNuxtPlugin(() => {
    const {
        public: { axios: axiosConfig }
    } = useRuntimeConfig();

    const defaultAxios: CreateAxiosDefaults = {
        ...axiosConfig,
    };
    const Axios: AxiosInstance = axios.create(defaultAxios);

    return {
        provide: {
            axios: {
                ...Axios,

                $get: <ResponseType>(url: string, config?: AxiosRequestConfig<Record<string, unknown>>) => {
                    return Axios.get<ResponseType>(url, config);
                },
                $post: <ResponseType>(url: string, data: Record<any, any>, config?: AxiosRequestConfig<Record<string, unknown>>) => {
                    return Axios.post<ResponseType>(url, data, config);
                },
                $put: <ResponseType>(url: string, data: Record<string, unknown>, config?: AxiosRequestConfig<Record<string, unknown>>) => {
                    return Axios.put<ResponseType>(url, data, config);
                },
                $delete: <ResponseType>(url: string, config?: AxiosRequestConfig<Record<string, unknown>>) => {
                    return Axios.delete<ResponseType>(url, config);
                },
                $patch: <ResponseType>(url: string, data: Record<string, unknown>, config?: AxiosRequestConfig<Record<string, unknown>>) => {
                    return Axios.patch<ResponseType>(url, data, config);
                },
            }
        }
    }
})