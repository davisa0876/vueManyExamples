<!-- src/components/ChildWithTypeChecking.vue -->
<template>
  <div class="border border-blue-300 p-4 rounded-md">
    <p>User ID: {{ user.id }}</p>
    <p>User Name: {{ user.name }}</p>
    <p>Age: {{ age }}</p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

// Type declaration for the props
interface User {
  id: number
  name: string
}

// We define props with explicit typing for user (object) and age (number)
const props = defineProps<{
  user: User
  age: number
}>()
</script>

<style scoped>
</style>
