<!-- src/views/dasboard/CryptoWidget.vue -->
<template>
  <Card>
    <template #header>
      <h2 class="font-semibold text-lg">Crypto Prices</h2>
    </template>

    <div v-if="coins.length">
      <!-- A minimal table listing or a graph -->
      <table class="min-w-full text-left">
        <thead>
          <tr>
            <th class="p-2 border-b">Coin</th>
            <th class="p-2 border-b">Price (USD)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="coin in coins.slice(0,5)" :key="coin.id">
            <td class="p-2 border-b">{{ coin.name }}</td>
            <td class="p-2 border-b">{{ coin.current_price.toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>Loading coins...</p>
    </div>

    <template #footer>
      <small class="text-gray-500">Data from CoinGecko</small>
    </template>
  </Card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Card from '@/components/dashboard/homeCard.vue'

import { fetchCryptoPrices } from '@/services/cryptoService.js' 


const coins = ref([])

onMounted(async () => {
  try {
    const data = await fetchCryptoPrices()
    coins.value = data
  } catch (err) {
    console.error(err)
  }
})
</script>

<style scoped>
</style>
