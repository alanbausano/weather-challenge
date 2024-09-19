import { render, screen, fireEvent } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { WeatherContext } from '../context/WeatherContext'
import WeatherCard from '../components/WeatherCard'

const mockCityData = {
  city: 'Paris',
  country: 'France',
  id: 1
}

const mockFavorites = [{ city: 'Paris', country: 'France' }]

const renderWithContext = (ui, { contextValue }) => {
  return render(
    <WeatherContext.Provider value={contextValue}>
      <BrowserRouter>{ui}</BrowserRouter>
    </WeatherContext.Provider>
  )
}

test('renders WeatherCard with city info', () => {
  renderWithContext(<WeatherCard {...mockCityData} />, { contextValue: { favorites: [] } })

  expect(screen.getByText('Paris - France')).toBeInTheDocument()
})

test('adds and removes favorite cities', () => {
  const toggleFavorite = vi.fn()

  renderWithContext(<WeatherCard {...mockCityData} />, {
    contextValue: { favorites: [], toggleFavorite }
  })

  const addButton = screen.getByText('Add')
  expect(addButton).toBeInTheDocument()

  fireEvent.click(addButton)
  expect(toggleFavorite).toHaveBeenCalledWith(mockCityData)
})

test('shows "Delete" if city is already a favorite', () => {
  renderWithContext(<WeatherCard {...mockCityData} />, {
    contextValue: { favorites: mockFavorites }
  })

  const deleteButton = screen.getByText('Delete')
  expect(deleteButton).toBeInTheDocument()
})

test('navigates to details page when "See details" is clicked', () => {
  renderWithContext(<WeatherCard {...mockCityData} />, { contextValue: { favorites: [] } })

  const detailsButton = screen.getByText('See details')
  fireEvent.click(detailsButton)

  expect(screen.getByText('Paris - France')).toBeInTheDocument()
})
