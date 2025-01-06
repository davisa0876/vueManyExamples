<!-- src/components/Sidebar.vue -->
<template>
  <aside class="bg-gray-100 w-64 min-h-screen p-4 border-r border-gray-200">
    <nav>
      <h2 class="text-lg font-semibold mb-4">Examples</h2>
      <ul class="space-y-2">
        <li>
          <RouterLink
            to="/"
            class="block py-1 px-2 rounded hover:bg-gray-200"
          >
            1: Hello World
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/example2"
            class="block py-1 px-2 rounded hover:bg-gray-200"
          >
            2: The STYLE Tag
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/example3"
            class="block py-1 px-2 rounded hover:bg-gray-200"
          >
            3: Passing Props
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/example4"
            class="block py-1 px-2 rounded hover:bg-gray-200"
          >
            4: Type Checking
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/example5"
            class="block py-1 px-2 rounded hover:bg-gray-200"
          >
            5: Emitting Events
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/example6"
            class="block py-1 px-2 rounded hover:bg-gray-200"
          >
            6: Props as Event
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/example7"
            class="block py-1 px-2 rounded hover:bg-gray-200"
          >
            7: Complex Type Checking
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/example8"
            class="block py-1 px-2 rounded hover:bg-gray-200"
          >
            8: Provide & Inject (Part 1)
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/example9"
            class="block py-1 px-2 rounded hover:bg-gray-200"
          >
            9: Provide & Inject (Part 2)
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/example10"
            class="block py-1 px-2 rounded hover:bg-gray-200"
          >
            10: Slots
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
</script>

<style scoped>
</style>
