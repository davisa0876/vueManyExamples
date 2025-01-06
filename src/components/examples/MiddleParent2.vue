<!-- src/components/MiddleParent2.vue -->
<template>
  <div class="border border-gray-300 p-4 rounded-md">
    <h2 class="text-lg font-semibold mb-2">Middle Parent 2</h2>
    <p class="mb-3">
      This component doesn't directly provide or inject anything, it just hosts the final child.
    </p>
    <ChildConsumer2 />
  </div>
</template>

<script setup>
import ChildConsumer2 from '@/components/examples/ChildConsumer2.vue'
</script>

<style scoped>
</style>
