import { Box, Container, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { SearchBar } from './SearchBar'
import { Button } from '@mui/joy'
import { ArrowRightAlt } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export const Layout = ({ children, handleSubmit, city, setCity }) => {
  const theme = useTheme()
  const xxl = '1920'
  const mdToXxl = useMediaQuery(theme.breakpoints.between('md', xxl))

  return (
    <>
      {mdToXxl ? (
        <Container maxWidth="xl">
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
                <Button>
                  See your favorite cities
                  <ArrowRightAlt />
                </Button>
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center'
            }}
          >
            {children}
          </Box>
        </Container>
      ) : (
        <Container maxWidth="sm">
          <SearchBar handleSubmit={handleSubmit} city={city} setCity={setCity} />

          <Box sx={{ margin: '30px' }}>{children}</Box>
        </Container>
      )}
    </>
  )
}
