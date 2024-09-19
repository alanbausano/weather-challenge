import React, { useContext, useState } from 'react'
import { useWeather } from '../hooks/useWeather'
import { Layout } from '../components/Layout'
import WeatherCard from '../components/WeatherCard'
import { Box, CircularProgress } from '@mui/material'
import { Notification } from '../components/Notification'
import { Title } from '../components/TypoStyles'
import { useDebounce } from 'use-debounce'
import { WeatherContext } from '../context/WeatherContext'

export const Home = () => {
  const [city, setCity] = useState('')
  const [debouncedValue] = useDebounce(city, 500)
  const { data, error, isLoading } = useWeather(debouncedValue)
  const { toggleFavorites } = useContext(WeatherContext)

  const handleSubmit = event => {
    event.preventDefault()
    setCity('')
  }

  return (
    <Layout city={city} setCity={setCity} handleSubmit={handleSubmit}>
      {!data && !isLoading && !error && (
        <Box
          sx={{
            color: 'green',
            fontWeight: '5px',
            width: '100%'
          }}
        >
          <Title
            sx={{
              color: 'rgb(190, 190, 190)',
              fontWeight: '5px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
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
          <Title
            sx={{
              color: 'rgb(169, 46, 46)',
              fontWeight: '8px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            City not found, try with a different one.
          </Title>
          <Notification open={!!error} />
        </>
      )}
      {data && (
        <WeatherCard
          id={data?.location.localtime_epoch}
          country={data?.location?.country}
          city={data?.location?.name}
          humidity={data?.current?.humidity}
          windVel={data?.current?.wind_kph}
          description={data?.current?.condition?.text}
          icon={data?.current?.condition?.icon}
          toggleFavorite={toggleFavorites}
        />
      )}
    </Layout>
  )
}
