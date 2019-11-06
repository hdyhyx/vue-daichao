<template>
  <div class="home">
    <div class="slider-wrapper">
      <div class="slider-content" v-if="recommends.length">
        <slider>
          <div v-for="(item,index) in recommends" :key="index">
            <a class="slide-item" href="/home">
              <img :src="item.url" />
            </a>
          </div>
        </slider>
      </div>
      <van-skeleton v-else class="banner-loading" row-width :row="1" />
    </div>
    <div class="title-wrap">
      <div class="icon">
        <svg class="icon icon-size" aria-hidden="true">
          <use xlink:href="#iconrecommend" />
        </svg>
      </div>
      <div class="title">Platform Unggulan</div>
    </div>
    <div class="recommend-wrap">
      <scroll class="recommend-list" v-if="productList.length">
        <div>
          <recommend-item v-for="(item,index) in productList" :key="index"></recommend-item>
        </div>
      </scroll>
      <div v-else class="product-loading">
        <van-skeleton title avatar :row="2" />
        <van-skeleton style="margin-top:15px" title avatar :row="2" />
        <van-skeleton style="margin-top:15px" title avatar :row="2" />
        <van-skeleton style="margin-top:15px" title avatar :row="2" />
        <van-skeleton style="margin-top:15px" title avatar :row="2" />
        <van-skeleton style="margin-top:15px" title avatar :row="2" />
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Slider from '@/base/slider/slider.vue'
import Scroll from '@/base/scroll/scroll.vue'
import recommendItem from '@/components/recommendItem/recommendItem.vue'
import { Cell, CellGroup, Icon, Skeleton } from 'vant'
import { getHomeBanner, getHomeProduct } from '@/api/product'

Vue.use(Cell)
  .use(CellGroup)
  .use(Icon)
  .use(Skeleton)
export default {
  data () {
    return {
      recommends: [],
      productList: []
    }
  },
  components: {
    Slider,
    Scroll,
    recommendItem
  },
  created () {
    getHomeBanner().then(res => {
      console.log(res)
      const { results } = res.data
      this.recommends = results
    })
    getHomeProduct().then(res => {
      const { data } = res.data
      // this.productList = data
      console.log(data)
    })
  },
  methods: {}
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
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 40%;
    overflow: hidden;
    .slider-content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 99;
    }
    .banner-loading {
      position: absolute;
      padding: 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      .van-skeleton__row {
        height: 100%;
      }
    }
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
      content: '';
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
    padding-top: 40%;
    margin-top: 40px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .recommend-list {
      height: 100%;
      overflow: hidden;
    }
    .product-loading {
      padding: 15px 0;
    }
  }
}
</style>
