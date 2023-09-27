import axios from "axios";

const Axios = axios.create({
    baseURL: 'https://tourism-backend-ce6w.onrender.com',
    // baseURL: 'http://localhost:4201',
    headers: {
        contentType: 'application/json',
        Accept: 'application/json',
        // 'Access-Control-Allow-Origin': 'https//localhost:3000'
        'Access-Control-Allow-Origin': 'https://tourism-6ppu.onrender.com/'
        
    }
})

export {Axios}