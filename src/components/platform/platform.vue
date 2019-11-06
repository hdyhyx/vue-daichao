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
      <scroll class="produject-wrap" v-if="productList.length && !productLoading">
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
import Scroll from '@/base/scroll/scroll.vue'
import RecommendItem from '@/components/recommendItem/recommendItem.vue'
import UnfoundData from '@/components/unfoundData/unfoundData.vue'
import { DropdownMenu, DropdownItem, Skeleton } from 'vant'
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
      isUnfoundData: false,
      productLoading: true,
      pageNum: '10', // 个数
      size: '1', // 页数
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
    UnfoundData
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
    onChangeSort (value) {
      console.log(value)
    },
    getAllProduct (formData) {
      getAllProduct(formData).then(res => {
        this.productLoading = false
        const {
          data: { result }
        } = res
        if (result.length) {
          this.productList = result
        } else {
          this.isUnfoundData = true
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
