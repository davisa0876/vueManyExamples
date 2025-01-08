<!-- src/components/KeepAliveChildOne.vue -->
<template>
  <div class="border border-green-500 p-4 rounded-md">
    <h2 class="text-lg font-semibold mb-2">KeepAliveChildOne</h2>
    <p class="mb-2">Counter One: {{ counterOne }}</p>
    <button
      class="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
      @click="counterOne++"
    >
      Increase Child One
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const counterOne = ref(0)

// Give this component a name:
defineOptions({ name: 'KeepAliveChildOne' })
</script>

<style scoped>
</style>
