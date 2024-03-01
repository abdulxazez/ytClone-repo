import react from 'react'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material';
import {Navbar, Feed, SearchFeed, ChannelDetail, VideoDetail} from './components'
const App = () => (
   <BrowserRouter>
    <Box sx={{backgroundColor: '#000'}}>
        <Navbar />
        <Routes>
            <Route path="/" exact element={<Feed/>}/>
            <Route path="/search/:searchTerm"  element={<SearchFeed/>}/>
            <Route path="/channel/:id"  element={<ChannelDetail/>}/>
            <Route path="/video/:id"  element={<VideoDetail/>}/>
            
        </Routes> 
    </Box>
   </BrowserRouter>
);
export default App;