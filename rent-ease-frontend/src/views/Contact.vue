<template>
  <div class="contact-container">
    <h1>Contáctanos</h1>
    <p>Aquí puedes ponerte en contacto con nosotros. Completa el formulario a continuación:</p>

    <v-form v-model="valid" ref="form" lazy-validation>
      <v-text-field
          v-model="name"
          :rules="[rules.required]"
          label="Nombre"
          required
      ></v-text-field>

      <v-text-field
          v-model="email"
          :rules="[rules.required, rules.email]"
          label="Correo Electrónico"
          required
      ></v-text-field>

      <v-textarea
          v-model="message"
          :rules="[rules.required]"
          label="Mensaje"
          required
      ></v-textarea>

      <v-btn color="primary" @click="submitForm">Enviar</v-btn>
    </v-form>

    <v-alert v-if="submitted" type="success" dismissible>
      ¡Gracias! Tu mensaje ha sido enviado.
    </v-alert>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      valid: false,
      name: '',
      email: '',
      message: '',
      submitted: false,
      rules: {
        required: value => !!value || 'Este campo es requerido',
        email: value => /.+@.+\..+/.test(value) || 'Debes ingresar un correo electrónico válido',
      },
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        // Aquí puedes manejar el envío del formulario
        console.log('Nombre:', this.name);
        console.log('Email:', this.email);
        console.log('Mensaje:', this.message);
        this.submitted = true;
        // Limpiar los campos después de enviar
        this.name = '';
        this.email = '';
        this.message = '';
      }
    },
  },
};
</script>

<style scoped>
.contact-container {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

p {
  text-align: center;
  margin-bottom: 20px;
}

/* Personaliza los estilos del formulario aquí si es necesario */
</style>
