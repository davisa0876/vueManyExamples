// src/services/weatherService.js
import { get } from './api.js'

/*
  Example usage of the "get" wrapper to fetch weather data.
  We'll assume:
   - The base URL is set in VITE_API_BASE_URL, or
   - You can specify the full URL if the base doesn't match
*/
export async function fetchCityWeather(cityName) {
  // If your baseURL in api.js is something like
  // "https://api.openweathermap.org/data/2.5",
  // then you can just pass the endpoint below.
  // If it doesn't match, pass the full URL.
  
  // Example: /weather?q=London&appid=YourApiKey&units=metric
  const token = null // or some token if needed, otherwise null
  try {
    const response = await get(`/weather`, token, {
      params: {
        q: cityName,
        appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
        units: 'metric'
      }
    })
    return response // The Axios wrapper "get" returns .data by default
  } catch (err) {
    console.error('Failed to fetch city weather:', err)
    throw err
  }
}
