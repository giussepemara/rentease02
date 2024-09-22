<template>
  <div class="search-container">
    <input
        v-model="searchQuery"
        class="search-input"
        placeholder="Buscar productos..."
    />
    <select v-model="selectedCategory" class="category-select">
      <option value="">Todas las categorías</option>
      <option v-for="category in categories" :key="category">{{ category }}</option>
    </select>

    <ul class="product-list">
      <li v-for="product in filteredProducts" :key="product.id" class="product-item">
        {{ product.name }} - ${{ product.price }}
      </li>
      <li v-if="filteredProducts.length === 0" class="no-results">No se encontraron productos.</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      selectedCategory: '',
      products: [
        { id: 1, name: 'Producto 1', category: 'A', price: 10 },
        { id: 2, name: 'Producto 2', category: 'B', price: 15 },
        { id: 3, name: 'Producto 3', category: 'A', price: 8 }
      ],
      categories: ['A', 'B']
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesCategory = this.selectedCategory ? product.category === this.selectedCategory : true;
        return matchesSearch && matchesCategory;
      });
    }
  }
};
</script>

<style scoped>
.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

.search-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  margin-bottom: 10px;
  transition: border-color 0.3s;
}

.search-input:focus {
  border-color: #007bff;
  outline: none;
}

.category-select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  margin-bottom: 20px;
}

.product-list {
  list-style-type: none;
  padding: 0;
  width: 300px;
}

.product-item {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 5px;
  transition: background-color 0.3s;
}

.product-item:hover {
  background-color: #f0f0f0;
}

.no-results {
  color: #ff0000; /* Color rojo para el mensaje de no resultados */
  text-align: center;
}
</style>
