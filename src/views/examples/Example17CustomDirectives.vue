<!-- src/views/Example17CustomDirectives.vue -->
<template>
  <div>
    <h1 class="text-2xl font-bold mb-2">Example 17: Custom Directives</h1>
    <p class="mb-4">
      This example shows how to create and use both global and local custom directives.
    </p>

    <!-- Using the global directive "v-focus" -->
    <div class="mb-6">
      <label class="block mb-1">Global v-focus:</label>
      <input
        type="text"
        v-focus
        placeholder="This input gets focus on mount"
        class="border border-gray-300 rounded px-2 py-1"
      />
    </div>

    <!-- Using a local directive "v-color" -->
    <div class="mb-6">
      <label class="block mb-1">Local v-color:</label>
      <input
        type="text"
        v-color="color"
        placeholder="This input changes border color"
        class="border-2 px-2 py-1"
      />
      <div class="mt-2 space-x-2">
        <button
          class="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          @click="color = 'blue'"
        >
          Blue
        </button>
        <button
          class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
          @click="color = 'red'"
        >
          Red
        </button>
        <button
          class="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
          @click="color = 'green'"
        >
          Green
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// We store the chosen color for our local directive
const color = ref('blue')

/*
  We define our local directive "v-color". 
  This directive will change the element's border color based on the binding value.
*/

const vColorDirective = {
  // Called when the element is mounted
  mounted(el, binding) {
    el.style.borderColor = binding.value
  },
  // Called when the binding value changes
  updated(el, binding) {
    el.style.borderColor = binding.value
  }
}

// We can register it locally using the "defineExpose" in script setup, or
// we can do it using "directive" block in the <script> if using Options API.
// In <script setup>, we can define a local directives object:

const directives = {
  color: vColorDirective
}

// Then we can expose them to the template:
defineProps()
defineEmits()
defineExpose({
  directives
})
</script>

<style scoped>
</style>
