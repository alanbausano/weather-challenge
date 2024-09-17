import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { WeatherProvider } from './context/WeatherContext'
import { Details } from './pages/Details'
import { Favorites } from './pages/Favorites'
import { Home } from './pages/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/details/:city" element={<Details />} />
        </Routes>
      </WeatherProvider>
    </QueryClientProvider>
  )
}

export default App
