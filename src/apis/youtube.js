import axios from 'axios';

const KEY = 'AIzaSyCXSYAHXWwk-ie1J0QU3EhTl9ypldUcDB4'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});