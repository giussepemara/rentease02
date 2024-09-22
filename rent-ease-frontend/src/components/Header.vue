<template>
  <header>
    <nav class="nav-container">
      <router-link to="/" class="nav-btn">Inicio</router-link>
      <router-link to="/catalog" class="nav-btn">Catálogo</router-link>
      <router-link to="/contact" class="nav-btn">Contáctenos</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.nav-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b5651d; /* Color marrón */
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Sombra sutil */
}

.nav-btn {
  color: white;
  padding: 10px 20px;
  margin: 0 10px;
  text-decoration: none;
  background-color: orange;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.2s; /* Transición suave */
}

.nav-btn:hover {
  background-color: #ff9900; /* Un tono más claro de naranja */
  transform: scale(1.05); /* Efecto de aumento al pasar el ratón */
}

@media (max-width: 600px) {
  .nav-btn {
    padding: 8px 15px; /* Tamaño reducido en pantallas pequeñas */
    margin: 0 5px; /* Menor margen en pantallas pequeñas */
  }
}
</style>
