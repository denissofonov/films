import axios from 'axios'

const api = axios.create({
    baseURL:'https://yts.mx/api/v2/',
    headers: {
        'Content-type': 'application/json'
    }
})

export default api