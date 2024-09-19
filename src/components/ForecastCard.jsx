import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { Info, Title } from './TypoStyles'

export const ForecastCard = ({
  date,
  chanceOfRain,
  min,
  max,
  avgHumidity,
  condition,
  icon,
  id
}) => {
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
        <Typography variant="h5">{date}</Typography>
        <img src={icon} alt="description" />
        <Title>
          Average Humidity: <Info>{avgHumidity}%</Info>
        </Title>
        <Title>
          Condition: <Info>{condition.text}</Info>
        </Title>
        <Title>
          Chance of rain: <Info>{chanceOfRain}%</Info>
        </Title>
        <Title>
          Min: <Info>{min}°C</Info>
        </Title>
        <Title>
          Max: <Info>{max}°C</Info>
        </Title>
      </CardContent>
    </Card>
  )
}
