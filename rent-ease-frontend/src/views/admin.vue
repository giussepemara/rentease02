<template>
  <div>
    <h1>Admin Panel</h1>
    <form @submit.prevent="addProduct">
      <input v-model="newProduct.name" placeholder="Nombre del producto" />
      <input v-model="newProduct.price" type="number" placeholder="Precio" />
      <button type="submit">Agregar producto</button>
    </form>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - ${{ product.price }}
        <button @click="removeProduct(product.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newProduct: {
        name: '',
        price: 0,
      },
      products: [],
    };
  },
  methods: {
    addProduct() {
      const id = Date.now();
      const product = { ...this.newProduct, id };
      this.products.push(product);
      this.newProduct.name = '';
      this.newProduct.price = 0;
    },
    removeProduct(id) {
      this.products = this.products.filter(product => product.id !== id);
    },
  },
};
</script>

<style scoped>
/* Añade aquí tus estilos personalizados para el panel de administración */
</style>
