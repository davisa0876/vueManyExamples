<template>
  <div class="bg-white shadow p-4 rounded space-y-6">
    <!-- FORM SECTION -->
    <div class="space-y-4">
      <!-- URL Input -->
      <div>
        <label for="url" class="block text-gray-700 font-semibold mb-2">URL to Crawl</label>
        <input
          id="url"
          v-model="url"
          type="text"
          placeholder="https://daviamaral.com"
          class="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Single Page Checkbox -->
      <div class="flex items-center space-x-2">
        <input
          id="singlePage"
          v-model="singlePage"
          type="checkbox"
          class="h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
        <label for="singlePage" class="text-gray-700">Single Page Only</label>
      </div>

      <!-- Submit Button -->
      <div>
        <button
          @click="crawl"
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none"
        >
          Crawl
        </button>
      </div>
    </div>

    <!-- LOADING INDICATOR -->
    <div v-if="isLoading" class="text-center text-blue-500 font-semibold">
      Loading...
      <!-- Or replace with a spinner icon if desired -->
    </div>

    <!-- ERROR MESSAGE -->
    <div v-if="error && !isLoading" class="text-red-500 font-bold">
      {{ error }}
    </div>

    <!-- RESULTS -->
    <div v-if="results && Array.isArray(results) && !isLoading" class="space-y-4">
      <h2 class="text-xl font-semibold">Crawl Results</h2>

      <ul class="space-y-3">
        <li
          v-for="(page, index) in results"
          :key="index"
          class="border border-gray-300 p-3 rounded"
        >
          <div class="text-gray-800 font-semibold">
            {{ page.url }}
          </div>
          <div class="text-sm text-gray-600 space-y-1">
            <p>Status Code: {{ page.statusCode }}</p>

            <!-- Example usage of additional fields -->
            <p v-if="page.loadTimeSeconds !== undefined">
              Load Time: {{ page.loadTimeSeconds }} s
            </p>
            <p v-if="page.contentLength">
              Content Length: {{ page.contentLength }}
            </p>
            <p v-if="page.wordCount !== undefined">
              Word Count: {{ page.wordCount }}
            </p>
            <p v-if="page.internalLinksCount !== undefined">
              Internal Links: {{ page.internalLinksCount }}
            </p>
            <p v-if="page.externalLinksCount !== undefined">
              External Links: {{ page.externalLinksCount }}
            </p>
          </div>

                    <!-- If you want to show the full arrays, you can do so below -->
          <details class="mt-2">
            <summary class="cursor-pointer text-blue-500">Show full details</summary>
            <pre class="bg-gray-100 p-2 mt-2 rounded text-xs">
                {{ page }}
            </pre>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { post } from '@/services/api.js'

// Reactive state variables
const url = ref('')
const singlePage = ref(false)
const results = ref(null)
const error = ref(null)
const isLoading = ref(false)
const token = ref('') // Only if you need an auth token

// The crawl function (async)
async function crawl() {
  results.value = null
  error.value = null
  isLoading.value = true

  try {
    const requestData = {
      url: url.value,
      singlePage: singlePage.value
    }

    // If your API needs a token, pass it as second argument
    const responseData = await post('/crawl', token.value, requestData)
    results.value = responseData
  } catch (err) {
    console.error('Crawl failed:', err)
    if (err.response && err.response.data && err.response.data.error) {
      error.value = err.response.data.error
    } else {
      error.value = err.message || 'An unknown error occurred.'
    }
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
/* Tailwind handles most styling via classes. Add local rules if desired. */
</style>
