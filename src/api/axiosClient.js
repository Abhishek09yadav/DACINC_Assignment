import axios from 'axios'

const axiosClient = axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    "x-api-key": `${process.env.TOKEN}`,
    "Content-Type": "application/json",
  },
});

export default axiosClient