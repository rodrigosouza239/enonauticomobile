import axios from 'axios';




const api = axios.create({
  baseURL:'https://api.iugu.com/v1',
  timeout:2000,
  headers:{
    Accept: 'application/json',
    'Content-Type': 'application/json',
 }
})


export default api;