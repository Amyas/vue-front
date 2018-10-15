import request from '@/utils/request'

export const listApi = (params) => {
  return request('/article', params)('GET')
}
