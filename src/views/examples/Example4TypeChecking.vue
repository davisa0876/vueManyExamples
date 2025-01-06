<!-- src/views/Example4TypeChecking.vue -->
<template>
  <div>
    <h1 class="text-2xl font-bold mb-2">Example 4: Type Checking</h1>
    <p class="mb-4">
      This example demonstrates how to validate types for props using Vue 3's Composition API with TypeScript.
    </p>

    <div class="bg-gray-100 p-4 rounded-md">
      <h2 class="text-lg font-semibold mb-2">Child Component</h2>
      <!-- Passing props to our child component -->
      <ChildWithTypeChecking :user="user" :age="userAge" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ChildWithTypeChecking from '@/components/examples/ChildWithTypeChecking.vue'

// Example of a TypeScript interface
interface User {
  id: number
  name: string
}

// We create a reactive User object
const user = ref<User>({
  id: 123,
  name: 'Alice'
})

// Example of a Number type
const userAge = ref<number>(25)
</script>

<style scoped>
</style>
