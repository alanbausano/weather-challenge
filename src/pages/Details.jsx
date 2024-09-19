import { Button } from '@mui/joy'
import { Box, CircularProgress } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import WeatherCard from '../components/WeatherCard'
import { Home } from '@mui/icons-material'
import { Title } from '../components/TypoStyles'
import { ForecastCard } from '../components/ForecastCard'
import { useWeather } from '../hooks/useWeather'
import { Layout } from '../components/Layout'
import { Notification } from '../components/Notification'

export const Details = () => {
  const location = useLocation()
  const { city, country, humidity, windVel, description, icon, id } = location.state
  const { forecastThreeDays, isForecastLoading, isForecastError } = useWeather(null, city)

  return (
    <>
      <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <Title fontSize={25} sx={{ color: '#E0E0E0' }}>
          Detail & forecast
        </Title>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            marginLeft: 10
          }}
        >
          <Link to="/">
            <Button startDecorator={<Home />}>Back to home</Button>
          </Link>
        </Box>
      </Box>
      {isForecastLoading && (
        <Box
          sx={{
            width: '100%',
            marginY: '40px',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <CircularProgress />
        </Box>
      )}
      <Layout>
        {isForecastError && (
          <>
            <Title
              sx={{
                color: 'rgb(169, 46, 46)',
                fontWeight: '8px',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              Error finding citie's forecast
            </Title>
            <Notification open={!!isForecastError} />
          </>
        )}
        {forecastThreeDays && (
          <>
            <WeatherCard
              city={city}
              country={country}
              humidity={humidity}
              windVel={windVel}
              description={description}
              icon={icon}
            />
            {forecastThreeDays?.map(forecast => (
              <ForecastCard
                key={forecast.date_epoch}
                id={forecast.date_epoch}
                date={forecast.date}
                min={forecast.day.mintemp_c}
                max={forecast.day.maxtemp_c}
                condition={forecast.day.condition}
                chanceOfRain={forecast.day.daily_chance_of_rain}
                avgHumidity={forecast.day.avghumidity}
                icon={forecast.day.condition.icon}
              />
            ))}
          </>
        )}
      </Layout>
    </>
  )
}
