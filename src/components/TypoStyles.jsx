import { Typography } from '@mui/material'
import React from 'react'

export const Title = ({ children }) => {
  return (
    <Typography
      fontSize={20}
      lineHeight={2}
      fontWeight="bold"
      component="p"
      sx={{ marginX: '10px' }}
    >
      {children}
    </Typography>
  )
}

export const Info = ({ children }) => {
  return (
    <Typography variant="body1" component="span" fontSize={20} sx={{ textDecoration: 'underline' }}>
      {children}
    </Typography>
  )
}
