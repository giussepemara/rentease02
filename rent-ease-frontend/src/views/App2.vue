<template>
  <v-app>
    <v-app-bar app color="secondary" dark elevate="4">
      <v-toolbar-title>Aplicación 2</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="logout">Cerrar Sesión</v-btn>
    </v-app-bar>
    <v-main>
      <h1>Bienvenido a la Aplicación 2</h1>
      <p>Aquí puedes hacer algo especial después de iniciar sesión.</p>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App2',
  methods: {
    logout() {
      localStorage.removeItem('user'); // Eliminar usuario de localStorage
      this.$router.push('/login'); // Redirigir a la página de inicio de sesión
    }
  }
};
</script>

<style scoped>
/* Agrega tus estilos aquí */
</style>
