<template>
  <Card>
    <template #header>
      <h2 class="font-semibold text-lg">Weather Carousel</h2>
    </template>

    <div class="flex items-center justify-between py-2">
      <button @click="prevCity" class="bg-blue-500 text-white px-2 py-1 rounded">&larr; Prev</button>
      <div class="text-center font-bold text-xl">
        {{ currentCity }}
      </div>
      <button @click="nextCity" class="bg-blue-500 text-white px-2 py-1 rounded">Next &rarr;</button>
    </div>

    <div v-if="currentWeather">
      <p>Temp: {{ currentWeather.main.temp }} °C</p>
      <p>{{ currentWeather.weather[0].description }}</p>
      <WeatherChart :weatherData="currentWeather" />
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>

    <template #footer>
      <small class="text-gray-500">Data from OpenWeatherMap</small>
    </template>
  </Card>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useWeatherStore } from '@/stores/useWeatherStore'
import WeatherChart from './WeatherChart.vue'
import Card from '@/components/dashboard/homeCard.vue'

const cities = ['London', 'New York', 'Tokyo', 'Paris', 'Sydney']
const currentIndex = ref(0)

const weatherStore = useWeatherStore()

// Compute the current city and its data
const currentCity = computed(() => cities[currentIndex.value])
const currentWeather = computed(() => weatherStore.weatherCache[currentCity.value] || null)

async function prevCity() {
  if (currentIndex.value === 0) {
    currentIndex.value = cities.length - 1
  } else {
    currentIndex.value--
  }
  await loadCurrentCityWeather()
}

async function nextCity() {
  currentIndex.value = (currentIndex.value + 1) % cities.length
  await loadCurrentCityWeather()
}

async function loadCurrentCityWeather() {
  try {
    await weatherStore.loadCityWeather(currentCity.value)
  } catch (err) {
    console.error('Error loading city weather:', err)
  }
}

// On mount, load the first city
onMounted(() => {
  loadCurrentCityWeather()
})
</script>

<style scoped></style>
