import {
  service
} from '@/common/utils/request'

export const getHomeBanner = () => {
  return service({
    url: 'shuffling/queryAllValid',
    method: 'post'
  })
}
export const getHomeProduct = () => {
  return service({
    url: '/home/product',
    method: 'post'
  })
}

export const getAllProduct = () => {
  return service({
    url: '/home/product',
    method: 'post'
  })
}
export const getHistoryProduct = () => {
  return service({
    url: '/home/product',
    method: 'post'
  })
}
