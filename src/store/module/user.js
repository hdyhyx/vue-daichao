import {
  setToken
} from '@/common/utils/cookie'
import {
  login,
  getUserInfo
} from '@/api/user'
export default {
  state: {
    token: ''
  },
  mutations: {
    setToken (state, token) {
      setToken(token)
      state.token = token
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
              message
            }
          } = result
          if (code !== '200') {
            resolve(result)
            return
          }
          commit('setToken', message)
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
          resolve(res)
        })
      });
    }
  }
};
