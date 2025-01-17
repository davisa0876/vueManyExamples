import { defineStore } from 'pinia'
import { fetchCityWeather } from '@/services/weatherService' // your existing function

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    // e.g., { "London": {...}, "Paris": {...} }
    weatherCache: {},
  }),

  actions: {
    async loadCityWeather(city) {
      // If city is already cached, just return it
      if (this.weatherCache[city]) {
        return this.weatherCache[city]
      }
      // Otherwise, fetch from your local or external API
      try {
        const data = await fetchCityWeather(city)
        // Store it in the cache
        this.weatherCache[city] = data
        return data
      } catch (err) {
        console.error('Failed to fetch city weather:', err)
        throw err
      }
    },

    // Optional: Clear or update the cache if you want
    clearWeather(city) {
      if (city) {
        delete this.weatherCache[city]
      } else {
        this.weatherCache = {}
      }
    }
  }
})
