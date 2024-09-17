import { Box, Container, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

export const Layout = ({ children }) => {
  const theme = useTheme()
  const xxl = '1920'
  const mdToXxl = useMediaQuery(theme.breakpoints.between('md', xxl))
  return (
    <>
      {mdToXxl ? (
        <Container maxWidth="xl">
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
          <Box sx={{ margin: '30px' }}>{children}</Box>
        </Container>
      )}
    </>
  )
}
