<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="login">
        <div class="input-group">
          <input v-model="email" type="email" placeholder="Correo electrónico" required />
        </div>
        <div class="input-group">
          <input v-model="password" type="password" placeholder="Contraseña" required />
        </div>
        <button type="submit" class="login-button">Ingresar</button>
        <div class="footer-links">
          <router-link to="/register" class="link">¿No tienes cuenta? Regístrate</router-link>
          <router-link to="/forgot-password" class="link">¿Olvidaste tu contraseña?</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js"; // Asegúrate de que la ruta sea correcta

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      signInWithEmailAndPassword(auth, this.email, this.password)
          .then(userCredential => {
            console.log("Usuario iniciado sesión:", userCredential.user);
            localStorage.setItem('user', JSON.stringify({ email: this.email })); // Guardar el usuario en localStorage
            this.$router.push('/app2'); // Redirigir a App2
          })
          .catch(error => {
            console.error("Error en el inicio de sesión:", error.message);
            alert("Error en el inicio de sesión: " + error.message);
          });
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://example.com/fondo.jpg'); /* Cambia a la URL de tu imagen */
  background-size: cover;
  background-position: center;
}

.login-box {
  background: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 400px;
  width: 100%;
}

.input-group {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

.login-button {
  background-color: #007bff;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #0056b3;
}

.footer-links {
  margin-top: 15px;
}

.link {
  display: block;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s;
}

.link:hover {
  color: #0056b3;
}
</style>
