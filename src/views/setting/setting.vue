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
    </div>
  </transition>
</template>

<script>
import Vue from 'vue'
import { Cell, CellGroup, NavBar } from 'vant'

Vue.use(Cell)
  .use(CellGroup)
  .use(NavBar)
export default {
  name: 'setting',
  data () {
    return {}
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
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
