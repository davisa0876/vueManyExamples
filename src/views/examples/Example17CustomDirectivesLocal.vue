<!-- src/views/Example17CustomDirectives.vue -->
<template>
  <div>
    <h1 class="text-2xl font-bold mb-2">Custom Directive: v-uppercase</h1>
    <p class="mb-4">
      This example shows how to create a custom directive in a separate file (e.g. "uppercase.js") 
      and register it globally for use as v-uppercase.
    </p>

    <div class="mb-6">
      <label class="block mb-1">Try typing text here:</label>
      <input
        type="text"
        class="border border-gray-300 rounded px-2 py-1 w-64"
        v-uppercase
      />
      <p class="mt-2 text-sm text-gray-600">
        Your input will be forced to uppercase via the <strong>v-uppercase</strong> directive.
      </p>
    </div>
  </div>
</template>

<script setup>
// Nenhuma lógica adicional é necessária para esse exemplo.
// A diretiva "v-uppercase" já está registrada globalmente em main.js.
</script>

<style scoped>
</style>
