import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import { useform } from 'react-hook-form'


const LoginTab = () => {
  return (
    <Box p={3}>
      <TextField
      variant='outlined'
      type="email"
      label="username"
      fullWidth
      />
      <TextField
      variant='outlined'
      type="email"
      label="email"
      fullWidth
      />
      <TextField
      variant='outlined'
      type="email"
      label="password"
      fullWidth
      />
      <Button
        variant="contained"
        type="submit"
        size="large"
      >
      </Button>
    </Box>
  )
}

export default LoginTab