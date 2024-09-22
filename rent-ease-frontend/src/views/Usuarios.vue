<template>
  <div class="user-list">
    <h1>Lista de Usuarios</h1>

    <div v-if="error" class="error-message">{{ error }}</div>

    <ul v-if="usuarios.length > 0">
      <li v-for="usuario in usuarios" :key="usuario.id" class="user-item">
        <div class="user-info">
          <strong>{{ usuario.nombre }}</strong>
          <span>{{ usuario.correo }}</span>
        </div>
      </li>
    </ul>

    <p v-else>No se encontraron usuarios.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      usuarios: [],
      error: ''
    };
  },
  mounted() {
    this.obtenerUsuarios();
  },
  methods: {
    async obtenerUsuarios() {
      try {
        const response = await axios.get('http://48.209.32.190/usuarios');
        if (response.data && Array.isArray(response.data)) {
          this.usuarios = response.data.length > 0 ? response.data : [];
          if (this.usuarios.length === 0) {
            this.error = 'No se encontraron usuarios.';
          }
        }
      } catch (error) {
        this.error = 'Ocurrió un error al conectar con el servidor.';
      }
    }
  }
};
</script>

<style scoped>
.user-list {
  text-align: center;
  margin: 20px;
}

.error-message {
  color: red;
  margin-bottom: 20px;
}

.user-item {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 8px;
  margin: 5px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
