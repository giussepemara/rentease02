<template>
  <div class="center-section">
    <!-- Banner de bienvenida -->
    <div class="banner">
      <h1>Bienvenido a RentEase</h1>
      <p>Alquiler y compra de herramientas de forma fácil y segura</p>
      <v-btn @click="explorarCatalogo" color="secondary" aria-label="Explorar Catálogo">Explorar Catálogo</v-btn>
    </div>

    <!-- Sección de catálogo destacado -->
    <div class="featured-catalog">
      <h2>Herramientas para Alquilar</h2>
      <div class="catalog-grid">
        <div class="product-item" v-for="producto in productosAlquiler" :key="producto.id">
          <img :src="producto.imagen" :alt="`Imagen de ${producto.nombre}`" class="product-image" />
          <p class="product-name">{{ producto.nombre }}</p>
          <p class="price">Precio por día: ${{ producto.precio }}</p>
          <v-btn @click="verProducto(producto.id, 'alquiler')" color="primary" aria-label="Ver más sobre {{ producto.nombre }}">Ver más</v-btn>
        </div>
      </div>

      <h2>Herramientas para Comprar</h2>
      <div class="catalog-grid">
        <div class="product-item" v-for="producto in productosCompra" :key="producto.id">
          <img :src="producto.imagen" :alt="`Imagen de ${producto.nombre}`" class="product-image" />
          <p class="product-name">{{ producto.nombre }}</p>
          <p class="price">Precio: ${{ producto.precio }}</p>
          <v-btn @click="verProducto(producto.id, 'compra')" color="primary" aria-label="Ver más sobre {{ producto.nombre }}">Ver más</v-btn>
        </div>
      </div>
    </div>

    <!-- Buscador de herramientas -->
    <div class="search-bar">
      <v-text-field
          v-model="buscarTexto"
          label="Buscar herramientas o categorías..."
          solo-inverted
          aria-label="Buscar herramientas"
      ></v-text-field>
      <v-btn @click="buscar" color="primary" aria-label="Buscar">Buscar</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buscarTexto: '',
      productosAlquiler: [
        { id: 1, nombre: 'Andamio', imagen: '/assets/alquiler/andamio.jpg', precio: 20 },
        { id: 2, nombre: 'Bulldozer', imagen: '/assets/alquiler/bulldozer.jpg', precio: 100 },
        { id: 3, nombre: 'Compresor', imagen: '/assets/alquiler/compresor.jpg', precio: 50 },
        { id: 4, nombre: 'Excavadora', imagen: '/assets/alquiler/excavadora.jpg', precio: 200 },
        { id: 5, nombre: 'Grúa', imagen: '/assets/alquiler/grua.jpg', precio: 150 }
      ],
      productosCompra: [
        { id: 1, nombre: 'Llave Inglesa', imagen: '/assets/compra/llave_inglesa.jpg', precio: 30 },
        { id: 2, nombre: 'Martillo', imagen: '/assets/compra/martillo.jpg', precio: 10 },
        { id: 3, nombre: 'Nivel', imagen: '/assets/compra/nivel.jpg', precio: 15 },
        { id: 4, nombre: 'Sierra', imagen: '/assets/compra/sierra.jpg', precio: 40 },
        { id: 5, nombre: 'Taladro', imagen: '/assets/compra/taladro.jpg', precio: 60 }
      ]
    };
  },
  methods: {
    explorarCatalogo() {
      this.$router.push('/catalogo');
    },
    verProducto(id, categoria) {
      this.$router.push(`/producto/${categoria}/${id}`);
    },
    buscar() {
      this.$router.push({ path: '/catalogo', query: { q: this.buscarTexto } });
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
  border-radius: 10px;
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
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 200px;
  transition: transform 0.3s;
}

.product-item:hover {
  transform: scale(1.05);
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.product-name {
  font-weight: bold;
  margin: 10px 0 5px;
}

.price {
  font-weight: bold;
  margin-top: 5px;
}

.search-bar {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.search-bar input {
  width: 300px;
}
</style>
