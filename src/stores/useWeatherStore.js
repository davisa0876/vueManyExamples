// src/stores/useWeatherStore.js
import { defineStore } from 'pinia'
import { fetchCityWeather } from '@/services/weatherService.js'

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    // E.g. { 'London': { ...weatherData }, 'Paris': { ... } }
    weatherCache: {},
  }),

  actions: {
    async loadCityWeather(city) {
      // If city is already cached, return that
      if (this.weatherCache[city]) {
        return this.weatherCache[city]
      }
      // Otherwise, fetch from your local or external API
      try {
        const data = await fetchCityWeather(city)
        this.weatherCache[city] = data
        return data
      } catch (err) {
        console.error('Failed to fetch city weather:', err)
        throw err
      }
    },
  },
})
