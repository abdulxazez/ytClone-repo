import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import {Videos, SideBar, VideoCard, ChannelCard} from './index.js'
import { fetchFromAPI } from '../utils/fetchFromAPI'; 

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=$
    {selectedCategory}`)
    .then((data) => setVideos(data.items))
   
  }, [])
  
  return (
    <Stack
    sx={{flexDirection: 
      {sx: "column", md:"row", bb:"2px solid white"}
    }}>
      <Box
      sx={{height: {sx:'auto', md:'92vh'},
      borderRight:'1px solid white',
      px:{sx:'0', md:2}}}>
        <SideBar 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}/>
        <Typography
        className="copyright"
        variant='body2'
        sx={{mb:'2', color:'#fff'}}>
          Copyright JSM Media 2024 inc.
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:"auto", height:"90vh", flex: 2 }}>
        <Typography variant="h4" fontweight="bold" mb={2} sx={{color:"white"}}>
          <span style={{color:"red"}}>{selectedCategory}</span> Videos
        </Typography>
        <Videos videos={videos}/>
      </Box>
      </Stack>
  )
}

export default Feed