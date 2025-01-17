<!-- src/components/Sidebar.vue -->
<template>
  <aside class="bg-gray-100 w-64 min-h-screen p-4 border-r border-gray-200">
    <div class="cursor-pointer flex items-center justify-between mb-2">
      <RouterLink to="/dashboard" class="text-lg font-semibold">
        Dasboard
      </RouterLink>
      <i class="fa-solid fa-house"></i>
    </div>
    <div class="cursor-pointer flex items-center justify-between mb-2">
      <RouterLink to="/Crawler" class="text-lg font-semibold">
        Clawler
      </RouterLink>
      <i class="fas fa-spider"></i>
    </div>

    <div class="cursor-pointer flex items-center justify-between mb-2" @click="toggleOpen">
      <h2 class="text-lg font-semibold">Examples</h2>
      <i class="fas" :class="isOpen ? 'fa-chevron-down' : 'fa-chevron-right'"></i>
    </div>

    <transition
      enter-active-class="transition-all ease-out duration-300"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-[700px]"
      leave-active-class="transition-all ease-in duration-300"
      leave-from-class="opacity-100 max-h-[700px]"
      leave-to-class="opacity-0 max-h-0"
    >
      <nav v-if="isOpen">
        <ul class="space-y-2">
          <li>
            <RouterLink to="/" class="block py-1 px-2 rounded hover:bg-gray-200">
              1: Hello World
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/example2" class="block py-1 px-2 rounded hover:bg-gray-200">
              2: The STYLE Tag
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/example3" class="block py-1 px-2 rounded hover:bg-gray-200">
              3: Passing Props
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/example4" class="block py-1 px-2 rounded hover:bg-gray-200">
              4: Type Checking
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/example5" class="block py-1 px-2 rounded hover:bg-gray-200">
              5: Emitting Events
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/example6" class="block py-1 px-2 rounded hover:bg-gray-200">
              6: Props as Event
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/example7" class="block py-1 px-2 rounded hover:bg-gray-200">
              7: Complex Type Checking
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/example8" class="block py-1 px-2 rounded hover:bg-gray-200">
              8: Provide & Inject (Part 1)
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/example9" class="block py-1 px-2 rounded hover:bg-gray-200">
              9: Provide & Inject (Part 2)
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/example10" class="block py-1 px-2 rounded hover:bg-gray-200">
              10: Slots
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/example11" class="block py-1 px-2 rounded hover:bg-gray-200">
              11: Named Slots
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/example12" class="block py-1 px-2 rounded hover:bg-gray-200">
              12: Component Lifecycle
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/example13" class="block py-1 px-2 rounded hover:bg-gray-200">
              13: Using the Lifecycles
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/example14" class="block py-1 px-2 rounded hover:bg-gray-200">
              14: Dynamic Components
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/example15" class="block py-1 px-2 rounded hover:bg-gray-200">
              15: Keep Alive
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/example16" class="block py-1 px-2 rounded hover:bg-gray-200">
              16: Teleport
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/example17" class="block py-1 px-2 rounded hover:bg-gray-200">
              17: Custom Directives
            </RouterLink>
          </li>         
          <li>
            <RouterLink to="/Example17-local" class="block py-1 px-2 rounded hover:bg-gray-200">
              17: Custom Directives(LOCAL)
            </RouterLink>
          </li>   
          <li>
            <RouterLink to="/example18" class="block py-1 px-2 rounded hover:bg-gray-200">
              18: Custom Directives Hooks
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/example19" class="block py-1 px-2 rounded hover:bg-gray-200">
              19: Local Custom Directive 1 
            </RouterLink>
          </li>    
          <li>
            <RouterLink to="/Example19-OnOff" class="block py-1 px-2 rounded hover:bg-gray-200">
              19: Local Custom Directive 2
            </RouterLink>
          </li>        
        </ul>
      </nav>
    </transition>
  </aside>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
function toggleOpen() {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
</style>
