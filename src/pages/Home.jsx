import React, { useEffect, useState } from 'react'
import { useWeather } from '../hooks/useWeather'
import { Layout } from '../components/Layout'
import WeatherCard from '../components/WeatherCard'
import { Box, CircularProgress } from '@mui/material'
import { Notification } from '../components/Notification'
import { Title } from '../components/TypoStyles'
import { useDebounce } from 'use-debounce'

export const Home = () => {
  const [city, setCity] = useState('')
  const [debouncedValue] = useDebounce(city, 500)
  const { data, error, isLoading } = useWeather(debouncedValue)

  const handleSubmit = event => {
    event.preventDefault()
    setCity('')
  }

  return (
    <Layout city={city} setCity={setCity} handleSubmit={handleSubmit}>
      {!data && !isLoading && (
        <Box>
          <Title sx={{ color: 'rgb(190, 190, 190)', fontWeight: '5px' }}>
            No cities provided yet, try searching for one.
          </Title>
        </Box>
      )}
      {isLoading && (
        <Box>
          <CircularProgress />
        </Box>
      )}
      {error && (
        <>
          <Title>City not found</Title>
          <Notification open={!!error} />
        </>
      )}
      {data && (
        <WeatherCard
          country={data?.location?.country}
          city={data?.location?.name}
          humidity={data?.current?.humidity}
          windVel={data?.current?.wind_kph}
          description={data?.current?.condition?.text}
          icon={data?.current?.condition?.icon}
        />
      )}
    </Layout>
  )
}
