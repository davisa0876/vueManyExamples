<!-- src/views/Example12ComponentLifecycle.vue -->
<template>
  <div>
    <h1 class="text-2xl font-bold mb-2">Example 12: Component Lifecycle</h1>
    <p class="mb-4">
      This example demonstrates how to use the lifecycle hooks (onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted) in the Composition API.
    </p>

    <div class="border border-gray-300 rounded p-4">
      <h2 class="text-lg font-semibold mb-2">Lifecycle Demo</h2>
      <p class="mb-2">Count: {{ count }}</p>
      <button
        class="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        @click="increaseCount"
      >
        Increase
      </button>
    </div>

    <div class="mt-4 p-4 bg-gray-100 rounded">
      <h2 class="text-lg font-semibold mb-2">Lifecycle Logs</h2>
      <ul class="list-disc ml-6">
        <li v-for="(log, index) in logs" :key="index">{{ log }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

// Reactive state
const count = ref(0)
// Array to store the logs of lifecycle hooks
const logs = ref([])

// A function to push a message into the logs array
function logLifecycle(message) {
  logs.value.push(`${new Date().toLocaleTimeString()}: ${message}`)
}

// Lifecycle hooks
onBeforeMount(() => {
  logLifecycle('onBeforeMount called')
})

onMounted(() => {
  logLifecycle('onMounted called')
})

onBeforeUpdate(() => {
  logLifecycle('onBeforeUpdate called')
})

onUpdated(() => {
  logLifecycle('onUpdated called')
})

onBeforeUnmount(() => {
  logLifecycle('onBeforeUnmount called')
})

onUnmounted(() => {
  logLifecycle('onUnmounted called')
})

// A simple function to update the reactive data
function increaseCount() {
  count.value++
}
</script>

<style scoped>
</style>
