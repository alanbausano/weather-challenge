import React, { createContext, useEffect, useState } from 'react'

export const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites')
    return savedFavorites ? JSON.parse(savedFavorites) : []
  })

  const [weatherData, setWeatherData] = useState({})

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = cityObj => {
    setFavorites(prevFavorites => {
      if (prevFavorites.find(fav => fav.city === cityObj.city)) {
        return prevFavorites.filter(fav => fav.city !== cityObj.city)
      } else {
        return [...prevFavorites, cityObj]
      }
    })
  }

  return (
    <WeatherContext.Provider
      value={{ favorites, setFavorites, weatherData, setWeatherData, toggleFavorite }}
    >
      {children}
    </WeatherContext.Provider>
  )
}
