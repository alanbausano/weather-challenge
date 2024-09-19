import React, { useContext, useMemo } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Info, Title } from './TypoStyles'
import { Box } from '@mui/material'
import Button from '@mui/joy/Button'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import { WeatherContext } from '../context/WeatherContext'
import { useLocation, useNavigate } from 'react-router-dom'

const WeatherCard = ({ city, country, humidity, windVel, description, icon, id }) => {
  const { favorites, toggleFavorite } = useContext(WeatherContext)
  const navigate = useNavigate()
  const location = useLocation()

  const isFavorite = useMemo(
    () => favorites.find(record => record.city === city),
    [toggleFavorite, favorites, city]
  )

  const isDetails = location.pathname.includes('details')

  const handleSeeDetails = () => {
    navigate(`/details/${city}`, {
      state: {
        city,
        country,
        humidity,
        windVel,
        description,
        icon,
        id
      }
    })
  }

  const favCity = {
    city,
    country,
    humidity,
    windVel,
    description,
    icon,
    id
  }

  return (
    <Card
      sx={{
        backgroundColor: '#282c34',
        color: '#E0E0E0',
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}
      key={id}
    >
      <CardContent>
        <Typography variant="h5">
          {city} - {country}
        </Typography>
        <img src={icon} alt="description" />
        <Title>
          Humidity: <Info>{humidity}%</Info>
        </Title>
        <Title>
          Wind Velocity: <Info>{windVel} km/h</Info>
        </Title>
        <Title>
          Description: <Info>{description}</Info>
        </Title>
        {isDetails ? null : (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: isDetails ? '1fr' : 'repeat(2, minmax(80px, 1fr))',
              gap: 1,
              marginTop: 3
            }}
          >
            <Button
              onClick={() => toggleFavorite(favCity)}
              startDecorator={<FavoriteBorder />}
              size="md"
              color={!isFavorite ? 'primary' : 'danger'}
            >
              {!isFavorite ? 'Add' : 'Delete'}
            </Button>
            <Button size="md" variant="solid" color="neutral" onClick={handleSeeDetails}>
              See details
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  )
}

export default WeatherCard
