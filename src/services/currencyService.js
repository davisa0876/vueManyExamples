// src/services/currencyService.js
import { get } from './api.js'

export async function fetchCurrencyRates(base = 'USD') {
  const token = null // or some token if the service needs authentication

  try {
    /*
      If your base URL in VITE_API_BASE_URL is set to
      https://v6.exchangerate-api.com/v6/YOUR_API_KEY
      you might just do get(`/latest/${base}`, token, { ... })
      or a full URL if it's different.
    */
    const data = await get(
      `https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_EXCHANGE_RATE_API_KEY}/latest/${base}`,
      token
    )
    return data
  } catch (error) {
    console.error(`Error fetching currency rates for base ${base}:`, error)
    throw error
  }
}
