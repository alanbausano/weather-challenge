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

export const getForecast = async city => {
  try {
    const response = await api.get(`/forecast.json`, {
      params: {
        q: city,
        days: 5
      }
    })
    return response.data
  } catch (error) {
    console.error('Error fetching weather forecast:', error)
    throw error
  }
}
