<!-- src/components/ChildWithNamedSlots.vue -->
<template>
  <div class="border border-blue-400 p-4 rounded-md">
    <!-- Named slot: "header" -->
    <header class="bg-blue-100 p-2 rounded-md mb-3">
      <slot name="header">
        <!-- Fallback content if no "header" slot is provided by the parent -->
        <h2 class="font-semibold">Default Header</h2>
      </slot>
    </header>

    <!-- Default slot area (optional) -->
    <div class="mb-3">
      <slot>
        <!-- Fallback content if no default slot is provided -->
        <p>No default content provided.</p>
      </slot>
    </div>

    <!-- Named slot: "footer" -->
    <footer class="bg-blue-100 p-2 rounded-md mt-3">
      <slot name="footer">
        <!-- Fallback content if no "footer" slot is provided by the parent -->
        <p>Default Footer</p>
      </slot>
    </footer>
  </div>
</template>

<script setup>
// This child component has named slots: "header" and "footer",
// plus an optional default slot for any other content.
</script>

<style scoped>
</style>
