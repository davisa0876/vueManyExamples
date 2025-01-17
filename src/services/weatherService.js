// src/services/weatherService.js
import { get } from './api.js'

/**
 * Fetch city weather from our Laravel backend,
 * which in turn calls the external weather API.
 */
export async function fetchCityWeather(cityName) {
  const token = null // or a JWT if your Laravel API is protected
  try {
    // Now we call our local Laravel endpoint:
    // GET /api/weather?city=London
    const response = await get(`/weather`, token, {
      params: { city: cityName }
    })
    return response
  } catch (err) {
    console.error('Failed to fetch city weather via Laravel:', err)
    throw err
  }
}
