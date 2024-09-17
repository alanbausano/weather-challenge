import { useQuery } from '@tanstack/react-query'
import { getWeather } from '../api/requests/getWeather'

export const useWeather = city => {
  const { data, error } = useQuery({
    queryKey: ['getW', city],
    queryFn: () => getWeather(city || 'london')
  })
  return {
    data: data,
    error: error
  }
}
