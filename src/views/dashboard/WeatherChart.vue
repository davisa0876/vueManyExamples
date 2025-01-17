<template>
  <div style="height: 200px;">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { Chart } from 'chart.js/auto'

const props = defineProps({
  // Instead of the entire object, pass the city name + weather object separately
  city: { type: String, required: true },
  weatherData: { type: Object, required: true }
})

const chartCanvas = ref(null)
const chartInstance = ref(null)

onMounted(() => {
  initChart()
})

// Watch the city name (or your index). 
// If the user cycles back to the same city object, cityName changes => re-init or update
watch(() => props.city, () => {
  updateChart()
})

function initChart() {
  if (!chartCanvas.value || !props.weatherData?.main) return

  if (chartInstance.value) chartInstance.value.destroy()

  chartInstance.value = new Chart(chartCanvas.value, {
    type: 'bar',
    data: {
      labels: ['Temp', 'Feels Like', 'Min Temp', 'Max Temp'],
      datasets: [{
        label: `Weather for ${props.city}`,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        data: [
          props.weatherData.main.temp,
          props.weatherData.main.feels_like,
          props.weatherData.main.temp_min,
          props.weatherData.main.temp_max
        ]
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  })
}

function updateChart() {
  // If there's no chart yet, init
  if (!chartInstance.value) {
    initChart()
    return
  }
  
  const d = chartInstance.value.data.datasets[0]
  d.label = `Weather for ${props.city}`
  d.data = [
    props.weatherData.main.temp,
    props.weatherData.main.feels_like,
    props.weatherData.main.temp_min,
    props.weatherData.main.temp_max
  ]
  chartInstance.value.update()
}
</script>
