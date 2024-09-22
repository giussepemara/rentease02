<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>RentEase</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn text to="/" class="nav-btn">Home</v-btn>
    <v-btn text to="/catalog" class="nav-btn">Catalog</v-btn>
    <v-btn text to="/login" class="nav-btn">Login</v-btn>
    <v-btn text to="/register" class="nav-btn">Register</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
.nav-btn {
  color: #ffffff;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.3s;
  padding: 10px 15px;
}

.nav-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.v-toolbar-title {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1px;
}
</style>
