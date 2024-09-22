import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Importa los estilos de Vuetify
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Importaciones adicionales (Router y Store)
import router from './router';
import store from './store';
import { createNotification } from './notification'; // Asegúrate de que esta línea esté aquí

// Configuración de Vuetify
const vuetify = createVuetify({
    components,
    directives,
});

// Crear la aplicación Vue
const app = createApp(App);

// Usar Vuetify, Router y Store
app.use(vuetify);
app.use(router);
app.use(store);

// Manejo de errores global
app.config.errorHandler = (err, vm, info) => {
    console.error('Error:', err);
    console.warn('Error Info:', info);
    // Mostrar un mensaje de error al usuario
    if (err instanceof Error) {
        createNotification({
            title: 'Error',
            text: 'Ocurrió un error inesperado. Por favor, inténtelo de nuevo más tarde.',
            type: 'error',
        });
    }
};

// Montar la aplicación en el div con id 'app'
app.mount('#app');
