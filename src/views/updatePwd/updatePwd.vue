<template>
  <transition name="slide">
    <div class="updatepwd">
      <van-nav-bar title="Setting" left-arrow @click-left="onClickLeft" />
      <van-cell-group>
        <van-field v-model="formData.password" type="password" label="密码" placeholder="请输入密码" />
        <van-field v-model="formData.password" type="password" label="新密码" placeholder="请输入新密码" />
        <van-field v-model="formData.password" type="password" label="确认密码" placeholder="请输入确认密码" />
      </van-cell-group>
      <div class="submit-wrap">
        <my-button class="submit">Kirim</my-button>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue'
import { Field, CellGroup, NavBar } from 'vant'
import MyButton from '@/base/button/button'
Vue.use(Field)
  .use(CellGroup)
  .use(NavBar)
export default {
  data () {
    return {
      formData: {
        password: ''
      }
    }
  },
  components: {
    MyButton
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
.updatepwd {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
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
  .submit-wrap {
    padding: 10px 0;
    text-align: center;
    .submit {
      width: 270px;
      height: 40px;
    }
  }
}
</style>
