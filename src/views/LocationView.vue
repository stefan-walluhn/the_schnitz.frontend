<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { apiGateway } from '../api/gateway';

const props = defineProps({
  location_id: {
    type: String,
    required: true
  },
});

const router = useRouter();

const location = ref(null);
const newDiscovery = ref(false);
const errorMsg = ref(null);

const updateLocation = async(gatewayFunction) => {
  try {
    location.value = await gatewayFunction(props.location_id);
    errorMsg.value = null;
  } catch (error) {
    switch(error.message) {
      case 'unauthorized':
	router.push({ name: 'login' });
	break;
      case 'not found':
        errorMsg.value = 'you shall not guess!';
	break;
      default:
        errorMsg.value = 'something went wrong :-(';
        throw error;
    }
  }
}

watch(location, async (newLocation) => {
  if (newLocation.status == 'hidden') {
    newDiscovery.value = true;
    await updateLocation(apiGateway.discoverLocation);
  }
})

onMounted(async () => {
  await updateLocation(apiGateway.getLocation);
});
</script>

<template>
  <div v-if="errorMsg" class="alert alert-danger mb-3" role="alert">{{ errorMsg }}</div>
  <template v-else>
    <div v-if="newDiscovery" class="alert alert-success mb-3" role="alert">
      Respekt! Du hast einen neuen Ort gefunden!
    </div>
    <div v-else class="alert alert-secondary mb-3" role="alert">
      Dieser Ort wurde bereits gefunden.
    </div>
    <div v-if="location" class="card">
      <div class="card-body">
        <h5 class="card-title">{{ location.name }}</h5>
        <p class="card-text">{{ location.description }}</p>
	<template v-if="location.challenge">
	  <hr />
	  <h4>Aufgabe</h4>
	  <p class="challenge">{{ location.challenge }}</p>
	</template>
      </div>
    </div>
  </template>
</template>

<style scoped>
.challenge {
  font-weight: bolder;
}
</style>
