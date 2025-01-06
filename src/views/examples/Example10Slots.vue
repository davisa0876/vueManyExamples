<!-- src/views/Example10Slots.vue -->
<template>
  <div>
    <h1 class="text-2xl font-bold mb-2">Example 10: Slots</h1>
    <p class="mb-4">
      This example demonstrates how to use a default slot to pass dynamic content from a parent to a child component.
    </p>

    <ChildWithSlots>
      <!-- This content is passed to the default slot in ChildWithSlots.vue -->
      <div class="bg-purple-100 p-3 rounded-md">
        <h3 class="text-md font-semibold">Default Slot Content</h3>
        <p>
          This content is rendered inside the <strong>child</strong> via the default slot.
        </p>
      </div>
    </ChildWithSlots>
  </div>
</template>

<script setup>
import ChildWithSlots from '@/components/examples/ChildWithSlots.vue'
</script>

<style scoped>
</style>
