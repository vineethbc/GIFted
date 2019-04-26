import axios from 'axios';

export default axios.create ({
    baseURL: 'http://api.giphy.com',
    timeout: 1000
});