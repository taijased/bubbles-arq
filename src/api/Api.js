import axios from 'axios'


let API = axios.create({
  baseURL: process.env.VUE_APP_API_SIGNIN,
  headers: {
    'Accept': 'application/json; charset=utf-8',
    'Accept-Language': 'ru-RU,ru;q=0.5',
    'Content-Type': 'application/json',
  }
})

export default API
