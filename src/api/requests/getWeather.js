import api from '../config/api'

export const getWeather = async city => {
  try {
    const response = await api.get(`/current.json`, {
      params: {
        q: city
      }
    })
    return response.data
  } catch (error) {
    console.error('Error fetching weather data:', error)
    throw error
  }
}
