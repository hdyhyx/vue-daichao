export default [{
  path: '/',
  redirect: '/home'
},
{
  path: '/home',
  name: 'home',
  component: () => import('@/views/home/home.vue')
},
{
  path: '/details',
  name: 'details',
  component: () => import('@/views/details/details.vue')
},
{
  path: '/market/:id',
  name: 'market',
  component: () => import('@/views/market/market.vue')
},
{
  path: '/my',
  name: 'my',
  component: () => import('@/views/my/my.vue')
},
{
  path: '/feedback',
  name: 'feedback',
  component: () => import('@/views/feedback/feedback.vue')
},
{
  path: '/setting',
  name: 'setting',
  component: () => import('@/views/setting/setting.vue')
},
{
  path: '/updatePwd',
  name: 'updatePwd',
  component: () => import('@/views/updatePwd/updatePwd.vue')
},
{
  path: '/historyPage',
  name: 'historyPage',
  component: () => import('@/views/historyPage/historyPage.vue')
},
{
  path: '/login',
  name: 'login',
  component: () => import('@/views/login/login.vue')
},
{
  path: '/registered',
  name: 'registered',
  component: () => import('@/views/registered/registered.vue')
},
{
  path: '/forgetpwd',
  name: 'forgetPwd',
  component: () => import('@/views/forgetPwd/forgetPwd.vue')
}
]
