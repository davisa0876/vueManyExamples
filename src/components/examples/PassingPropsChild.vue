<!-- src/components/PassingPropsChild.vue -->
<template>
  <div class="border border-blue-500 p-4 rounded-md my-4">
    <h2 class="text-xl font-semibold mb-2">Child Component</h2>
    <p class="mb-1">Title: {{ title }}</p>
    <p>Count: {{ count }}</p>
  </div>
</template>

<script setup>
// We use defineProps to declare the props for this child component
// The parent will pass the values for these props

// Example of simple props with default values:
const props = defineProps({
  title: {
    type: String,
    default: 'Default Title'
  },
  count: {
    type: Number,
    default: 0
  }
})
</script>

<style scoped>
/* Local styles for the child component */
</style>
