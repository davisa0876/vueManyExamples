<!-- src/views/Example19LocalDirective.vue -->
<template>
  <div>
    <h1 class="text-2xl font-bold mb-2">Example 19: Local Custom Directive (Toggle ON/OFF)</h1>
    <p class="mb-4">
      - Starts red + "OFF"<br />
      - Hover => gray<br />
      - Click => toggles green + "ON" / red + "OFF"
    </p>

    <!-- Use the directive here -->
    <div
      class="w-40 h-16 flex items-center justify-center text-white font-semibold rounded cursor-pointer select-none"
      v-toggle-color
    >
      <!-- The directive itself will set the text content, so initial text is ignored. -->
    </div>
  </div>
</template>

<script>
import toggleColor from '@/directives/toggleColor.js'

export default {
  name: 'Example19LocalDirective',

  // Local directive (not registered in main.js)
  directives: {
    toggleColor
  }
}
</script>

<style scoped>
/* The directive handles background color, so we only do layout here. */
</style>
