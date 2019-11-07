<template>
  <transition name="slide">
    <div class="setting">
      <van-nav-bar title="Setting" left-arrow @click-left="onClickLeft" />
      <van-cell is-link to="/updatePwd">
        <!-- 使用 title 插槽来自定义标题 -->
        <template slot="title">
          <svg class="icon icon-size" aria-hidden="true">
            <use xlink:href="#iconpwd" />
          </svg>
          <span class="custom-title">ubah kata sandi</span>
        </template>
      </van-cell>
      <van-cell is-link>
        <!-- 使用 title 插槽来自定义标题 -->
        <template slot="title">
          <svg class="icon icon-size" aria-hidden="true">
            <use xlink:href="#iconinfo" />
          </svg>
          <span class="custom-title">Nomor versi</span>
        </template>
      </van-cell>
      <div class="out-login">
        <my-button class="out-btn" @click="handleOutLogin">退出登录</my-button>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue'
import { Cell, CellGroup, NavBar, Dialog, Toast } from 'vant'
import { outLogin } from '@/api/user'
import { getToken, setToken } from '@/common/utils/cookie'
import MyButton from '@/base/button/button'
Vue.use(Cell)
  .use(CellGroup)
  .use(NavBar)
  .use(Dialog)
  .use(Toast)
export default {
  name: 'setting',
  data () {
    return {}
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    handleOutLogin () {
      Dialog.confirm({
        title: '标题',
        message: '弹窗内容'
      })
        .then(() => {
          const formData = Object.assign(
            {},
            {
              token: getToken()
            }
          )
          outLogin(formData).then(res => {
            console.log(res)
            const {
              data: { code, message }
            } = res
            if (code !== '200') {
              Toast(message)
            } else {
              setToken('') // 清除Token
              this.$store.commit('setUserInfo', '')
              this.$router.push('/my')
            }
          })
        })
        .catch(() => {
          // on cancel
        })
    }
  },
  components: {
    MyButton
  }
}
</script>

<style scoped lang="scss">
.setting {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 99;
  &.slide-enter-active,
  &.slide-leave-active {
    transition: all 0.25s;
  }
  &.slide-enter,
  &.slide-leave-to {
    transform: translate3d(100%, 0, 0);
  }
  .van-nav-bar {
    background: #2291e0;
    .van-icon {
      color: #ffffff;
    }
    .van-nav-bar__title {
      color: #ffffff;
    }
  }
  .out-login {
    padding: 20px 0;
    text-align: center;
    .out-btn {
      width: 270px;
      height: 40px;
      font-size: 15px;
    }
  }
}
</style>
<style lang="scss">
.setting {
  .icon-size {
    margin-right: 5px;
    font-size: 14px;
  }
}
</style>
