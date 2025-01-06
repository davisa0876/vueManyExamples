<!-- src/views/Example3PassingProps.vue -->
<template>
  <div>
    <h1 class="text-2xl font-bold mb-2">Example 3: Passing Props</h1>
    <p class="mb-4">
      This example demonstrates how to pass props from a parent component to a child component.
    </p>

    <!-- Passing props to our child component -->
    <PassingPropsChild :title="parentTitle" :count="parentCount" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
// Importing the child component
import PassingPropsChild from '@/components/examples/PassingPropsChild.vue'

// We can create reactive refs to hold data that we'll pass as props
const parentTitle = ref('Hello from Parent')
const parentCount = ref(10)
</script>

<style scoped>
/* Local styles for the parent component */
</style>
