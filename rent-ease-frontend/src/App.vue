<template>
  <v-app>
    <v-app-bar app color="primary" dark elevate="4">
      <v-toolbar-title class="title">RentEase</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
          text
          to="/"
          class="nav-btn"
          aria-label="Inicio"
          :aria-current="isCurrentRoute('/') ? 'page' : null"
      >Inicio</v-btn>

      <v-btn
          text
          to="/catalog"
          class="nav-btn"
          aria-label="Catálogo"
          :aria-current="isCurrentRoute('/catalog') ? 'page' : null"
      >Catálogo</v-btn>

      <v-btn
          text
          to="/login"
          class="nav-btn"
          aria-label="Iniciar Sesión"
          :aria-current="isCurrentRoute('/login') ? 'page' : null"
      >Iniciar Sesión</v-btn>

      <v-btn
          text
          to="/register"
          class="nav-btn"
          aria-label="Registrarse"
          :aria-current="isCurrentRoute('/register') ? 'page' : null"
      >Registrarse</v-btn>
    </v-app-bar>

    <v-main>
      <transition name="fade">
        <router-view />
      </transition>
      <div class="special-action">
        <v-btn
            color="secondary"
            @click="handleSpecialAction"
            class="action-btn"
            aria-label="Acción Especial"
        >Acción Especial</v-btn>
      </div>
    </v-main>

    <v-footer color="primary" dark>
      <v-row justify="center" align="center">
        <v-col class="text-center">
          <p class="footer-text">&copy; 2024 RentEase. Todos los derechos reservados.</p>
          <p class="footer-text">
            Contáctanos:
            <a href="mailto:support@rentease.com" class="footer-link">support@rentease.com</a>
          </p>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleSpecialAction() {
      this.$notify({
        title: 'Acción Especial',
        text: '¡Acción especial ejecutada!',
        type: 'info',
      });
    },
    isCurrentRoute(route) {
      return this.$route.path === route;
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 28px;
  font-weight: bold;
}

.nav-btn {
  color: #ffffff;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.3s;
}

.nav-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.special-action {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.action-btn {
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s;
}

.action-btn:hover {
  background-color: #ff4081;
  transform: scale(1.05);
}

.v-footer {
  padding: 16px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.footer-text {
  margin: 0;
  font-size: 14px;
}

.footer-link {
  color: #ffeb3b;
  text-decoration: underline;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #ffd600;
}

/* Estilos de transición */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to { /* .fade-leave-active en <2.1.8 */
  opacity: 0;
}

/* Estilos responsivos */
@media (max-width: 600px) {
  .nav-btn {
    padding: 8px 12px;
  }

  .title {
    font-size: 24px;
  }

  .action-btn {
    padding: 8px 16px;
  }

  .footer-text {
    font-size: 12px;
  }
}

/* Mejoras de accesibilidad */
.nav-btn:focus,
.action-btn:focus {
  outline: 2px dashed #ffeb3b;
  outline-offset: 2px;
}
</style>
