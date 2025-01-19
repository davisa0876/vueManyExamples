<template>
  <Card>
    <template #header>
      <h2 class="font-semibold text-lg">Weather Carousel</h2>
    </template>

    <!-- CITY NAVIGATION -->
    <div class="flex items-center justify-between py-2">
      <!-- Prev button -->
      <button
        @click="prevCity"
        class="bg-blue-500 text-white px-2 py-1 rounded"
      >
        &larr; Prev
      </button>

      <!-- Current city name -->
      <div class="text-center font-bold text-xl">
        {{ currentCity }}
      </div>

      <!-- Next button -->
      <button
        @click="nextCity"
        class="bg-blue-500 text-white px-2 py-1 rounded"
      >
        Next &rarr;
      </button>
    </div>

    <!-- WEATHER CONTENT -->
    <div v-if="currentWeather">
      <p>Temp: {{ currentWeather.main.temp.toFixed(1) }} °C</p>
      <p>{{ currentWeather.weather[0].description }}</p>

     
      <!-- The Chart -->
      <!-- NOTE: :key="currentCity" ensures a new chart component each time city changes -->
      <WeatherChart
        v-if="showChart"
        :key="currentCity"
        :city="currentCity"
        :weatherData="currentWeather"
      />
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>

    <!-- AUTO-ROTATION CHECKBOX -->
    <div class="mt-4">
      <label class="flex items-center space-x-2">
        <input type="checkbox" v-model="autoRotate" />
        <span>Auto Rotate</span>
      </label>
    </div>

    <template #footer>
      <small class="text-gray-500">Data from OpenWeatherMap</small>
    </template>
  </Card>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watchEffect } from 'vue'
import { useWeatherStore } from '@/stores/useWeatherStore.js'
import WeatherChart from './WeatherChart.vue'
import Card from '@/components/dashboard/homeCard.vue'

// Some sample cities
const cities = ['Toronto', 'London', 'New York', 'Tokyo', 'Paris', 'Sydney', 'Rio de Janeiro']

// Reference to the Weather Store (Pinia)
const weatherStore = useWeatherStore()

// Current city index
const currentIndex = ref(0)

// Flag to show/hide the chart
const showChart = ref(true)

// Auto-rotation state
const autoRotate = ref(true)

// Interval ID for auto-rotation
let rotationIntervalId = null

// Flag to know if the component is currently mounted
let isMounted = false

// Computed property for the current city name
const currentCity = computed(() => cities[currentIndex.value])

// Computed property for the weather of the current city from the store
const currentWeather = computed(() => {
  return weatherStore.weatherCache[currentCity.value] || null
})

// Load the weather for the current city (from the store if cached, or from API if not)
async function loadCurrentCityWeather() {
  if (!isMounted) return
  try {
    await weatherStore.loadCityWeather(currentCity.value)
  } catch (err) {
    console.error('Error loading city weather:', err)
  }
}

// Move to previous city
async function prevCity() {
  if (!isMounted) return
  if (currentIndex.value === 0) {
    currentIndex.value = cities.length - 1
  } else {
    currentIndex.value--
  }
  await loadCurrentCityWeather()
}

// Move to next city
async function nextCity() {
  if (!isMounted) return
  currentIndex.value = (currentIndex.value + 1) % cities.length
  await loadCurrentCityWeather()
}

// Start auto-rotation every 5 seconds
function startAutoRotation() {
  stopAutoRotation()
  rotationIntervalId = setInterval(() => {
    nextCity()
  }, 5000)
}

// Stop auto-rotation
function stopAutoRotation() {
  if (rotationIntervalId) {
    clearInterval(rotationIntervalId)
    rotationIntervalId = null
  }
}

// Watch the autoRotate flag, start or stop the interval accordingly
watchEffect(() => {
  if (!isMounted) return
  if (autoRotate.value) {
    startAutoRotation()
  } else {
    stopAutoRotation()
  }
})

// On component mount
onMounted(() => {
  isMounted = true
  loadCurrentCityWeather()
  if (autoRotate.value) {
    startAutoRotation()
  }
})

// On component unmount
onUnmounted(() => {
  isMounted = false
  stopAutoRotation()
})
</script>

<style scoped></style>
