<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { apiGateway } from '../api/gateway';

const router = useRouter();

const password = ref('');
const errorMsg = ref(null);

const login = async password => {
  try {
    await apiGateway.login(password);
    router.go(-1);
  } catch (error) {
    switch(error.message) {
      case 'unauthorized':
	errorMsg.value = 'incorrect password';
	break;
      default:
        errorMsg.value = 'something went wrong :-(';
        throw error;
    }
  }
};
</script>

<template>
    <h1 class="mb-4">Login</h1>
    <form @submit.prevent="login(password)">
      <div v-if="errorMsg" class="alert alert-danger mb-3" role="alert">{{ errorMsg }}</div>
      <div v-else class="alert alert-info mb-3" role="alert">Du willst mitspielen? Bitte einmal anmelden!</div>
      <div class="mb-3">
	<label for="password" class="form-label">Password</label>
	<input v-model.lazy.trim="password" type="password" class="form-control" id="password" />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
</template>
