// src/notification.js
import { createVuetify } from 'vuetify';

// Inicializa Vuetify (puede que ya esté en main.js)
const vuetify = createVuetify();

export function createNotification({ title, text, type }) {
    vuetify.framework.$notify({
        title,
        text,
        type,
    });
}