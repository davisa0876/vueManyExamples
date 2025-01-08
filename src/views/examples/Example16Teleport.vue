<!-- src/views/Example16Teleport.vue -->
<template>
  <div>
    <h1 class="text-2xl font-bold mb-2">Example 16: Teleport</h1>
    <p class="mb-4">
      This example demonstrates how to render part of a component's template in another place in the DOM using &lt;Teleport&gt;.
    </p>

    <button
      class="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
      @click="showModal = true"
    >
      Show Modal
    </button>

    <!-- O modal fica "lógico" aqui, mas será teletransportado para #modal-root -->
    <teleport to="#modal-root">
      <div
        v-if="showModal"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div class="bg-white p-6 rounded-md shadow-md">
          <h2 class="text-xl font-semibold mb-4">Teleported Modal</h2>
          <p class="mb-4">This content is rendered at #modal-root.</p>
          <button
            class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            @click="showModal = false"
          >
            Close
          </button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)
</script>

<style scoped>
/* Example of a full-screen overlay (for the modal background) */
</style>
