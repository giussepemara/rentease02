// middlewares/roleMiddleware.js
module.exports = function(requiredRole) {
    return (req, res, next) => {
        // Verifica si el usuario está autenticado
        if (!req.user) {
            return res.status(401).json({ message: "User not authenticated." });
        }

        // Verifica si el rol del usuario coincide con el rol requerido
        if (req.user.role === requiredRole) {
            return next(); // El acceso está permitido
        }

        // Respuesta si el rol no coincide
        return res.status(403).json({
            message: "Access denied.",
            requiredRole: requiredRole,
            userRole: req.user.role
        });
    };
};
