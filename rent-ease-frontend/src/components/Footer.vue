<template>
  <v-footer color="primary" dark>
    <v-row justify="center" align="center" class="footer-content">
      <v-col class="text-center" cols="12" md="4">
        <h4>Sobre RentEase</h4>
        <p class="footer-description">
          RentEase es su solución confiable para alquileres. Ofrecemos una amplia gama de propiedades para satisfacer todas sus necesidades. Nuestro compromiso es hacer que su experiencia de alquiler sea sencilla y placentera.
        </p>
      </v-col>
      <v-col class="text-center" cols="12" md="4">
        <h4>Contacto</h4>
        <p>Email: support@rentease.com</p>
        <p>Teléfono: +1 234 567 890</p>
      </v-col>
      <v-col class="text-center" cols="12" md="4">
        <h4>Síguenos</h4>
        <v-icon large>mdi-facebook</v-icon>
        <v-icon large>mdi-twitter</v-icon>
        <v-icon large>mdi-instagram</v-icon>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col class="text-center">
        <p class="footer-text">&copy; 2024 RentEase. Todos los derechos reservados.</p>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer-content {
  padding: 20px 0;
}

.footer-description {
  font-size: 14px;
  margin-bottom: 10px;
}

.footer-text {
  margin: 0;
  font-size: 14px;
}

h4 {
  margin: 10px 0;
}
</style>
