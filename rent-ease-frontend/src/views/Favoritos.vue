<template>
  <div>
    <h1>Mis Productos Favoritos</h1>
    <ul v-if="favoritos.length">
      <li v-for="producto in favoritos" :key="producto.id">
        {{ producto.nombre }}
        <button @click="eliminarFavorito(producto.id)">Eliminar</button>
      </li>
    </ul>
    <p v-else>No tienes productos en favoritos.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favoritos: []
    };
  },
  created() {
    this.favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  },
  methods: {
    eliminarFavorito(id) {
      this.favoritos = this.favoritos.filter(p => p.id !== id);
      localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
    }
  }
}
</script>
