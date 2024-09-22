// routes/users.js
const express = require('express');
const router = express.Router();
const roleMiddleware = require('../middlewares/roleMiddleware');

// Obtener todos los usuarios (solo administradores)
router.get('/', roleMiddleware('admin'), (req, res) => {
    // Obtener todos los usuarios
    // ...
});

// Crear un nuevo usuario (permitir solo a administradores)
router.post('/', roleMiddleware('admin'), (req, res) => {
    const { name, email, role } = req.body;

    const newUser = {
        name,
        email,
        role: role || 'cliente'  // Por defecto 'cliente'
    };

    // Guardar el nuevo usuario
    res.status(201).json({ message: 'Usuario creado con éxito', newUser });
});

// Actualizar un usuario (solo administradores)
router.put('/:id', roleMiddleware('admin'), (req, res) => {
    const { role } = req.body;
    // Actualizar rol de usuario
    res.status(200).json({ message: 'Usuario actualizado' });
});

module.exports = router;
