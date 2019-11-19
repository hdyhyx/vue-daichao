<template>
  <transition name="slide">
    <div class="history">
      <van-nav-bar title="Sejarah" left-arrow @click-left="onClickLeft" />
      <div class="history-list">
        <scroll
          class="history-wrap"
          :pullup="true"
          @scrollToEnd="scroll"
          v-if="historyList.length && !productSkeleton"
        >
          <div>
            <div v-for="(item,index) in historyList" :key="index">
              <history-item :history="item"></history-item>
            </div>
            <pullup-loading v-if="historyList.length>9" :isPullUpLoad="isPullLoding"></pullup-loading>
          </div>
        </scroll>
        <div v-if="isUnfoundData">
          <unfound-data></unfound-data>
        </div>
        <div v-if="productSkeleton" class="product-skeleton">
          <van-skeleton title avatar :row="2" />
          <van-skeleton style="margin-top:15px" title avatar :row="2" />
          <van-skeleton style="margin-top:15px" title avatar :row="2" />
          <van-skeleton style="margin-top:15px" title avatar :row="2" />
          <van-skeleton style="margin-top:15px" title avatar :row="2" />
          <van-skeleton style="margin-top:15px" title avatar :row="2" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue'
import Scroll from '@/base/scroll/scroll.vue'
import HistoryItem from '@/components/historyItem/historyItem'
import UnfoundData from '@/components/unfoundData/unfoundData'
import PullupLoading from '@/components/pullupLoading/pullupLoading'
import { Skeleton, Toast, NavBar } from 'vant'
import { getHistoryProduct } from '@/api/product'
Vue.use(Skeleton)
  .use(Toast)
  .use(NavBar)

export default {
  data () {
    return {
      productSkeleton: true,
      isUnfoundData: false,
      isPullLoding: false,
      historyList: [],
      pageNum: 10,
      size: 1
    }
  },
  components: {
    Scroll,
    HistoryItem,
    UnfoundData,
    PullupLoading
  },
  created () {
    this.getHistoryProduct()
  },
  methods: {
    onClickLeft () {
      this.$router.push({
        path: '/my'
      })
    },
    scroll () {
      if (this.historyList.length < 9) return
      this.isPullLoding = true
      this.pageNum++
      this.getHistoryProduct(this.pageNum, this.size)
    },
    getHistoryProduct (pageNum, size) {
      const formData = Object.assign(
        {},
        {
          pageNum,
          size
        }
      )
      getHistoryProduct(formData).then(res => {
        this.productSkeleton = false
        this.isPullLoding = false
        const {
          data: { results }
        } = res
        if (results.length) {
          this.historyList = this.historyList.concat(results)
        } else {
          Toast('暂无数据')
        }
        if (!this.historyList.length) {
          this.isUnfoundData = true
        }
      })
    }
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
