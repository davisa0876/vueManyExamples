<!-- src/components/MiddleParent.vue -->
<template>
  <div class="border border-gray-300 p-4 rounded-md">
    <h2 class="text-lg font-semibold mb-2">Middle Parent</h2>
    <p class="mb-3">This component doesn't directly provide or inject anything.</p>

    <!-- The real consumer is here, our ChildConsumer -->
    <ChildConsumer />
  </div>
</template>

<script setup>
import ChildConsumer from '@/components/examples/ChildConsumer.vue'
</script>

<style scoped>
</style>
