import {
  service
} from '@/common/utils/request'
import qs from 'qs'
export const setHomeBanner = () => {
  // let data = [{
  //   url: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1829466.jpg',
  //   orders: '1'
  // }, {
  //   url: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1831199.jpg',
  //   orders: '2'
  // }, {
  //   url: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1826655.jpg',
  //   orders: '3'
  // }, {
  //   url: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1831115.jpg',
  //   orders: '4'
  // }]
  let data = {
    url: '',
    address: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1831199.jpg',
    orders: '2'
  }
  data = qs.stringify(data)
  return service({
    url: 'shuffling/saveValid',
    method: 'post',
    data
  })
}
export const getHomeBanner = () => {
  return service({
    url: 'shuffling/queryAllValid',
    method: 'post'
  })
}
export const getHomeProduct = () => {
  return service({
    url: '/product/getRecommendedProduct',
    method: 'post'
  })
}

export const getAllProduct = (data) => {
  data = qs.stringify(data)
  return service({
    url: '/product/queryProductByPage',
    method: 'post',
    data
  })
}
export const getHistoryProduct = (data) => {
  data = qs.stringify(data)
  return service({
    url: '/product/getDownloadHistory',
    method: 'post',
    data
  })
}
export const setHistoryProduct = (data) => {
  data = qs.stringify(data)
  return service({
    url: '/product/saveUserDownload',
    method: 'post',
    data
  })
}

export const getProductDetails = (data) => {
  data = qs.stringify(data)
  return service({
    url: '/product/lookProduct',
    method: 'post',
    data
  })
}

// ------------------

export const Addproduct = () => {
  let data = {
    name: 'test15',
    loanTime: '3,7,30,60,90', // 时间
    interestRate: '0.3', // 利率
    loanAmount: '100000,20000,30000,40000,500000', // 金额
    applicationRequirements: 'klik install,klik install,klik install,klik install', // 条件
    productDescription: 'klik install,klik install,klik install,klik install,klik install', // 描述
    url: '', // 路径
    productIcon: '', // 图标
    approvalRate: '0.4', // 通过率
    sort: '5', // 排序
    installmentPeriods: '1' // 可分期
  }
  data = qs.stringify(data)
  return service({
    url: '/product/saveProduct',
    method: 'post',
    data
  })
}
