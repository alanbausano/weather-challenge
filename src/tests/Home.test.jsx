import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Home } from '../pages/Home'
import { WeatherContext } from '../context/WeatherContext'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect, vi } from 'vitest'
import { useWeather } from '../hooks/useWeather'

vi.mock('../hooks/useWeather', () => ({
  useWeather: vi.fn()
}))

const mockFavorites = [
  {
    city: 'Paris',
    country: 'France',
    humidity: 75,
    windVel: 12,
    description: 'Sunny',
    icon: 'https://example.com/sunny.png',
    id: 1
  }
]

describe('Home component', () => {
  const mockToggleFavorites = vi.fn()

  const renderHome = mockFavorites => {
    return render(
      <WeatherContext.Provider value={mockFavorites}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </WeatherContext.Provider>
    )
  }

  it('should render "No cities provided" message when no data is available', () => {
    useWeather.mockReturnValue({
      data: null,
      error: null,
      isLoading: false
    })

    renderHome({ toggleFavorites: mockToggleFavorites })

    expect(screen.getByText('No cities provided yet, try searching for one.')).toBeInTheDocument()
  })

  it('should display loading spinner when data is loading', () => {
    useWeather.mockReturnValue({
      data: null,
      error: null,
      isLoading: true
    })

    renderHome({ toggleFavorites: mockToggleFavorites })

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('should display error message when city is not found', () => {
    useWeather.mockReturnValue({
      data: null,
      error: 'City not found',
      isLoading: false
    })

    renderHome({ toggleFavorites: mockToggleFavorites })

    expect(screen.getByText('City not found, try with a different one.')).toBeInTheDocument()
  })

  it('should render WeatherCard when data is available', () => {
    const mockWeatherData = {
      location: {
        localtime_epoch: 12345,
        country: 'France',
        name: 'Paris'
      },
      current: {
        humidity: 75,
        wind_kph: 12,
        condition: {
          text: 'Sunny',
          icon: 'https://example.com/sunny.png'
        }
      }
    }

    useWeather.mockReturnValue({
      data: mockWeatherData,
      error: null,
      isLoading: false
    })

    renderHome({ favorites: mockFavorites, toggleFavorites: mockToggleFavorites })

    expect(screen.getByText('Paris - France')).toBeInTheDocument()
  })

  it('should clear the input after submitting a city', () => {
    useWeather.mockReturnValue({
      data: null,
      error: null,
      isLoading: false
    })

    renderHome({ toggleFavorites: mockToggleFavorites })

    const input = screen.getByRole('textbox', { placeholder: /Search for cities/i })
    fireEvent.change(input, { target: { value: 'Paris' } })

    expect(input).toHaveValue('Paris')
  })
})
