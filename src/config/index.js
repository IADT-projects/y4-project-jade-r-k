import axios from 'axios';

//api url
export default axios.create({
    baseURL: 'https://api.artic.edu/api/v1/artworks'
});