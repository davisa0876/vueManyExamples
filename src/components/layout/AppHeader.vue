<template>
  <header class="bg-white shadow">
    <div class="flex justify-between items-center px-4 py-3">
      <h1 class="text-xl font-semibold">My Vue 3 + Tailwind Project</h1>
      <div v-if="isAuthenticated" class="flex items-center space-x-4">
        <span class="text-gray-600">Welcome, {{ userName }}</span>
      </div>
    </div>
  </header>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'AppHeader',
  setup() {
    const store = useStore();

    const isAuthenticated = computed(() => store.getters['auth/isAuthenticated']);
    const userName = computed(() => store.getters['auth/userName']);

    return {
      isAuthenticated,
      userName
    };
  }
};
</script> 