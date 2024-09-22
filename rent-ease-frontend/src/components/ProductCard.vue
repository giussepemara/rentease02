<template>
  <v-card>
    <v-card-title>{{ producto.nombre }}</v-card-title>
    <v-card-subtitle>{{ producto.precio }} USD</v-card-subtitle>
    <v-card-actions>
      <v-btn @click="$emit('agregar', producto)">Agregar al Carrito</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    producto: Object,
  },
};
</script>
