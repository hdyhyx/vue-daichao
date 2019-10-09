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
}
]
