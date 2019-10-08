import Cookies from 'js-cookie'
const cookieExpires = 15
const TOKEN = 'token'

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
