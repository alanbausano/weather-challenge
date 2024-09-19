import { Box } from '@mui/material'
import React from 'react'
import { SearchBar } from './SearchBar'
import { Button } from '@mui/joy'
import { FavoriteBorder } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export const Header = ({ handleSubmit, city, setCity }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginY: 3, width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <SearchBar handleSubmit={handleSubmit} city={city} setCity={setCity} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          marginLeft: 10
        }}
      >
        <Link to="/favorites">
          <Button startDecorator={<FavoriteBorder />}>See your favorite cities</Button>
        </Link>
      </Box>
    </Box>
  )
}
