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

const updateLocation = async(func) => {
  try {
    location.value = await func(props.location_id, {
      unauthorized: () => { router.push({ name: 'login' }) },
      ok: () => { errorMsg.value = null },
    });
  } catch(error) {
    errorMsg.value = error.message;
    throw error;
  }
}

watch(location, async (newLocation) => {
  if (newLocation != undefined && newLocation.status == 'hidden') {
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
      Respekt! Du hast eine neue Location gefunden!
    </div>
    <div v-else class="alert alert-secondary mb-3" role="alert">
      Diese Location wurde bereits gefunden.
    </div>
    <div v-if="location" class="card">
      <div class="card-body">
        <h5 class="card-title">{{ location.name }}</h5>
        <p class="card-text">{{ location.description }}</p>
      </div>
    </div>
  </template>
</template>
