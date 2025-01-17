<!-- src/views/dashboard/WeatherWidget.vue -->
<template>
  <Card>
    <!-- Named slot "header" -->
    <template #header>
      <h2 class="font-semibold text-lg">Weather: {{ city }}</h2>
    </template>

    <!-- Default slot for the main body content -->
    <div v-if="weatherData">
      <p>Temp: {{ weatherData.main.temp }} °C</p>
      <p>{{ weatherData.weather[0].description }}</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>

    <!-- Named slot "footer" -->
    <template #footer>
      <small class="text-gray-500">Data from OpenWeatherMap</small>
    </template>
  </Card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// src/views/dashboard/WeatherWidget.vue
import Card from '@/components/dashboard/homeCard.vue'

import { fetchCityWeather } from '@/services/weatherService.js'

const city = 'London'
const weatherData = ref(null)

onMounted(async () => {
  try {
    const data = await fetchCityWeather(city)
    weatherData.value = data
  } catch (err) {
    console.error(err)
  }
})
</script>

<style scoped>
</style>
