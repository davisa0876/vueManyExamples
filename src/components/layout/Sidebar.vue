<template>
  <aside class="bg-gray-800 text-white w-64 min-h-screen flex flex-col">
    <!-- Existing sidebar content -->
    <div class="flex-grow">
      <!-- Your existing menu items -->
    </div>

    <!-- Logout button at bottom -->
    <div v-if="isAuthenticated" class="p-4 border-t border-gray-700">
      <button
        @click="handleLogout"
        class="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        Logout
      </button>
    </div>
  </aside>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Sidebar',
  setup() {
    const store = useStore();

    const isAuthenticated = computed(() => store.getters['auth/isAuthenticated']);

    const handleLogout = async () => {
      try {
        await store.dispatch('auth/logout');
      } catch (error) {
        console.error('Logout failed:', error);
      }
    };

    return {
      isAuthenticated,
      handleLogout
    };
  }
};
</script> 