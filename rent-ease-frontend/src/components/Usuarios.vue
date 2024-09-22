<template>
  <div>
    <h1>Lista de Usuarios</h1>
    <ul>
      <li v-for="usuario in usuarios" :key="usuario.id">
        {{ usuario.nombre }} ({{ usuario.email }})
      </li>
    </ul>
  </div>
</template>

<script>
import { api } from '@/services/api';

export default {
  data() {
    return {
      usuarios: [],
    };
  },
  mounted() {
    this.cargarUsuarios();
  },
  methods: {
    async cargarUsuarios() {
      try {
        const response = await api.obtenerUsuarios();
        this.usuarios = response.data; // Asegúrate de que la estructura de la respuesta sea correcta
      } catch (error) {
        console.error('Error al cargar usuarios:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Añade tus estilos aquí */
</style>
