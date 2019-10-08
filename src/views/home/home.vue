<template>
  <div class="home">
    <div class="slider-wrapper">
      <slider></slider>
    </div>
    <div class="title-wrap">
      <van-cell title="单元格" icon="shop-o"></van-cell>
    </div>
    <div class="recommend-wrap">
      <scroll class="recommend-list">
        <div>
          <recommend-item></recommend-item>
        </div>
      </scroll>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Slider from '@/base/slider/slider.vue'
import Scroll from '@/base/scroll/scroll.vue'
import recommendItem from '@/components/recommendItem/recommendItem.vue'
import { Cell, CellGroup, Icon } from 'vant'

Vue.use(Cell)
  .use(CellGroup)
  .use(Icon)
export default {
  data () {
    return {
      recommends: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  },
  components: {
    Slider,
    Scroll,
    recommendItem
  }
}
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
  .recommend-wrap {
    position: absolute;
    top: 204px;
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
