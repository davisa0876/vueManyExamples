<!-- src/views/Example8ProvideInjectPartOne.vue -->
<template>
  <div>
    <h1 class="text-2xl font-bold mb-2">Example 8: Provide & Inject (Part 1)</h1>
    <p class="mb-4">This example demonstrates a simple usage of provide and inject.</p>

    <!-- The parent that simply contains the child -->
    <MiddleParent />
  </div>
</template>

<script setup>
import MiddleParent from '@/components/examples/MiddleParent.vue'
import { provide, ref } from 'vue'

// We create a piece of data to share
const sharedMessage = ref('Hello from provide()!')

// We use "provide" to make this data available for descendants
provide('messageKey', sharedMessage)
</script>

<style scoped>
</style>
