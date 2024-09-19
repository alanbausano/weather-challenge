import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Favorites } from '../pages/Favorites'
import React from 'react'
import { WeatherContext, WeatherProvider } from '../context/WeatherContext'
import { describe, it, expect } from 'vitest'

describe('Favorites page tests', () => {
  it('renders favorite weather cards when favorites are present', () => {
    // Mock favorites data
    const mockFavorites = [
      {
        id: 1,
        city: 'Paris',
        country: 'France'
      }
    ]

    // Mock the toggleFavorite function
    const mockToggleFavorite = vi.fn()

    // Create a mock context provider for WeatherContext
    const MockWeatherProvider = ({ children }) => (
      <WeatherContext.Provider
        value={{
          favorites: mockFavorites,
          toggleFavorite: mockToggleFavorite
        }}
      >
        {children}
      </WeatherContext.Provider>
    )

    render(
      <MemoryRouter initialEntries={[{ pathname: '/favorites' }]}>
        <MockWeatherProvider>
          <Favorites />
        </MockWeatherProvider>
      </MemoryRouter>
    )

    // Check if the favorite weather card is rendered
    expect(screen.getByText('Paris - France')).toBeInTheDocument()
  })

  it('renders message when no favorite cities are provided', () => {
    const MockWeatherProvider = ({ children }) => (
      <WeatherProvider value={{ favorites: [] }}>{children}</WeatherProvider>
    )

    render(
      <MemoryRouter initialEntries={[{ pathname: '/favorites' }]}>
        <MockWeatherProvider>
          <Favorites />
        </MockWeatherProvider>
      </MemoryRouter>
    )

    // Check if the no favorites message is rendered
    expect(screen.getByText(/No cities provided yet, try adding one/)).toBeInTheDocument()
  })
})
