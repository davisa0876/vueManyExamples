<template>
  <div class="w-full mt-4" style="height: 200px;">
    <canvas ref="chartCanvas" class="w-full h-full"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { Chart } from 'chart.js/auto'

/**
 * Props:
 *  - city: The current city name (string).
 *  - weatherData: The weather object containing main.temp, etc.
 */
const props = defineProps({
  city: { type: String, required: true },
  weatherData: { type: Object, required: true }
})

const chartCanvas = ref(null)
const chartInstance = ref(null)

// Track if the chart component is mounted
let isChartMounted = false

// Mark as mounted => init the chart
onMounted(() => {
  isChartMounted = true
  initChart()
})

// On unmount => destroy the chart
onUnmounted(() => {
  isChartMounted = false
  if (chartInstance.value) {
    chartInstance.value.destroy()
    chartInstance.value = null
  }
})

// Watch the city prop => re-init if city changes, or you can update chart
watch(
  () => props.city,
  () => {
    console.log('WeatherChart: city changed => updateChart()')
    updateChart()
  }
)

/** Initialize the chart if the data is available */
function initChart() {
  if (!isChartMounted) return

  // Ensure we have a canvas and valid weather data
  if (!chartCanvas.value || !props.weatherData?.main) {
    console.warn('Chart init: canvas or weatherData.main is missing.')
    return
  }

  // Destroy existing if any
  if (chartInstance.value) {
    chartInstance.value.destroy()
    chartInstance.value = null
  }

  chartInstance.value = new Chart(chartCanvas.value, {
    type: 'bar',
    data: {
      labels: ['Temp', 'Feels', 'Min', 'Max'],
      datasets: [
        {
          label: `Weather in ${props.city}`,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          data: [
            props.weatherData.main.temp,
            props.weatherData.main.feels_like,
            props.weatherData.main.temp_min,
            props.weatherData.main.temp_max
          ]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  })
}

/** Update the chart if it exists */
function updateChart() {
  if (!isChartMounted) return

  // If no chart instance, init again
  if (!chartInstance.value) {
    initChart()
    return
  }

  // If Chart.js sees the instance as destroyed
  if (chartInstance.value._destroyed || !chartInstance.value.ctx) {
    console.log('chartInstance was destroyed or has no ctx => re-init')
    initChart()
    return
  }

  if (!props.weatherData?.main) {
    console.warn('Cannot update chart: weatherData.main is missing')
    return
  }

  try {
    const dataset = chartInstance.value.data.datasets[0]
    dataset.label = `Weather in ${props.city}`

    // Log the new values
    console.log(props.weatherData.main.temp)
    console.log(props.weatherData.main.feels_like)
    console.log(props.weatherData.main.temp_min)
    console.log(props.weatherData.main.temp_max)

    dataset.data = [
      props.weatherData.main.temp,
      props.weatherData.main.feels_like,
      props.weatherData.main.temp_min,
      props.weatherData.main.temp_max
    ]

    chartInstance.value.update()
  } catch (err) {
    console.error('Error updating chart:', err)
  }
}
</script>

<style scoped></style>
