<!-- src/views/Example6PropsAsEvent.vue -->
<template>
  <div>
    <h1 class="text-2xl font-bold mb-2">Example 6: Props as Event</h1>
    <p class="mb-4">
      This example shows how a child can call a parent function passed via props.
    </p>

    <!-- We pass our parent function down as a prop -->
    <ChildPropsAsEvent :onClickAction="handleChildCall" />

    <div class="mt-4 p-4 bg-gray-100 rounded-md">
      <p class="font-medium">
        Message received from child:
      </p>
      <p class="mt-1">{{ childMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChildPropsAsEvent from '@/components/examples/ChildPropsAsEvent.vue'

// A reactive variable to hold message from the child
const childMessage = ref('No call triggered yet...')

// This function will be passed to the child as a prop, 
// and called from the child component
function handleChildCall(payload) {
  childMessage.value = payload
}
</script>

<style scoped>
</style>
