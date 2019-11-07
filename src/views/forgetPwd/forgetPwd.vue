<template>
  <transition name="slide">
    <div class="forgetpwd">
      <van-nav-bar title="忘记密码" left-arrow @click-left="onClickLeft" />
      <div class="form-wrap">
        <van-field label="手机号码" v-model="phone" placeholder="请输入手机号码"></van-field>
        <van-field
          v-model=" code"
          center
          clearable
          label="短信验证码"
          maxlength="4"
          placeholder="请输入短信验证码"
        >
          <van-button
            class="code"
            @click="handleCode"
            slot="button"
            style="width:100px"
            :disabled="isDisabled"
            type="default"
          >{{codeDesc}}</van-button>
        </van-field>
        <van-field type="password" label="密码" v-model="new_password" placeholder="请输入密码"></van-field>
        <van-field type="password" label="确认密码" v-model="confirm_password" placeholder="请再次输入密码"></van-field>
      </div>
      <div class="save-wrap">
        <my-button class="save-btn" @click="handelSave">保存</my-button>
      </div>
    </div>
  </transition>
</template>

<script>
import MyButton from '@/base/button/button'
import Vue from 'vue'
import { getCode, forgotPassword } from '@/api/user'
import { Field, NavBar, Button, Toast } from 'vant'
Vue.use(Field)
  .use(NavBar)
  .use(Button)
  .use(Toast)

// const TEL_REG = RegExp(
//   /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/
// )
const CODE_REG = RegExp(/^\d{4}$/)
const TIME = 60
export default {
  data () {
    return {
      code: '',
      phone: '',
      new_password: '',
      confirm_password: '',
      codeDesc: '获取验证码',
      isDisabled: false,
      timer: null
    }
  },
  components: {
    MyButton
  },
  methods: {
    handelSave () {
      if (this.phone === '') {
        return Toast('请输入正确的手机号码')
      }
      if (!CODE_REG.test(this.voty)) {
        return Toast('请输入正确的验证码')
      }
      if (this.pass_word === '' || this.pass_words === '') {
        return Toast('请输入密码')
      }
      if (this.pass_word !== this.pass_words) {
        return Toast('两次密码不一致')
      }
      const loading = Toast.loading({
        duration: 0,
        message: 'Loading...',
        forbidClick: true
      })
      const formData = Object.assign(
        {},
        {
          code: this.voty,
          phone: this.phone,
          newPassword: this.pass_word
        }
      )
      forgotPassword(formData).then(result => {
        loading.clear()
        if (result.data.code === '200') {
          this.$router.push({
            path: '/login'
          })
          return Toast('注册成功')
        } else {
          return Toast(result.data.message)
        }
      })
    },
    onClickLeft () {
      this.$router.push({
        path: '/login'
      })
    },
    handleCode () {
      if (this.phone !== '') {
        this.isDisabled = true
        this.codeDesc = TIME
        const formData = Object.assign(
          {},
          {
            phone: this.phone
          }
        )
        getCode(formData).then(result => {
          this.timer = setInterval(() => {
            this.codeDesc--
            if (this.codeDesc === 0) {
              clearInterval(this.timer)
              this.codeDesc = '获取验证码'
              this.isDisabled = false
            }
          }, 1000)
        })
      } else {
        return Toast('请输入正确的手机号码')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.forgetpwd {
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
    .code {
      border-top: none;
      border-right: none;
      border-bottom: none;
    }
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
}
</style>
