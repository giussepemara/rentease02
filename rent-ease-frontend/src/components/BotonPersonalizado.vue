<template>
  <button
      class="btn"
      @click="handleClick"
      :disabled="isDisabled"
      :aria-label="ariaLabel"
  >
    <slot></slot> <!-- Permite usar texto o iconos personalizados dentro del botón -->
  </button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    ariaLabel: {
      type: String,
      default: 'Button',
    },
  },
  methods: {
    handleClick() {
      if (!this.isDisabled) {
        this.onClick();
      }
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: #ffeb3b; /* Color amarillo */
  border: 2px solid #ffc107;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.1s ease, background-color 0.3s ease;
  font-weight: bold;
}

.btn:hover {
  transform: translateY(-2px);
  background-color: #ffc107; /* Color amarillo más oscuro al pasar el ratón */
}

.btn:disabled {
  background-color: rgba(255, 235, 59, 0.5); /* Color más claro al estar deshabilitado */
  border: 2px solid rgba(255, 193, 7, 0.5);
  cursor: not-allowed;
}
</style>
