<!-- src/views/Dashboard.vue -->
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
    <!-- Sample widgets -->
    <WeatherCarousel />
    <CryptoWidget />
    <CurrencyWidget />
  </div>
</template>

<script setup>
// Example: import the widgets (if they are local .vue files)
import WeatherCarousel from './dashboard/WeatherCarousel.vue'
import CryptoWidget from './dashboard/CryptoWidget.vue'
import CurrencyWidget from './dashboard/CurrencyWidget.vue'
</script>

<style scoped>
</style>
