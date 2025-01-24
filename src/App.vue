<!-- src/App.vue -->
<template>
  <div class="min-h-screen flex flex-col">
    <!-- Only show header and sidebar if authenticated -->
    <template v-if="isAuthenticated">
      <Header />
      <div class="flex flex-1">
        <AppSidebar />
        <main class="p-4 flex-1">
          <router-view />
        </main>
      </div>
    </template>
    
    <!-- Show only router view if not authenticated -->
    <template v-else>
      <router-view />
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Header from '@/views/menu/HeaderMenu.vue'
import AppSidebar from '@/components/layout/AppSidebar.vue'

const store = useStore()
const isAuthenticated = computed(() => store.getters['auth/isAuthenticated'])
</script>

<style scoped>
</style>
