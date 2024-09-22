<template>
  <div class="alquileres-container">
    <h1 class="title">Lista de Alquileres</h1>
    <p v-if="error" class="error-message">{{ error }}</p>

    <ul v-if="alquileres.length > 0" class="alquileres-list">
      <li v-for="alquiler in alquileres" :key="alquiler.id" class="alquiler-item">
        <span class="cliente">{{ alquiler.cliente }}</span> -
        <span class="fecha">{{ formatFecha(alquiler.fecha) }}</span>
      </li>
    </ul>

    <p v-else>No se encontraron alquileres.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      alquileres: [],
      error: ''
    };
  },
  mounted() {
    this.obtenerAlquileres();
  },
  methods: {
    async obtenerAlquileres() {
      try {
        const response = await axios.get('http://48.209.32.190/alquileres');
        if (response.data && Array.isArray(response.data) && response.data.length > 0) {
          this.alquileres = response.data;
        } else {
          this.error = 'No se encontraron alquileres.';
        }
      } catch (error) {
        this.error = 'Ocurrió un error al conectar con el servidor.';
      }
    },
    formatFecha(fecha) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(fecha).toLocaleDateString('es-ES', options);
    }
  }
};
</script>

<style scoped>
.alquileres-container {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.error-message {
  color: #d9534f; /* Color rojo para mensajes de error */
  margin-bottom: 10px;
}

.alquileres-list {
  list-style-type: none;
  padding: 0;
}

.alquiler-item {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  transition: background-color 0.3s;
}

.alquiler-item:hover {
  background-color: #f1f1f1; /* Color suave al pasar el ratón */
}

.cliente {
  font-weight: bold;
}

.fecha {
  color: #777; /* Color gris para la fecha */
}
</style>
