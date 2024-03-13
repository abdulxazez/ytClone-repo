import axios from 'axios';


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  url: BASE_URL,
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10'
  },
  headers: {
    'X-RapidAPI-Key':'51015c5bdcmshc3dc8c3d3e353bep1f0797jsnec72701e9260',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        return data;
    
};
 