import { useContext, useMemo } from 'react'
import { WeatherContext } from '../context/WeatherContext'

export const useFavorites = city => {
  const { favorites, toggleFavorite } = useContext(WeatherContext)
  const isFavorite = useMemo(() => {
    if (city) {
      favorites.find(record => record.city === city)
    }
  }, [toggleFavorite, favorites, city])
  return {
    isFavorite,
    favorites,
    toggleFavorite
  }
}
