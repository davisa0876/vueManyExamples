// src/services/cryptoService.js
import { get } from './api.js'

export async function fetchCryptoPrices() {
  // If VITE_API_BASE_URL is set to something else,
  // you might need the full URL to CoinGecko, for example:
  // "https://api.coingecko.com/api/v3"
  
  // We'll show the full URL to be safe:
  const token = null // Usually not needed for CoinGecko public endpoints
  try {
    const data = await get(
      'https://api.coingecko.com/api/v3/coins/markets',
      token,
      {
        params: {
          vs_currency: 'usd',
          // and other query params like 'order', 'per_page', etc.
        }
      }
    )
    return data
  } catch (err) {
    console.error('Failed to fetch crypto prices:', err)
    throw err
  }
}
