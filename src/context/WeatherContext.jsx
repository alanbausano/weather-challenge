import React, { createContext, useState } from 'react';

export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [weatherData, setWeatherData] = useState({});

  return (
    <WeatherContext.Provider value={{ favorites, setFavorites, weatherData, setWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
}