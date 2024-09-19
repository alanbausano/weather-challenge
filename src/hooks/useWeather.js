import { useQuery } from '@tanstack/react-query'
import { getForecast, getWeather } from '../api/requests/getWeather'

export const useWeather = (city, cityDetail) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['getW', city],
    queryFn: () => getWeather(city),
    retry: 2,
    enabled: !!city
  })

  const {
    data: forecastData,
    error: isForecastError,
    isLoading: isForecastLoading
  } = useQuery({
    queryKey: ['getF', cityDetail],
    queryFn: () => getForecast(cityDetail),
    retry: 2,
    enabled: !!cityDetail
  })

  const forecastThreeDays = forecastData?.forecast?.forecastday

  return {
    forecastThreeDays,
    isForecastError,
    isForecastLoading,
    data: data,
    error: error,
    isLoading: isLoading
  }
}
