<template>
  <transition name="slide">
    <div class="login">
      <van-nav-bar left-arrow @click-left="onClickLeft" title="Login" />
      <div class="form-wrap">
        <van-field label="手机号码" v-model="loginName" placeholder="请输入手机号码"></van-field>
        <van-field label="密码" type="password" v-model="loginPassword" placeholder="请输入密码"></van-field>
      </div>
      <div class="save-wrap">
        <my-button class="save-btn" @click="login">登录</my-button>
      </div>
      <div class="footer">
        <router-link to="/registered">
          <span class="text">马上注册</span>
        </router-link>
        <span>|</span>
        <router-link to="/forgetPwd">
          <span class="text">忘记密码</span>
        </router-link>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue'
import MyButton from '@/base/button/button'
import { Field, NavBar, Toast } from 'vant'
Vue.use(Field)
  .use(NavBar)
  .use(Toast)
export default {
  data () {
    return { loginName: '', loginPassword: '', redirect: '' }
  },
  components: {
    MyButton
  },
  methods: {
    onClickLeft () {
      this.$router.push({
        path: '/'
      })
    },
    login () {
      if (this.loginName !== '' && this.loginPassword !== '') {
        const loading = Toast.loading({
          duration: 0,
          message: 'Loading...',
          forbidClick: true
        })

        const formData = Object.assign(
          {},
          {
            loginName: this.loginName,
            loginPassword: this.loginPassword
          }
        )
        this.$store.dispatch('handleLogin', formData).then(res => {
          loading.clear()
          const {
            data: { code, message }
          } = res
          if (code === '200') {
            if (this.redirect !== '') {
              this.$router.replace({
                path: this.redirect
              })
            } else {
              this.$router.push('/home')
            }
          } else {
            Toast(message)
          }
        })
      }
    }
  },
  created () {
    if (this.$route.query.redirect !== undefined) {
      this.redirect = this.$route.query.redirect
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #f5f5f5;
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
  .form-wrap {
    margin-top: 10px;
  }
  .save-wrap {
    margin-top: 20px;
    text-align: center;
    .save-btn {
      width: 270px;
      height: 44px;
      border-radius: 40px;
    }
  }
  .footer {
    text-align: center;
    padding: 10px 0;
    font-size: 12px;
    color: #333;
    .text {
      padding: 0 10px;
    }
  }
}
</style>
