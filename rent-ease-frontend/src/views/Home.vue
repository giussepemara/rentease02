<template>
  <div class="center-section">
    <!-- Banner de bienvenida -->
    <div class="banner">
      <h1>Bienvenido a RentEase</h1>
      <p>Alquiler y compra de herramientas de forma fácil y segura</p>
      <v-btn @click="explorarCatalogo" color="secondary">Explorar Catálogo</v-btn>
    </div>

    <!-- Sección de catálogo destacado -->
    <div class="featured-catalog">
      <h2>Herramientas Destacadas</h2>
      <div class="catalog-grid">
        <div class="product-item" v-for="producto in productos" :key="producto.id">
          <img :src="producto.imagen" :alt="producto.nombre" class="product-image">
          <p>{{ producto.nombre }}</p>
          <v-btn @click="verProducto(producto.id)" color="primary">Ver más</v-btn>
        </div>
      </div>
    </div>

    <!-- Buscador de herramientas -->
    <div class="search-bar">
      <v-text-field v-model="buscarTexto" placeholder="Buscar herramientas o categorías..." outlined />
      <v-btn @click="buscar" color="secondary">Buscar</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buscarTexto: '',
      productos: [
        { id: 1, nombre: 'Taladro Inalámbrico', imagen: '/assets/taladro.jpg' },
        { id: 2, nombre: 'Martillo Demoledor', imagen: '/assets/martillo.jpg' },
        // Agrega más productos destacados aquí
      ]
    };
  },
  methods: {
    explorarCatalogo() {
      this.$router.push('/catalogo');
    },
    verProducto(id) {
      this.$router.push(`/producto/${id}`);
    },
    buscar() {
      if (this.buscarTexto.trim()) {
        this.$router.push({ path: '/catalogo', query: { q: this.buscarTexto } });
      }
    }
  }
};
</script>

<style scoped>
.center-section {
  text-align: center;
  margin: 20px;
}

.banner {
  background-color: #f5a623;
  padding: 30px;
  color: white;
  border-radius: 8px;
}

.featured-catalog {
  margin-top: 40px;
}

.catalog-grid {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.product-item {
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.product-item:hover {
  transform: scale(1.05);
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.search-bar {
  margin-top: 30px;
}

.search-bar v-text-field {
  width: 300px;
}

.search-bar button {
  margin-left: 10px;
}
</style>
