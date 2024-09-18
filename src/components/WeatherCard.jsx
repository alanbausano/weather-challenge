import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Info, Title } from './TypoStyles'
import { Box } from '@mui/material'
import Button from '@mui/joy/Button'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'

const WeatherCard = ({ city, country, humidity, windVel, description, icon }) => (
  <Card
    sx={{
      backgroundColor: '#282c34',
      color: '#fff',
      width: '20%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }}
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
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
          gap: 1,
          marginTop: 3
        }}
      >
        <Button startDecorator={<FavoriteBorder />} size="md" color={true ? 'primary' : 'danger'}>
          {true ? 'Add to favorites' : 'Delete from favorites'}
        </Button>
        <Button size="md" variant="solid" color="neutral">
          See details
        </Button>
      </Box>
    </CardContent>
  </Card>
)

export default WeatherCard
