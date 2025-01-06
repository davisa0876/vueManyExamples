<!-- src/components/ChildConsumer2.vue -->
<template>
  <div class="border border-green-500 p-4 rounded-md">
    <h3 class="text-md font-semibold mb-2">Child Consumer 2</h3>

    <p class="mb-2">Current counter: {{ store.counter }}</p>
    <div class="flex gap-2 mb-4">
      <button
        class="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
        @click="store.increment()"
      >
        Increment
      </button>
      <button
        class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
        @click="store.decrement()"
      >
        Decrement
      </button>
    </div>

    <p>Say Hello to a user: {{ helloMsg }}</p>
    <button
      class="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 mt-2"
      @click="callHello('Alice')"
    >
      Greet "Alice"
    </button>
  </div>
</template>

<script setup>
import { inject, ref } from 'vue'

// We inject the store object and the function
const store = inject('storeKey')
const sayHello = inject('helloKey')

// We create a ref to hold the hello message returned by "sayHello"
const helloMsg = ref('No greeting yet...')

// This function calls the injected "sayHello" with a given name
function callHello(name) {
  helloMsg.value = sayHello(name)
}
</script>

<style scoped>
</style>
