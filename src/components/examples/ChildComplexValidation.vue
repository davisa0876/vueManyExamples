<!-- src/components/ChildComplexValidation.vue -->
<template>
  <div class="border border-pink-500 p-4 rounded-md my-4">
    <h2 class="text-xl font-semibold mb-2">Child with Classic Validation</h2>
    <p class="mb-2">User ID: {{ user.id }}</p>
    <p class="mb-2">User Name: {{ user.name }}</p>

    <div>
      <strong>Roles:</strong>
      <ul class="list-disc list-inside">
        <li v-for="(role, index) in user.roles" :key="index">
          {{ role }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  user: {
    type: Object,
    required: true,
    validator(value) {
      // Ensure required fields exist
      if (typeof value.id !== 'number') return false
      if (typeof value.name !== 'string') return false
      if (!Array.isArray(value.roles)) return false
      // We could do more sophisticated checks if needed
      return true
    }
  }
})
</script>

<style scoped>
</style>
