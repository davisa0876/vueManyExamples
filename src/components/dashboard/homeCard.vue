<!-- src/components/dashboard/homeCard.vue -->
<template>
  <div class="border rounded shadow p-4 bg-white">
    <header class="mb-2 border-b pb-2">
      <slot name="header">
        <h2 class="font-semibold text-lg">Default Header</h2>
      </slot>
    </header>

    <div class="mb-2">
      <slot>
        <p>No content provided.</p>
      </slot>
    </div>

    <footer class="pt-2 border-t mt-2">
      <slot name="footer">
        <p class="text-sm text-gray-500">Default Footer</p>
      </slot>
    </footer>
  </div>
</template>

<script setup>
/* No extra logic here — just a slot-based card layout. */
</script>

<style scoped>
</style>
