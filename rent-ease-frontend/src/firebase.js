import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Para Firestore
import { getAuth } from 'firebase/auth'; // Para autenticación
import { getStorage } from 'firebase/storage'; // Para almacenamiento de archivos

// Configuración de Firebase (reemplaza con tu configuración)
const firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY || 'YOUR_API_KEY',
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN || 'YOUR_AUTH_DOMAIN',
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID || 'YOUR_PROJECT_ID',
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET || 'YOUR_STORAGE_BUCKET',
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID || 'YOUR_MESSAGING_SENDER_ID',
    appId: process.env.VUE_APP_FIREBASE_APP_ID || 'YOUR_APP_ID',
};

// Inicializa la aplicación Firebase
let app;
try {
    app = initializeApp(firebaseConfig);
    console.log("Firebase initialized successfully");
} catch (error) {
    console.error("Firebase initialization error:", error);
}

// Inicializa Firestore
const db = getFirestore(app);

// Inicializa la autenticación
const auth = getAuth(app);

// Inicializa el almacenamiento
const storage = getStorage(app);

// Exporta los servicios de Firebase
export { app, db, auth, storage };
