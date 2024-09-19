import { render, screen, fireEvent } from '@testing-library/react'
import { expect, test } from 'vitest'
import { InputField } from '../components/Input'

test('renders InputField and handles changes', () => {
  const handleChange = vi.fn()

  render(<InputField label="Enter text" value="Test value" onChange={handleChange} />)

  const inputElement = screen.getByPlaceholderText(/enter text/i)
  expect(inputElement).toBeInTheDocument()

  expect(inputElement).toHaveValue('Test value')

  fireEvent.change(inputElement, { target: { value: 'New input' } })

  expect(handleChange).toHaveBeenCalledTimes(1)
})
