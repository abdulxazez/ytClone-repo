import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import SideBar from './SideBar'
const Feed = () => {
  return (
    <Stack
    sx={{flexDirection: 
      {sx: "column", md:"row"}
    }}>
      <Box
      sx={{height: {sx:'auto', md:'92vh'},
      borderRight:'1px solid white',
      px:{sx:'0', md:2}}}>
        <SideBar />
        <Typography
        className="copyright"
        variant='body2'
        sx={{mb:'2', color:'#fff'}}>
          Copyright JSM Media 2024 inc.
        </Typography>
      </Box>
      </Stack>
  )
}

export default Feed