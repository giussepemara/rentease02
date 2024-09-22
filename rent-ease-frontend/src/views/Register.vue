<template>
  <div class="register-container">
    <h2>Registrarse</h2>
    <form @submit.prevent="register">
      <input
          type="email"
          v-model="email"
          placeholder="Correo"
          required
          @input="clearError"
      />
      <input
          type="password"
          v-model="password"
          placeholder="Contraseña"
          required
          @input="clearError"
      />
      <button type="submit">Registrarse</button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    clearError() {
      this.errorMessage = '';
    },
    async register() {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        console.log("Usuario registrado:", userCredential.user);
        this.$router.push('/home');
      } catch (error) {
        console.error("Error en el registro:", error.message);
        this.errorMessage = "Error en el registro: " + error.message;
      }
    }
  }
}
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

input {
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ddd;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #28a745; /* Color verde al enfocar */
}

button {
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #218838; /* Color más oscuro al pasar el ratón */
}

.error-message {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>
