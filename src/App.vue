<script setup lang="ts"></script>

<template>
  <RouterView />
</template>

<style>
:root {
  font-family: 'Segoe UI', system-ui, sans-serif;
  color: #203c34;
  background: #f5f7f3;
  font-synthesis: none;
  -webkit-font-smoothing: antialiased;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

button:focus-visible,
input:focus-visible {
  outline: 3px solid #458675;
  outline-offset: 4px;
}

button {
  transition:
    background-color 150ms ease,
    box-shadow 150ms ease;
}

@media (prefers-reduced-motion: reduce) {
  button {
    transition: none;
  }
}
</style>
