<script setup>
import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
  <header>
    <navigation-bar />
  </header>

  <main class="container pt-4">
    <RouterView />
  </main>
</template>
