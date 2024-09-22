import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Importar los estilos globales de Vuetify
import { aliases, mdi } from 'vuetify/iconsets/mdi'; // Iconos opcionales

export default createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    theme: {
        defaultTheme: 'light', // Establecer el tema predeterminado
        themes: {
            light: {
                colors: {
                    primary: '#1976D2',
                    secondary: '#424242',
                    accent: '#82B1FF',
                    error: '#FF5252',
                    info: '#2196F3',
                    success: '#4CAF50',
                    warning: '#FFC107',
                },
            },
            dark: {
                colors: {
                    primary: '#BB86FC',
                    secondary: '#03DAC6',
                    accent: '#FF4081',
                    error: '#CF6679',
                    info: '#03A9F4',
                    success: '#4CAF50',
                    warning: '#FFEB3B',
                },
            },
        },
    },
    display: {
        mobileBreakpoint: 'sm', // Cambia este valor si es necesario
    },
    // Opciones adicionales de Vuetify pueden ser configuradas aquí
});
