<template>
  <aside class="bg-gray-800 text-white w-64 min-h-screen flex flex-col">
    <div class="flex-grow">
      <nav class="mt-5 px-2 space-y-1 mb-8">
        <!-- Dashboard -->
        <router-link
          to="/dashboard"
          class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
          :class="{ 'text-white bg-gray-900': $route.path === '/dashboard', 'text-gray-300': $route.path !== '/dashboard' }"
        >
          <svg class="mr-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Dashboard
        </router-link>

        <!-- Crawler -->
        <router-link
          to="/crawler"
          class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
        >
          <svg class="mr-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          Crawler
        </router-link>

        <!-- Examples Dropdown -->
        <div class="space-y-1">
          <button
            @click="toggleExamples"
            class="w-full group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            <svg
              class="mr-4 h-6 w-6 transition-transform duration-200"
              :class="{ 'transform rotate-90': showExamples }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
            Examples
          </button>

          <!-- Dropdown Content -->
          <div v-show="showExamples" class="space-y-1 pl-11">
            <router-link
              v-for="i in 19"
              :key="`example${i}`"
              :to="`/example${i}`"
              class="group flex items-center px-2 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
            >
              Example {{ i }}
            </router-link>

            <router-link
              to="/example19-OnOff"
              class="group flex items-center px-2 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
            >
              Example 19 OnOff
            </router-link>
          </div>
        </div>
      </nav>
    </div>

    <div class="border-t border-gray-700 p-3 mt-auto">
      <button
        @click="handleLogout"
        class="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-150"
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
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'AppSidebar',
  setup() {
    const store = useStore();
    const showExamples = ref(false);

    const toggleExamples = () => {
      showExamples.value = !showExamples.value;
    };

    const handleLogout = async () => {
      try {
        await store.dispatch('auth/logout');
      } catch (error) {
        console.error('Logout failed:', error);
      }
    };

    return {
      showExamples,
      toggleExamples,
      handleLogout
    };
  }
};
</script>

<style scoped>
.router-link-active {
  @apply text-white bg-gray-900;
}
</style> 