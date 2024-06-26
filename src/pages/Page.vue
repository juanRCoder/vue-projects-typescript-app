<script setup lang="ts"></script>

<template>
  <div>
    <h2>Página Principal de Prueba</h2>
    <p>Este es el contenido de la página principal de prueba.</p>
  </div>
  <nav>
    <h2 :style="{display: 'inline-block'}">Navbar:</h2>
    <router-link to="/page" class="btn">Home</router-link>
    <router-link to="/page/product" class="btn">Products</router-link>
    <router-link to="/page/contact" class="btn">Contact</router-link>
  </nav>
  <button>
    <router-link to="/" class="btn">Proyectos vue</router-link>
  </button>
  <router-view></router-view>
</template>

<style scoped>
h2, p {
  margin: 0
}
</style>
