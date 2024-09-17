import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_WEATHER_URL
})

api.interceptors.request.use(
  config => {
    config.headers['x-rapidapi-key'] = import.meta.env.VITE_WEATHER_API_KEY
    config.headers['x-rapidapi-host'] = import.meta.env.VITE_WEATHER_API_HOST
    return config
  },
  error => Promise.reject(error)
)

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.error(error.response)
    }
    return Promise.reject(error)
  }
)

export default api
