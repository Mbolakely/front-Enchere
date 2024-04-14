// const axios = require('axios')

import axios from 'axios';
import { getTokenFromLocalStorage } from '../tokenConfig/tokenConfig';

const api = axios.create({baseURL:'http://localhost:8000/api/'})

api.interceptors.request.use((config) => {
  const token = getTokenFromLocalStorage();
  if (token) {
     config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
 }, (error) => {
  return Promise.reject(error);
 });

export default api