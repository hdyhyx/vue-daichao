import {
  setToken
} from '@/common/utils/cookie'
import {
  login,
  getUserInfo
} from '@/api/user'
export default {
  state: {
    token: '',
    userInfo: ''
  },
  mutations: {
    setToken (state, token) {
      setToken(token)
      state.token = token
    },
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    handleLogin ({
      state,
      commit
    }, data) {
      return new Promise((resolve, reject) => {
        login(data).then(result => {
          const {
            data: {
              code,
              results
            }
          } = result
          if (code !== '200') {
            resolve(result)
            return
          }
          commit('setToken', results)
          resolve(result)
        })
      });
    },
    handleUserInfo ({
      state,
      commit
    }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(res => {
          const {
            data: {
              results,
              code
            }
          } = res
          if (code === '200') {
            commit('setUserInfo', results)
          }
          resolve(res)
        })
      });
    }
  }
};
