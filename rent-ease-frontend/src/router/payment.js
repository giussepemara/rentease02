// routes/payment.js
const express = require('express');
const paypal = require('paypal-rest-sdk');
const router = express.Router();

// Configuración de PayPal
paypal.configure({
    mode: 'sandbox', // Cambiar a 'live' en producción
    client_id: process.env.PAYPAL_CLIENT_ID, // Usar variables de entorno para mayor seguridad
    client_secret: process.env.PAYPAL_CLIENT_SECRET
});

// Endpoint para crear un pago
router.post('/pay/paypal', async (req, res) => {
    const { amount } = req.body;

    // Validar el monto
    if (!amount || isNaN(amount)) {
        return res.status(400).json({ message: 'Monto inválido' });
    }

    const payment = {
        intent: 'sale',
        payer: { payment_method: 'paypal' },
        transactions: [{
            amount: {
                total: amount.toFixed(2), // Asegurarse de que el monto tenga dos decimales
                currency: 'USD'
            }
        }],
        redirect_urls: {
            return_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel'
        }
    };

    try {
        const paymentResult = await paypal.payment.create(payment);
        res.json({ paymentID: paymentResult.id });
    } catch (error) {
        console.error('Error en la transacción:', error);
        res.status(500).json({ message: 'Error en la transacción', error });
    }
});

module.exports = router;
