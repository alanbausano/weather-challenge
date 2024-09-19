import { Box, Container, useMediaQuery, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from './Header'
import { WeatherContext } from '../context/WeatherContext'

export const Layout = ({ children, handleSubmit, city, setCity }) => {
  const { favorites } = useContext(WeatherContext)

  const location = useLocation()
  const theme = useTheme()
  const isHome = location.pathname === '/'

  const isXl = useMediaQuery(theme.breakpoints.up('xl'))
  const isLg = useMediaQuery(theme.breakpoints.between('lg', 'xl'))
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'))
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <>
      <Container maxWidth={isXl ? 'xl' : isLg ? 'lg' : 'sm'}>
        {isHome && <Header handleSubmit={handleSubmit} city={city} setCity={setCity} />}
        <Box
          sx={{
            height: '100%',
            width: '100%',
            display: 'grid',
            gridTemplateColumns:
              isHome || !favorites.length
                ? null
                : isXl
                  ? 'repeat(5, 1fr)'
                  : isLg
                    ? 'repeat(4, 1fr)'
                    : isMd
                      ? 'repeat(2, 1fr)'
                      : isSm
                        ? 'repeat(1, 1fr)'
                        : 'repeat(2, 1fr)',
            gap: '1.5rem',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px'
          }}
        >
          {children}
        </Box>
      </Container>
    </>
  )
}
