import { useQuery } from '@tanstack/react-query'
import { getWeather } from '../api/requests/getWeather'

export const useWeather = city => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['getW', city],
    queryFn: () => getWeather(city),
    retry: 2,
    enabled: !!city
  })

  return {
    data: data,
    error: error,
    isLoading: isLoading
  }
}
