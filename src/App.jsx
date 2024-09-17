import { Details } from './pages/Details'
import { Favorites } from './pages/Favorites'
import { Home } from './pages/Home'

function App() {
  return (
    <WeatherProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/details/:city" element={<Details />} />
        </Routes>
      </Router>
    </WeatherProvider>
  )
}

export default App
