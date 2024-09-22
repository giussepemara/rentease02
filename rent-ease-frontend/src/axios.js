import axios from 'axios';

// Configuración global de Axios
const apiClient = axios.create({
    baseURL: 'http://48.209.32.190/', // Cambia esta URL base si es necesario
    headers: {
        'Content-Type': 'application/json'
    }
});

export default apiClient;
