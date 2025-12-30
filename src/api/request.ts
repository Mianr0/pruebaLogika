import axios from "axios";
import { useAuthStore } from "../context/store";

// Crear instancia de axios
export const apiClient = axios.create({
    baseURL: "https://dev.api.bekindnetwork.com/api/v1"
});

// Interceptor para agregar el token dinámicamente en cada request
apiClient.interceptors.request.use(
    (config) => {
        // Obtener el token actual del store
        const token = useAuthStore.getState().token;
        
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);