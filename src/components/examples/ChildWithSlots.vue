<!-- src/components/ChildWithSlots.vue -->
<template>
  <div class="border border-purple-500 p-4 rounded-md">
    <h2 class="text-lg font-semibold mb-3">Child With Slots</h2>
    <p class="mb-2">
      Below is the default slot content coming from the parent:
    </p>

    <!-- The default slot -->
    <slot></slot>
  </div>
</template>

<script setup>
// This child component has a default slot
// The parent can provide custom content inside <ChildWithSlots> ... </ChildWithSlots>
</script>

<style scoped>
</style>
