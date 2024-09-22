import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../components/Login.vue';
import Register from '../views/Register.vue';
import Catalog from '../views/Catalog.vue';
import Admin from '../views/Admin.vue'; // Asegúrate de que Admin.vue exista
import App2 from '../views/App2.vue'; // Importa el nuevo componente

// Define las rutas
const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/catalog', name: 'Catalog', component: Catalog },
    { path: '/app2', name: 'App2', component: App2 }, // Nueva ruta para App2
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        meta: { requiresAuth: true, requiresAdmin: true }
    }
];

// Crear el router
const router = createRouter({
    history: createWebHistory(),
    routes
});

// Guard de navegación para verificar la autenticación y roles
router.beforeEach((to, from, next) => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (to.meta.requiresAuth && !user) {
        next('/login'); // Redirige a login si no hay usuario
    } else if (to.meta.requiresAdmin && user?.role !== 'admin') {
        next('/login'); // Redirige a login si no es admin
    } else {
        next();
    }
});

export default router;
