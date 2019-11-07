<template>
  <div class="platform">
    <div class="filter-wrap">
      <van-dropdown-menu @change="onChangeSort">
        <van-dropdown-item v-model="sortVal.leftOrder" :options="option1" />
        <van-dropdown-item v-model="sortVal.middleOrder" :options="option2" />
        <van-dropdown-item v-model="sortVal.rightOrder" :options="option3" />
      </van-dropdown-menu>
    </div>
    <div class="produject-list">
      <scroll
        class="produject-wrap"
        :pullup="true"
        @scrollToEnd="scroll"
        :data="productList"
        v-if="productList.length && !productLoading"
      >
        <div>
          <div v-for="(item,index) in productList" :key="index">
            <recommend-item :recommend="item"></recommend-item>
          </div>
          <pullup-loading v-if="productList.length>9" :isPullUpLoad="isPullLoding"></pullup-loading>
        </div>
      </scroll>
      <div v-if="isUnfoundData">
        <unfound-data></unfound-data>
      </div>
      <div v-if="productLoading" class="product-loading">
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
import Scroll from '@/base/scroll/scroll'
import RecommendItem from '@/components/recommendItem/recommendItem'
import UnfoundData from '@/components/unfoundData/unfoundData'
import PullupLoading from '@/components/pullupLoading/pullupLoading'
import { DropdownMenu, DropdownItem, Skeleton, Toast } from 'vant'
import { getAllProduct, getHistoryProduct } from '@/api/product'
Vue.use(DropdownMenu)
  .use(DropdownItem)
  .use(Skeleton)
export default {
  data () {
    return {
      sortVal: {
        leftOrder: '',
        middleOrder: '',
        rightOrder: ''
      },
      productList: [],
      isPullLoding: false,
      isUnfoundData: false,
      productLoading: true,
      pageNum: '1', // 个数
      size: '10', // 页数
      option1: [
        { text: 'Urutan Standar', value: '' },
        { text: 'Bunga Rendah', value: 'interestRate' },
        { text: 'Persetujuan Mudah', value: 'approvalRate' }
      ],
      option2: [
        { text: 'semua', value: '' },
        { text: 'Jumlah rendah', value: 'loanAmountHigh' },
        { text: 'Jumlah tinggi', value: 'loanAmountLow' }
      ],
      option3: [
        { text: 'semua', value: '' },
        { text: 'Membyar sekali', value: 'installmentPeriodsLow' },
        { text: 'cicilan', value: 'installmentPeriodsHigh' }
      ]
    }
  },
  watch: {
    sortVal: {
      handler (val) {
        this.productList = []
        this.pageNum = 1
        this.size = 10
        this.isUnfoundData = false
        this.productLoading = true
        const formData = Object.assign(val, {
          pageNum: this.pageNum,
          size: this.size
        })
        this.getAllProduct(formData)
      },
      deep: true
    }
  },
  components: {
    Scroll,
    RecommendItem,
    UnfoundData,
    PullupLoading
  },
  created () {
    const formData = Object.assign(
      {},
      {
        pageNum: this.pageNum,
        size: this.size
      }
    )
    this.getAllProduct(formData)
  },
  methods: {
    scroll () {
      this.isPullLoding = true
      this.pageNum++
      const formData = Object.assign(
        {},
        {
          pageNum: this.pageNum,
          size: this.size
        }
      )
      this.getAllProduct(formData)
    },
    onChangeSort (value) {
      console.log(value)
    },
    getAllProduct (formData) {
      getAllProduct(formData).then(res => {
        this.productLoading = false
        this.isPullLoding = false
        const {
          data: { result }
        } = res
        if (result.length) {
          this.productList = this.productList.concat(result)
        } else {
          Toast('暂无数据')
        }
        if (!this.productList.length) {
          this.UnfoundData = true
        }
      })
    },
    getHistoryProduct () {
      getHistoryProduct().then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.platform {
  .filter-wrap {
    overflow: hidden;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  }
  .produject-list {
    position: absolute;
    top: 100px;
    bottom: 50px;
    left: 0;
    right: 0;
    overflow: hidden;
    .produject-wrap {
      height: 100%;
      overflow: hidden;
    }
    .product-loading {
      margin-top: 10px;
    }
  }
}
</style>
