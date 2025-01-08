<!-- src/views/Example15KeepAlive.vue -->
<template>
  <div>
    <h1 class="text-2xl font-bold mb-2">Example 15: Keep Alive</h1>
    <p class="mb-4">
      This example demonstrates how to use the &lt;keep-alive&gt; component
      to persist state of dynamically loaded components.
    </p>

    <div class="mb-4 space-x-2">
      <button
        class="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
        @click="currentView = 'KeepAliveChildOne'"
      >
        Show Child One
      </button>
      <button
        class="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
        @click="currentView = 'KeepAliveChildTwo'"
      >
        Show Child Two
      </button>
    </div>
    <keep-alive>
      <component :is="currentComponent" />
    </keep-alive>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import KeepAliveChildOne from '@/components/examples/KeepAliveChildOne.vue'
import KeepAliveChildTwo from '@/components/examples/KeepAliveChildTwo.vue'

const componentsMap = {
  KeepAliveChildOne,
  KeepAliveChildTwo
}

const currentView = ref('KeepAliveChildOne')

// A computed that returns the actual component from the map
const currentComponent = computed(() => {
  return componentsMap[currentView.value]
})
</script>

<style scoped>
</style>
