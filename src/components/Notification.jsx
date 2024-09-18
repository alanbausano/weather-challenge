import { Alert, Snackbar } from '@mui/material'

import React from 'react'

export const Notification = ({ open }) => {
  return (
    <Snackbar open={open} autoHideDuration={3000}>
      <Alert severity="error" variant="filled" sx={{ width: '100%' }}>
        City couldn't be found, try again.
      </Alert>
    </Snackbar>
  )
}
