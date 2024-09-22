import { createStore } from 'vuex';

// Módulo de ejemplo
const exampleModule = {
    state: () => ({
        exampleData: [],
    }),
    mutations: {
        SET_EXAMPLE_DATA(state, data) {
            state.exampleData = data;
        },
    },
    actions: {
        fetchExampleData({ commit }) {
            // Aquí puedes hacer una llamada a una API
            const data = []; // Reemplaza esto con tus datos
            commit('SET_EXAMPLE_DATA', data);
        },
    },
    getters: {
        getExampleData: (state) => state.exampleData,
    },
};

// Crear la tienda
const store = createStore({
    modules: {
        example: exampleModule,
    },
    state: {
        // Estado global si es necesario
    },
    mutations: {
        // Mutaciones globales
    },
    actions: {
        // Acciones globales
    },
    getters: {
        // Getters globales
    },
});

// Exportar la tienda
export default store;
