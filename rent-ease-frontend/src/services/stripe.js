import { loadStripe } from '@stripe/stripe-js';

// Carga de la clave pública de Stripe
const stripePromise = loadStripe('your-publishable-key');

export const checkout = async (items) => {
    // Asegúrate de que los ítems no estén vacíos
    if (!items || items.length === 0) {
        console.error('No items provided for checkout.');
        return;
    }

    // Esperar a que Stripe esté completamente cargado
    const stripe = await stripePromise;

    if (!stripe) {
        console.error('Stripe.js failed to load.');
        return;
    }

    // Redirigir al usuario a la página de checkout de Stripe
    const { error } = await stripe.redirectToCheckout({
        lineItems: items,
        mode: 'payment',
        successUrl: 'https://yourdomain.com/success',
        cancelUrl: 'https://yourdomain.com/cancel',
    });

    // Manejo de errores
    if (error) {
        console.error('Error redirecting to checkout:', error.message);
    }
};
