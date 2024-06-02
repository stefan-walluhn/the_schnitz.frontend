<script setup>
import { onMounted } from 'vue';
import { apiGateway } from '../api/gateway';

onMounted(async () => {
  await apiGateway.logout();
});
</script>

<template>
  <h1>Logout</h1>
</template>
