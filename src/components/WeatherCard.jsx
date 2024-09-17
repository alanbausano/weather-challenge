import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Info, Title } from './TypoStyles'

const WeatherCard = ({ city, humidity, windVel, description, icon }) => (
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
      <Typography variant="h3">{city}</Typography>
      <img src={icon} alt="description" />
      <Title>
        Humidity: <Info>{humidity}%</Info>
      </Title>
      <Title>
        Wind Velocity:<Info>{windVel} km/h</Info>
      </Title>
      <Title>
        Description: <Info>{description}</Info>
      </Title>
    </CardContent>
  </Card>
)

export default WeatherCard
