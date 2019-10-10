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
  path: '/market',
  name: 'market',
  component: () => import('@/views/market/market.vue')
},
{
  path: '/my',
  name: 'my',
  component: () => import('@/views/my/my.vue')
}
]
