import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import { ForecastCard } from '../components/ForecastCard'

test('renders ForecastCard with proper data', () => {
  const mockData = {
    date: '2024-09-15',
    chanceOfRain: 60,
    min: 10,
    max: 25,
    avgHumidity: 70,
    condition: { text: 'Cloudy' },
    icon: 'cloudy-icon-url',
    id: 1
  }

  render(<ForecastCard {...mockData} />)

  expect(screen.getByText('2024-09-15')).toBeInTheDocument()
  expect(screen.getByText('Average Humidity:')).toBeInTheDocument()
  expect(screen.getByText('70%')).toBeInTheDocument()
  expect(screen.getByText('Condition:')).toBeInTheDocument()
  expect(screen.getByText('Cloudy')).toBeInTheDocument()
  expect(screen.getByText('Chance of rain:')).toBeInTheDocument()
  expect(screen.getByText('60%')).toBeInTheDocument()
  expect(screen.getByText('Min:')).toBeInTheDocument()
  expect(screen.getByText('10°C')).toBeInTheDocument()
  expect(screen.getByText('Max:')).toBeInTheDocument()
  expect(screen.getByText('25°C')).toBeInTheDocument()

  const img = screen.getByAltText('description')
  expect(img).toHaveAttribute('src', 'cloudy-icon-url')
})
