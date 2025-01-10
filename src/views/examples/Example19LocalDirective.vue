<!-- src/views/Example19LocalDirective.vue -->
<template>
  <div>
    <h1 class="text-2xl font-bold mb-2">Example 19: Local Custom Directive (Separate File)</h1>
    <p class="mb-4">
      This example shows how to keep the directive's logic in a separate file and still use it locally.
    </p>

    <div
      class="p-4 rounded text-white"
      style="width: 200px; text-align: center; background-color: #000000;"
      v-highlight
    >
      Hover over this box
    </div>


  </div>
</template>

<script>
import highlightDirective from '@/directives/highlight.js'

export default {
  name: 'Example19LocalDirective',

  // We register the directive locally:
  directives: {
    highlight: highlightDirective
  }
}
</script>

<style scoped>
</style>
