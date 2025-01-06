<!-- src/components/ChildEmittingEvents.vue -->
<template>
  <div class="border border-green-500 p-4 rounded-md my-4">
    <h2 class="text-xl font-semibold mb-2">Child: Emitting Events</h2>
    <button
      class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
      @click="handleClick"
    >
      Emit an Event to Parent
    </button>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'

// defineEmits returns a function that can be used to emit events
const emit = defineEmits(['custom-event'])

// This method will be called when the user clicks the button
const handleClick = () => {
  // We emit a custom event called "custom-event"
// Optionally, we can pass some data as a payload
  emit('custom-event', { message: 'Hello from Child!' })
}
</script>

<style scoped>
</style>
