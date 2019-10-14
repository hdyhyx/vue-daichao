<template>
  <transition name="slide">
    <div class="history">
      <van-nav-bar title="Sejarah" left-arrow @click-left="onClickLeft" />
      <div class="history-list">
        <scroll class="history-wrap">
          <div>
            <recommend-item></recommend-item>
            <recommend-item></recommend-item>
            <recommend-item></recommend-item>
            <recommend-item></recommend-item>
            <recommend-item></recommend-item>
            <recommend-item></recommend-item>
            <recommend-item></recommend-item>
            <recommend-item></recommend-item>
            <recommend-item></recommend-item>
          </div>
        </scroll>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue'
import Scroll from '@/base/scroll/scroll.vue'
import recommendItem from '@/components/recommendItem/recommendItem.vue'
import { Cell, CellGroup, NavBar } from 'vant'
Vue.use(Cell)
  .use(CellGroup)
  .use(NavBar)
export default {
  data () {
    return {}
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  },
  components: {
    Scroll,
    recommendItem
  }
}
</script>

<style scoped lang="scss">
.history {
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
  .history-list {
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    .history-wrap {
      height: 100%;
      overflow: hidden;
    }
  }
}
</style>
