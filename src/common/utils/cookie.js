import Cookies from 'js-cookie'
const cookieExpires = 15
const TOKEN = 'token'
const ROUTER = 'router'
export const setToken = (token) => {
  Cookies.set(TOKEN, token, {
    expires: cookieExpires || 1
  })
}
export const getToken = () => {
  const token = Cookies.get(TOKEN)
  if (token) return token
  else return false
}

export const setRouter = () => {
  Cookies.set(TOKEN, ROUTER, {
    expires: cookieExpires || 1
  })
}
export const getRouter = () => {
  const router = Cookies.get(ROUTER)
  if (router) return router
  else return false
}
