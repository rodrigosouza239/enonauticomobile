import axios from 'axios';
import { getUser, navigate, deleteUser } from '../utils' ;




const api = axios.create({
  baseURL:'http://192.168.0.9:3333',
  timeout:2000,
  headers:{
    Accept: 'application/json',
    'Content-Type': 'application/json',
 }
});

export default api;