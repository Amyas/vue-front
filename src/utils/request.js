import axios from 'axios'

const request = axios.create({
  timeout: 10000,
  baseURL: '/api/'
})

request.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
)

request.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
)

export default function (url, data) {
  return async (method = 'GET') => {
    const httpSetting = { method, url }
    if (method === 'GET') {
      httpSetting['params'] = data
    } else {
      httpSetting['data'] = data
    }
    const res = await request({
      ...httpSetting
    })
    return res
  }
}
