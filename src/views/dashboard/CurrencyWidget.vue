<!-- src/views/CurrencyWidget.vue -->
<template>
  <Card>
    <template #header>
      <h2 class="font-semibold text-lg">Currency Rates (Base: {{ base }})</h2>
    </template>

    <div v-if="rates">
      <p>1 {{ base }} equals:</p>
      <ul class="list-disc ml-5">
        <li v-for="(rate, currencyCode) in limitedRates" :key="currencyCode">
          {{ currencyCode }}: {{ rate }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Loading currency rates...</p>
    </div>

    <template #footer>
      <small class="text-gray-500">Data from ExchangeRate-API (example)</small>
    </template>
  </Card>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import Card from '@/components/dashboard/homeCard.vue'
import { fetchCurrencyRates } from '@/services/currencyService.js'

const base = 'USD'
const rates = ref(null)

onMounted(async () => {
  try {
    const data = await fetchCurrencyRates(base)
    // data might look like { conversion_rates: { EUR: 0.9, GBP: 0.8, ... } }
    rates.value = data.conversion_rates
  } catch (err) {
    console.error(err)
  }
})

// Example: show only some currencies in the template
const limitedRates = computed(() => {
  if (!rates.value) return {}
  // pick some popular currencies
  const popular = ['EUR', 'GBP', 'CAD', 'JPY', 'BRL', 'AUD']
  return popular.reduce((obj, code) => {
    if (rates.value[code] !== undefined) {
      obj[code] = rates.value[code]
    }
    return obj
  }, {})
})
</script>

<style scoped>
</style>
