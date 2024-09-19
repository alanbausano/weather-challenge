import { Box } from '@mui/material'
import React, { useContext } from 'react'
import WeatherCard from '../components/WeatherCard'
import { WeatherContext } from '../context/WeatherContext'
import { Layout } from '../components/Layout'
import { Title } from '../components/TypoStyles'
import { Home } from '@mui/icons-material'
import { Button } from '@mui/joy'
import { Link } from 'react-router-dom'

export const Favorites = () => {
  const { favorites } = useContext(WeatherContext)

  return (
    <>
      <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <Title fontSize={25} sx={{ color: '#E0E0E0' }}>
          Favorite Cities
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
      <Layout>
        {favorites.length === 0 ? (
          <Title
            sx={{
              color: 'rgb(190, 190, 190)',
              fontWeight: '5px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            No cities provided yet, try adding one.
          </Title>
        ) : (
          favorites.map(fav => (
            <WeatherCard
              key={fav.id}
              id={fav.id}
              country={fav.country}
              city={fav.city}
              humidity={fav.humidity}
              windVel={fav.wind_kph}
              description={fav.description}
              icon={fav.icon}
            />
          ))
        )}
      </Layout>
    </>
  )
}
