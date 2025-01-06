<!-- src/App.vue -->
<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header fixo no topo -->
    <Header />

    <!-- Conteúdo em duas colunas: Sidebar + main -->
    <div class="flex flex-1">
      <Sidebar />
      <main class="p-4 flex-1">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import Header from '@/views/menu/HeaderMenu.vue'
import Sidebar from '@/views/menu/SideBar.vue'
</script>

<style scoped>
</style>
