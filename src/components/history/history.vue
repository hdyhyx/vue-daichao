<template>
  <div class="produject-list">
    <scroll
      class="produject-wrap"
      :pullup="true"
      :data="historyList"
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
      <van-skeleton style="margin-top:15px" title avatar :row="2" />
      <van-skeleton style="margin-top:15px" title avatar :row="2" />
      <van-skeleton style="margin-top:15px" title avatar :row="2" />
      <van-skeleton style="margin-top:15px" title avatar :row="2" />
      <van-skeleton style="margin-top:15px" title avatar :row="2" />
      <van-skeleton style="margin-top:15px" title avatar :row="2" />
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Scroll from '@/base/scroll/scroll.vue'
import HistoryItem from '@/components/historyItem/historyItem'
import UnfoundData from '@/components/unfoundData/unfoundData'
import PullupLoading from '@/components/pullupLoading/pullupLoading'
import { getToken } from '@/common/utils/cookie'
import { Skeleton, Toast } from 'vant'
import { getHistoryProduct } from '@/api/product'
Vue.use(Skeleton).use(Toast)

export default {
  data () {
    return {
      productSkeleton: true,
      isUnfoundData: false,
      isPullLoding: false,
      historyList: [],
      pageNum: 1,
      size: 10
    }
  },
  components: {
    Scroll,
    HistoryItem,
    UnfoundData,
    PullupLoading
  },
  created () {
    if (getToken()) {
      this.getHistoryProduct(this.pageNum, this.size)
    } else {
      this.historyList = []
      this.productSkeleton = false
      this.isUnfoundData = true
      Toast('请登录')
    }
  },
  methods: {
    scroll () {
      if (this.historyList.length < 9) {
        return
      }
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
<style lang="scss" scoped>
.produject-list {
  position: absolute;
  top: 50px;
  bottom: 50px;
  left: 0;
  right: 0;
  .produject-wrap {
    height: 100%;
    overflow: hidden;
    .product-skeleton {
      margin-top: 15px;
    }
  }
}
</style>
