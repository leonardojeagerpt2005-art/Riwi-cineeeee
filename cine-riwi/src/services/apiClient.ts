// src/services/apiClient.ts
import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Interceptor de Peticiones (Adjuntar JWT)
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Interceptor de Respuestas (Manejo global de errores HTTP)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        // Redirigir a login o refrescar token
        localStorage.removeItem("token");
      } else if (status === 429) {
        console.warn("Demasiadas solicitudes. Por favor espera.");
      }
    }
    return Promise.reject(error);
  },
);

export default apiClient;
