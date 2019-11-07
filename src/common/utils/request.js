import axios from 'axios'
import router from '@/routes/index'
import {
  getToken
} from '@/common/utils/cookie'
// 创建axios实例
const service = axios.create({
  timeout: 50000, // 请求超时时间
  baseURL: process.env.BASE_URL //
})
// 添加request拦截器
service.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
  config.headers['token'] = getToken()
  return config
}, error => {
  Promise.reject(error)
})
// 添加response拦截器
service.interceptors.response.use(
  response => {
    let res = {}
    res.status = response.status
    res.data = response.data
    return res
  },
  error => {
    if (error.response && error.response.status === 404) {
      router.push('')
    }
    console.log(error)
    return Promise.reject(error.response)
  }
)

export function get (url, params = {}) {
  params.t = new Date().getTime() // get方法加一个时间参数，解决ie下可能缓存问题
  return service({
    url: url,
    method: 'get',
    headers: {},
    params
  })
}

// 封装post请求
export function post (url, data = {}) { // 默认配置
  console.log(1111);
  let sendObject = {
    url: url,
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: data
  }
  sendObject.data = JSON.stringify(data)
  return service(sendObject)
}

// 封装put方法
export function put (url, data = {}) {
  return service({
    url: url,
    method: 'put',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: JSON.stringify(data)
  })
}

// 删除方法
export function deletes (url) {
  return service({
    url: url,
    method: 'delete',
    headers: {}
  })
}

export {
  service
}
