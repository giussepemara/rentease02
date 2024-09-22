<template>
  <div class="product">
    <img :src="product.image" alt="Imagen del producto" />
    <h3>{{ product.name }}</h3>
    <p>Precio: {{ product.price }}</p>
    <button @click="addProductToCart">Añadir al carrito</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: ['product'],
  methods: {
    ...mapMutations(['addToCart']),
    addProductToCart() {
      // Agrega el producto al carrito con su imagen
      const productToAdd = {
        id: this.product.id,
        name: this.product.name,
        price: this.product.price,
        image: this.product.image, // Incluyendo la imagen del producto
      };
      this.addToCart(productToAdd);
    },
  },
};
</script>

<style scoped>
.product img {
  width: 150px;
  height: auto;
}
</style>
