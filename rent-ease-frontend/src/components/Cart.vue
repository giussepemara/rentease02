<template>
  <div class="cart">
    <h2>Carrito de Compras</h2>
    <div v-if="cartItems.length === 0" class="empty-cart">
      El carrito está vacío.
    </div>
    <div v-else>
      <div v-for="(product, index) in cartItems" :key="index" class="cart-item">
        <img :src="product.image" alt="Imagen del producto" class="cart-item-image" />
        <div class="product-details">
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-price">Precio: {{ product.price }} €</p>
        </div>
        <button class="remove-button" @click="removeProduct(product.id)">
          Eliminar
        </button>
      </div>
      <div class="cart-total">
        <h3>Total: {{ cartTotal }} €</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters(['cartItems', 'cartTotal']),
  },
  methods: {
    ...mapMutations(['removeFromCart']),
    removeProduct(productId) {
      this.removeFromCart(productId);
    },
  },
};
</script>

<style scoped>
.cart {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.empty-cart {
  font-size: 18px;
  color: #777;
  text-align: center;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.cart-item-image {
  width: 100px;
  height: auto;
  margin-right: 20px;
  border-radius: 5px;
}

.product-details {
  flex: 1;
}

.product-name {
  font-size: 18px;
  font-weight: 600;
}

.product-price {
  font-size: 16px;
  color: #555;
}

.remove-button {
  background-color: #ff3b3b;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.remove-button:hover {
  background-color: #ff1c1c;
}

.cart-total {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}
</style>
