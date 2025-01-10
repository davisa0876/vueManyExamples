<!-- src/views/Example18CustomDirectivesHooks.vue -->
<template>
  <div>
    <h1 class="text-2xl font-bold mb-2">Example 18: Custom Directives Hooks</h1>
    <p class="mb-4">
      This example demonstrates the lifecycle hooks of a custom directive. 
      Open the console to see more logs, or watch the list below.
    </p>

    <!-- We'll pass an object to v-lifecycle-logger that has a pushLog function -->
    <div class="border border-gray-300 p-4 rounded" v-lifecycle-logger="{ pushLog }">
      <p>This DIV has the directive "v-lifecycle-logger".</p>
      <p class="mb-2">You can force updates by changing "someReactiveValue".</p>

      <label class="block mb-1">someReactiveValue:</label>
      <input
        type="text"
        class="border border-gray-400 px-2 py-1 rounded"
        v-model="someReactiveValue"
      />
    </div>

    <div class="mt-4 p-4 bg-gray-100 rounded">
      <h2 class="text-lg font-semibold mb-2">Directive Lifecycle Logs</h2>
      <ul class="list-disc ml-6">
        <li v-for="(item, index) in logs" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// We'll store some logs from the directive
const logs = ref([])

// We'll store a reactive value to force updates on the directive
const someReactiveValue = ref('Initial text')

// This function is called by the directive to add log messages
function pushLog(hookName) {
  logs.value.push(`${new Date().toLocaleTimeString()}: ${hookName}`)
}
</script>

<style scoped>
</style>
