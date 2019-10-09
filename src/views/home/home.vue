<template>
  <div class="home">
    <div class="slider-wrapper">
      <slider></slider>
    </div>
    <div class="title-wrap">
      <div class="icon">
        <van-icon name="fire" />
      </div>
      <div class="title">推荐</div>
    </div>
    <div class="recommend-wrap">
      <scroll class="recommend-list">
        <div>
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
</template>
<script>
import Vue from 'vue';
import Slider from '@/base/slider/slider.vue';
import Scroll from '@/base/scroll/scroll.vue';
import recommendItem from '@/components/recommendItem/recommendItem.vue';
import { Cell, CellGroup, Icon } from 'vant';

Vue.use(Cell)
  .use(CellGroup)
  .use(Icon);
export default {
  data () {
    return {
      recommends: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    };
  },
  components: {
    Slider,
    Scroll,
    recommendItem
  }
};
</script>
<style lang="scss" scoped>
.home {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 50px;
  .slider-wrapper {
    overflow: hidden;
  }
  .title-wrap {
    position: relative;
    display: flex;
    height: 40px;
    align-items: center;
    padding: 0 20px;
    color: #333;
    .icon {
      flex: 0 20px;
    }
    .title {
      padding: 2px 0 0 10px;
      font-size: 14px;
    }
    &.title-wrap::after {
      content: "";
      width: 160%;
      height: 200%;
      position: absolute;
      top: 0;
      left: 10%;
      border-bottom: 1px solid #bfbfbf;
      border-radius: 4px;
      -webkit-transform: scale(0.5, 0.5);
      transform: scale(0.5, 0.5);
      -webkit-transform-origin: top left;
    }
  }
  .recommend-wrap {
    position: absolute;
    top: 200px;
    left: 0;
    right: 0;
    bottom: 0;
    .recommend-list {
      height: 100%;
      overflow: hidden;
    }
  }
}
</style>
