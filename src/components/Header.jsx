import React from 'react'
import {Box,Typography, Toolbar, AppBar} from '@mui/material'

const Header = () => {
  return (
    <Box>
        <AppBar position='static'>
           <Toolbar>
              <Typography>
                 MY_APP
              </Typography>
           </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Header
