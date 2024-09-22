// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://48.209.32.190';

export const api = {
    obtenerUsuarios: () => axios.get(`${API_BASE_URL}/usuarios`),
    obtenerAlquileres: () => axios.get(`${API_BASE_URL}/alquileres`),
    obtenerPagos: () => axios.get(`${API_BASE_URL}/pagos`),
    obtenerResúmenes: () => axios.get(`${API_BASE_URL}/resumenes`),
    obtenerVentas: () => axios.get(`${API_BASE_URL}/ventas`),
    obtenerCarrito: () => axios.get(`${API_BASE_URL}/carrito`),
    obtenerProductos: () => axios.get(`${API_BASE_URL}/producto`),
    obtenerMonitoreoGPS: () => axios.get(`${API_BASE_URL}/monitoreo_gps`),
    obtenerMetodoPago: () => axios.get(`${API_BASE_URL}/metodo_pago`),
    obtenerHistorial: () => axios.get(`${API_BASE_URL}/historial`),
    obtenerCategorias: () => axios.get(`${API_BASE_URL}/categorias`),
};
