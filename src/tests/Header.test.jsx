import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { expect, test, vi } from 'vitest'
import { Header } from '../components/Header'

test('renders Header with SearchBar and Favorites button', () => {
  const handleSubmitMock = vi.fn()
  const setCityMock = vi.fn()

  render(
    <Router>
      <Header handleSubmit={handleSubmitMock} city="Test City" setCity={setCityMock} />
    </Router>
  )

  const searchBar = screen.getByPlaceholderText(/search for cities/i)
  expect(searchBar).toBeInTheDocument()

  const favoritesButton = screen.getByText(/see your favorite cities/i)
  expect(favoritesButton).toBeInTheDocument()

  const linkElement = screen.getByRole('link', { name: /see your favorite cities/i })
  expect(linkElement).toHaveAttribute('href', '/favorites')
})
