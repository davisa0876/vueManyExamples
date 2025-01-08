<!-- src/views/Example13UsingTheLifecycles.vue -->
<template>
  <div>
    <h1 class="text-2xl font-bold mb-2">Example 13: Using the Lifecycles</h1>
    <p class="mb-4">
      This example demonstrates a practical usage of lifecycle hooks. We start a timer on mount and clear it on unmount.
    </p>

    <div class="border border-gray-300 rounded p-4">
      <h2 class="text-lg font-semibold mb-2">Timer Demo</h2>
      <p class="mb-2">Seconds elapsed: {{ secondsElapsed }}</p>
      <div class="space-x-2">
        <button
          class="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          @click="pauseTimer"
        >
          Pause
        </button>
        <button
          class="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
          @click="resumeTimer"
        >
          Resume
        </button>
        <button
          class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
          @click="resetTimer"
        >
          Reset
        </button>
      </div>
    </div>

    <div class="mt-4 p-4 bg-gray-100 rounded">
      <h2 class="text-lg font-semibold mb-2">Lifecycle Logs</h2>
      <ul class="list-disc ml-6">
        <li v-for="(log, index) in logs" :key="index">{{ log }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  onUnmounted
} from 'vue'

/*
  We'll create a timer that increments "secondsElapsed" every 1 second.
  We'll see how to manage this timer using the lifecycle hooks.
*/

const secondsElapsed = ref(0)
let timerId = null // we'll store our setInterval ID here

// We also keep logs to visualize the lifecycle sequence
const logs = ref([])

// Helper function to push messages into logs
function logMessage(msg) {
  logs.value.push(`${new Date().toLocaleTimeString()}: ${msg}`)
}

// Function to start the timer (we'll call this onMounted or when resuming)
function startTimer() {
  if (!timerId) {
    timerId = setInterval(() => {
      secondsElapsed.value++
    }, 1000)
    logMessage('Timer started.')
  }
}

// Function to pause the timer
function pauseTimer() {
  if (timerId) {
    clearInterval(timerId)
    timerId = null
    logMessage('Timer paused.')
  }
}

// Function to resume the timer
function resumeTimer() {
  if (!timerId) {
    startTimer()
    logMessage('Timer resumed.')
  }
}

// Function to reset the timer to zero
function resetTimer() {
  secondsElapsed.value = 0
  logMessage('Timer reset to 0.')
}

// Lifecycle hooks
onBeforeMount(() => {
  logMessage('onBeforeMount called')
})

onMounted(() => {
  logMessage('onMounted called. Starting timer now...')
  startTimer()
})

onBeforeUnmount(() => {
  logMessage('onBeforeUnmount called. Clearing timer...')
  // It's a good practice to clean up intervals, event listeners, etc.
  pauseTimer()
})

onUnmounted(() => {
  logMessage('onUnmounted called')
})
</script>

<style scoped>
/* Styles for the example */
</style>
