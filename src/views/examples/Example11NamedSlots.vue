<!-- src/views/Example11NamedSlots.vue -->
<template>
  <div>
    <h1 class="text-2xl font-bold mb-2">Example 11: Named Slots</h1>
    <p class="mb-4">
      This example demonstrates how to use named slots to pass specific sections of content to a child component.
    </p>

    <ChildWithNamedSlots>
      <!-- Passing content to the "header" slot -->
      <template #header>
        <h2 class="text-lg font-semibold">Custom Header Title</h2>
      </template>

      <!-- Passing default slot content (no name) -->
      <div class="bg-blue-50 p-3 rounded-md">
        <p>
          This is the default slot content. It will be displayed in the main section.
        </p>
      </div>

      <!-- Passing content to the "footer" slot -->
      <template #footer>
        <p class="text-sm text-blue-700">Custom Footer Text</p>
      </template>
    </ChildWithNamedSlots>

    <!-- Another example without providing the "footer" slot -->
    <div class="mt-8">
      <ChildWithNamedSlots>
        <template #header>
          <h2 class="text-lg font-semibold">Header Only Example</h2>
        </template>
        <div class="bg-blue-50 p-3 rounded-md">
          <p>Default content is here.</p>
        </div>
        <!-- No footer provided => fallback content in child will appear -->
      </ChildWithNamedSlots>
    </div>
  </div>
</template>

<script setup>
import ChildWithNamedSlots from '@/components/examples/ChildWithNamedSlots.vue'
</script>

<style scoped>
</style>
