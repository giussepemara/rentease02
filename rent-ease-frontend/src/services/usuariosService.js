import axios from 'axios';

const API_URL = 'http://48.209.32.190';

export const obtenerUsuarios = async () => {
    try {
        const response = await axios.get(`${API_URL}/usuarios`);
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener usuarios.');
    }
};

export const crearUsuario = async (usuario) => {
    try {
        const response = await axios.post(`${API_URL}/usuarios`, usuario);
        return response.data;
    } catch (error) {
        throw new Error('Error al crear usuario.');
    }
};
import { obtenerUsuarios } from '../services/usuariosService';

export default {
    data() {
        return {
            usuarios: [],
            error: ''
        };
    },
    async mounted() {
        try {
            this.usuarios = await obtenerUsuarios();
        } catch (error) {
            this.error = 'No se pudieron cargar los usuarios.';
        }
    }
};
