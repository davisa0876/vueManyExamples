<!-- src/components/ChildComplexTs.vue -->
<template>
  <div class="border border-indigo-600 p-4 rounded-md my-4">
    <h2 class="text-xl font-semibold mb-2">Child with Complex Type (TS)</h2>
    <p class="mb-2">Product ID: {{ product.id }}</p>
    <p class="mb-2">Product Name: {{ product.name }}</p>
    <p class="mb-2">Price: ${{ product.price.toFixed(2) }}</p>

    <!-- Display categories array -->
    <div class="mb-2">
      <strong>Categories:</strong>
      <ul class="list-disc list-inside">
        <li v-for="(category, index) in product.categories" :key="index">
          {{ category }}
        </li>
      </ul>
    </div>

    <!-- Meta object with rating and tags -->
    <div>
      <strong>Meta:</strong>
      <p>Rating: {{ product.meta.rating }}/5</p>
      <p>
        Tags:
        <span v-for="(tag, i) in product.meta.tags" :key="i">
          {{ tag }}<span v-if="i < product.meta.tags.length - 1">, </span>
        </span>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

// Creating a Product interface with nested structures
interface Product {
  id: number
  name: string
  price: number
  categories: string[]
  meta: {
    rating: number
    tags: string[]
  }
}

const props = defineProps<{
  product: Product
}>()
</script>

<style scoped>
</style>
