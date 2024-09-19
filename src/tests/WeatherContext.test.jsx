import { render, screen, fireEvent } from '@testing-library/react'
import { test, expect, describe, beforeEach } from 'vitest'
import { WeatherProvider, WeatherContext } from '../context/WeatherContext'
import React from 'react'

const TestComponent = () => {
  const { favorites, toggleFavorite } = React.useContext(WeatherContext)

  const cityObj = {
    city: 'New York',
    country: 'USA',
    humidity: 60,
    windVel: 5,
    description: 'Clear',
    icon: ''
  }

  return (
    <div>
      <button onClick={() => toggleFavorite(cityObj)}>Toggle Favorite</button>
      <div data-testid="favorites-count">{favorites.length}</div>
    </div>
  )
}

describe('WeatherContext', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('should initialize favorites from localStorage', () => {
    localStorage.setItem(
      'favorites',
      JSON.stringify([
        {
          city: 'New York',
          country: 'USA',
          humidity: 60,
          windVel: 5,
          description: 'Clear',
          icon: ''
        }
      ])
    )

    render(
      <WeatherProvider>
        <TestComponent />
      </WeatherProvider>
    )

    expect(screen.getByTestId('favorites-count')).toHaveTextContent('1')
  })

  test('should toggle favorite correctly', () => {
    render(
      <WeatherProvider>
        <TestComponent />
      </WeatherProvider>
    )

    fireEvent.click(screen.getByText('Toggle Favorite'))
    expect(screen.getByTestId('favorites-count')).toHaveTextContent('1')

    fireEvent.click(screen.getByText('Toggle Favorite'))
    expect(screen.getByTestId('favorites-count')).toHaveTextContent('0')
  })
})
