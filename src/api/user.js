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
// 获取用户信息
export const getUserInfo = () => {
  return service({
    url: '/user/getUserByToken',
    method: 'post'
  })
}
// 注册
export const register = (data) => {
  data = qs.stringify(data)
  return service({
    url: '/login/saveUser',
    method: 'post',
    data
  })
}
// 获取验证码
export const getCode = (data) => {
  data = qs.stringify(data)
  return service({
    url: '/login/getCheckCode',
    method: 'post',
    data
  })
}

// 忘记密码
export const forgotPassword = (data) => {
  data = qs.stringify(data)
  return service({
    url: '/user/forgetPassword',
    method: 'post',
    data
  })
}

// 修改密码
export const updatePassword = (data) => {
  data = qs.stringify(data)
  return service({
    url: '/user/updatePassword',
    method: 'post',
    data
  })
}

// 退出登录
export const outLogin = (data) => {
  data = qs.stringify(data)
  return service({
    url: '/login/outLogin',
    method: 'post',
    data
  })
}
