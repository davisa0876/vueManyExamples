<!-- src/components/ChildPropsAsEvent.vue -->
<template>
  <div class="border border-yellow-400 p-4 rounded-md my-4">
    <h2 class="text-xl font-semibold mb-2">Child: Props as Event</h2>
    <button
      class="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700"
      @click="triggerParentFunction"
    >
      Call Parent's Function
    </button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

// We declare a prop named "onClickAction" which is a function
const props = defineProps({
  onClickAction: {
    type: Function,
    required: true
  }
})

/*
  This function will be called when the button is clicked.
  Instead of emitting an event, we directly call the function 
  passed by the parent as a prop.
*/
function triggerParentFunction() {
  props.onClickAction('Hello from child via prop function!')
}
</script>

<style scoped>
</style>
