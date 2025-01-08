<!-- src/components/KeepAliveChildTwo.vue -->
<template>
  <div class="border border-red-500 p-4 rounded-md">
    <h2 class="text-lg font-semibold mb-2">KeepAliveChildTwo</h2>
    <p class="mb-2">Counter Two: {{ counterTwo }}</p>
    <button
      class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
      @click="counterTwo++"
    >
      Increase Child Two
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const counterTwo = ref(0)

// Give this component a name:
defineOptions({ name: 'KeepAliveChildTwo' })
</script>

<style scoped>
</style>
