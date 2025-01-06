<!-- src/views/Example2StyleTag.vue -->
<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Example 2: The STYLE Tag</h1>
    <div class="bg-gray-200 p-4 rounded-lg">
      <p class="mb-2">
        This paragraph uses Tailwind classes for styling.
      </p>

      <p class="local-style mb-2">
        This paragraph has a custom style applied (scoped).
      </p>

      <p class="global-style">
        This paragraph has a custom style applied (global).
      </p>
    </div>
  </div>
</template>

<script setup>
// No specific logic needed here for now.
</script>

<!-- "scoped" ensures that the style only applies to this component's elements -->
<style scoped>
.local-style {
  color: #2563eb; /* Example of a custom color */
  font-weight: bold;
}
</style>

<!-- "global" style is applied to the entire application -->
<style>
.global-style {
  color: #dc2626; /* Example of a global color (red) */
}
</style>
