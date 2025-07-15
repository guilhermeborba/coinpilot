import axios from 'axios'

export const axiosClient = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
  headers: {
    Accept: 'application/json',
  },
})
