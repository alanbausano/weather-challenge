import { render, screen } from '@testing-library/react'
import { test, expect, vitest } from 'vitest'
import App from '../App'

test('renders app and searches vite', () => {
  render(<App />)
  const viteTest = screen.getByTestId('test')
  expect(viteTest).toHaveTextContent('Vite + React')
})
