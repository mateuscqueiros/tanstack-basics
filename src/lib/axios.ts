import Axios from "axios";

export const axios = Axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 5000,
  params: {
    delay: 1000
  }
})
