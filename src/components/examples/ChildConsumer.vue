<!-- src/components/ChildConsumer.vue -->
<template>
  <div class="border border-blue-400 p-4 rounded-md">
    <h3 class="text-md font-semibold mb-2">Child Consumer</h3>
    <p>This child consumes the provided message:</p>
    <p class="text-blue-700 font-bold mt-1">{{ injectedMessage }}</p>
  </div>
</template>

<script setup>
import { inject } from 'vue'

// We inject the message using the same key used by provide()
const injectedMessage = inject('messageKey')
</script>

<style scoped>
</style>
