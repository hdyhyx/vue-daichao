import {
  service
} from '@/common/utils/request'
import qs from 'qs'

export const login = (data) => {
  data = qs.stringify(data)
  return service({
    url: '/login/login',
    method: 'post',
    data
  })
}
export const getUserInfo = () => {
  return service({
    url: 'user/getUserByToken',
    method: 'post'
  })
}
