<!-- src/views/Example14DynamicComponents.vue -->
<template>
  <div>
    <h1 class="text-2xl font-bold mb-2">Example 14: Dynamic Components</h1>
    <p class="mb-4">
      This example demonstrates how to dynamically switch between components using the ":is" attribute.
    </p>

    <div class="mb-4 space-x-2">
      <!-- Buttons to switch component -->
      <button
        v-for="(comp, idx) in components"
        :key="idx"
        class="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
        @click="currentComponent = comp"
      >
        Show {{ comp }}
      </button>
    </div>

    <div class="mb-4">
      <!-- Alternatively, you can use a <select> -->
      <label for="componentSelect" class="mr-2">Select Component:</label>
      <select
        id="componentSelect"
        class="border border-gray-300 rounded px-2 py-1"
        v-model="currentComponent"
      >
        <option v-for="comp in components" :key="comp" :value="comp">
          {{ comp }}
        </option>
      </select>
    </div>

    <!-- The dynamic component area -->
    <!-- currentComponent is a string referencing the component name -->
    <component :is="currentComponent" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

// We import our 3 example components
import ComponentA from '@/components/examples/ComponentA.vue'
import ComponentB from '@/components/examples/ComponentB.vue'
import ComponentC from '@/components/examples/ComponentC.vue'

/*
  We create a mapping of component names to the actual component objects
  so that Vue can dynamically render them.
*/

const componentsMap = {
  ComponentA,
  ComponentB,
  ComponentC
}

// We'll store the list of keys (component names) for convenience
const components = Object.keys(componentsMap)

// We'll use currentComponent to store the name of the currently active component
const currentComponent = ref(components[0]) // default to first in the list

/*
  Because we want <component :is="currentComponent"> to receive
  the component *object*, we can use a computed property or a watch effect 
  to return the actual component object from componentsMap.
*/
import { computed } from 'vue'
const currentComponentObject = computed(() => {
  return componentsMap[currentComponent.value]
})
</script>

<!-- Explanation:
  If you want <component :is="currentComponentObject">, you'll do so in the template.
  Alternatively, you can just do <component :is="currentComponent" />
  as long as the key "ComponentA", "ComponentB", etc. is globally available or
  recognized by Vue. In this example, we rely on local registration:

  Instead of "ComponentA", we can do:
  {
    'ComponentA': ComponentA,
    'ComponentB': ComponentB,
    ...
  }
  and then reference that in the <component> tag.

  But let's keep it simple and just pass the string "ComponentA" if they
  are registered globally or in main.js as well.
-->

<style scoped>
</style>
