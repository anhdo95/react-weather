import axios from 'axios'

const instance = axios.create({
  // baseURL: `${process.env.BASE_URL}`,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(config => config, handleError)
instance.interceptors.response.use(response => response.data, handleError)

function handleError(error: any) {
  return Promise.reject(error)
}

export default instance
