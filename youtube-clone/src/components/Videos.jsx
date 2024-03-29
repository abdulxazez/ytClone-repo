import React from 'react'
import { Stack, Box, stackClasses } from '@mui/material'
import {VideoCard, ChannelCard} from './index'
const Videos = ({ videos }) => {
  return (
   <Stack direction="row" flexWrap="wrap" justifyContent="start"
   gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard
          video={item}/>}
                    {item.id.channelId && <ChannelCard
          video={item}/>} 
        </Box>
      ))}
   </Stack>
  )
}

export default Videos;