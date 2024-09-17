import React from 'react'
import { useWeather } from '../hooks/useWeather'
import { Layout } from '../components/Layout'
import WeatherCard from '../components/WeatherCard'

export const Home = () => {
  const { data, error } = useWeather()
  return (
    <Layout>
      <WeatherCard
        city={data?.location?.name}
        humidity={data?.current?.humidity}
        windVel={data?.current?.wind_kph}
        description={data?.current?.condition?.text}
        icon={data?.current?.condition?.icon}
      />
    </Layout>
  )
}
