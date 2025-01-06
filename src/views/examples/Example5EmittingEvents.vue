<!-- src/views/Example5EmittingEvents.vue -->
<template>
  <div>
    <h1 class="text-2xl font-bold mb-2">Example 5: Emitting Events</h1>
    <p class="mb-4">
      This example shows how a child component can emit events to its parent.
    </p>

    <!-- We listen for the "custom-event" using v-on or @ -->
    <ChildEmittingEvents @custom-event="onChildEvent" />

    <div class="mt-4 p-4 bg-gray-100 rounded-md">
      <p class="font-medium">
        Event data from child:
      </p>
      <p class="mt-1">
        {{ eventData }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChildEmittingEvents from '@/components/examples/ChildEmittingEvents.vue'

const eventData = ref('No event emitted yet')

// This function will be called whenever the child emits the "custom-event"
function onChildEvent(payload) {
  // We store the message from child in our reactive variable
  eventData.value = payload.message
}
</script>

<style scoped>
</style>
