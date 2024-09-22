<template>
  <div class="producto-detalles">
    <h1>{{ producto.nombre }}</h1>
    <p class="descripcion">{{ producto.descripcion }}</p>
    <p class="precio">${{ producto.precio.toFixed(2) }}</p>
    <button @click="addToFavorites(producto)" class="favorito-btn">
      Añadir a Favoritos
    </button>
    <p v-if="mensaje" class="mensaje">{{ mensaje }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      producto: {},
      mensaje: ''
    };
  },
  created() {
    // Suponiendo que el producto se recibe por props o se obtiene de un API
    this.fetchProducto();
  },
  methods: {
    fetchProducto() {
      // Aquí podrías obtener el producto de una API o de props
      // Ejemplo: this.producto = this.$route.params.producto; (según tu implementación)
    },
    addToFavorites(producto) {
      const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
      if (!favoritos.find(p => p.id === producto.id)) {
        favoritos.push(producto);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        this.mensaje = 'Producto añadido a favoritos';
      } else {
        this.mensaje = 'El producto ya está en favoritos';
      }

      // Limpiar el mensaje después de 3 segundos
      setTimeout(() => {
        this.mensaje = '';
      }, 3000);
    }
  }
}
</script>

<style scoped>
.producto-detalles {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 400px;
  margin: auto;
}

.descripcion {
  font-size: 16px;
  color: #555;
}

.precio {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
}

.favorito-btn {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.favorito-btn:hover {
  background-color: #0056b3;
}

.mensaje {
  margin-top: 10px;
  color: green;
  font-weight: bold;
}
</style>
