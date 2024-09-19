import { Box, Typography } from '@mui/material'
import React from 'react'

export const Title = ({ children, sx, fontSize }) => {
  const combinedSx = {
    ...sx,
    marginX: '10px'
  }
  return (
    <Box>
      <Typography
        fontSize={fontSize || 20}
        lineHeight={2}
        fontWeight="bold"
        component="span"
        sx={combinedSx}
      >
        {children}
      </Typography>
    </Box>
  )
}

export const Info = ({ children }) => {
  return (
    <Typography variant="body1" component="span" fontSize={20} sx={{ textDecoration: 'underline' }}>
      {children}
    </Typography>
  )
}
