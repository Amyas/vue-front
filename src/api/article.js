import request from '@/utils/request'

export const detailApi = (id) => {
  return request(`/article/${id}`)('GET')
}
export const indexApi = (id) => {
  return request(`/article`)('GET')
}
