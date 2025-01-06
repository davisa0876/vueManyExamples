<!-- src/views/Example7ComplexTypeChecking.vue -->
<template>
  <div>
    <h1 class="text-2xl font-bold mb-2">Example 7: Complex Type Checking</h1>
    <p class="mb-4">
      This example shows how to handle more complex prop types using interfaces and validators.
    </p>

    <!-- Child component with TypeScript-based prop definition -->
    <ChildComplexTs :product="productData" />

    <!-- Child component with classic prop validation -->
    <ChildComplexValidation :user="userData" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ChildComplexTs from '@/components/examples/ChildComplexTs.vue'
import ChildComplexValidation from '@/components/examples/ChildComplexValidation.vue'

// Example of a complex product object
const productData = ref({
  id: 101,
  name: 'Laptop Pro',
  price: 2499.99,
  categories: ['Electronics', 'Computers'],
  meta: {
    rating: 4.5,
    tags: ['premium', 'office', 'gaming']
  }
})

// Example data for the second child, which will use validation
const userData = ref({
  id: 999,
  name: 'Bob',
  roles: ['admin', 'editor']
})
</script>

<style scoped>
</style>
