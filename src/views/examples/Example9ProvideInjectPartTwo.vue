<!-- src/views/Example9ProvideInjectPartTwo.vue -->
<template>
  <div>
    <h1 class="text-2xl font-bold mb-2">Example 9: Provide & Inject (Part 2)</h1>
    <p class="mb-4">
      This example demonstrates providing a reactive object and a function to child components.
    </p>

    <MiddleParent2 />
  </div>
</template>

<script setup>
import MiddleParent2 from '@/components/examples/MiddleParent2.vue'
import { provide, reactive } from 'vue'

// We create a reactive store-like object
const store = reactive({
  counter: 0,
  increment() {
    this.counter++
  },
  decrement() {
    this.counter--
  }
})

// We also create a separate function to demonstrate providing a method
function sayHello(name) {
  return `Hello, ${name}!`
}

// Provide the store object
provide('storeKey', store)
// Provide the function
provide('helloKey', sayHello)
</script>

<style scoped>
</style>
