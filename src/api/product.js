import {
  service
} from '@/common/utils/request'
import qs from 'qs'
// export const getHomeBanner = () => {
//   // let data = [{
//   //   url: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1829466.jpg',
//   //   orders: '1'
//   // }, {
//   //   url: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1831199.jpg',
//   //   orders: '2'
//   // }, {
//   //   url: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1826655.jpg',
//   //   orders: '3'
//   // }, {
//   //   url: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1831115.jpg',
//   //   orders: '4'
//   // }]
//   let data = {
//     url: '',
//     picture: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1829466.jpg',
//     orders: '1'
//   }
//   data = qs.stringify(data)
//   return service({
//     url: 'shuffling/saveValid',
//     method: 'post',
//     data
//   })
// }
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
    url: '/product/queryProductByPage',
    method: 'post',
    data
  })
}

// ------------------

export const Addproduct = () => {
  let data = {
    name: 'test3',
    loanTime: '90', // 时间
    interestRate: '0.3', // 利率
    loanAmount: '3000000', // 金额
    applicationRequirements: '年满18周岁', // 条件
    productDescription: '利息超低', // 描述
    url: '', // 路径
    productIcon: '', // 图标
    approvalRate: '0.7', // 通过率
    sort: '3', // 排序
    installmentPeriods: '' // 可分期
  }
  data = qs.stringify(data)
  return service({
    url: '/product/saveProduct',
    method: 'post',
    data
  })
}
