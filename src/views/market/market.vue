<template>
  <div class="market">
    <div class="nav-wrap">
      <van-tabs
        type="card"
        v-model="activeName"
        background="#2291E0"
        title-active-color="#2291E0"
        color="#D3E9F9"
      >
        <van-tab name="1" title="Platform"></van-tab>
        <van-tab name="2" title="Sejarah"></van-tab>
      </van-tabs>
    </div>
    <div v-if="activeName==='1'">
      <platform></platform>
    </div>
    <div v-if="activeName==='2'">
      <history></history>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import platform from '@/components/platform/platform.vue'
import history from '@/components/history/history.vue'
import { getAllProduct, getHistoryProduct } from '@/api/product'
import { Tab, Tabs } from 'vant'
Vue.use(Tab).use(Tabs)
const PLATFORM = '1'
const HISTORTY = '2'
export default {
  data () {
    return {
      activeName: '1'
    }
  },
  components: {
    platform,
    history
  },
  watch: {
    activeName (value) {
      if (value === PLATFORM) {
        this.getAllProduct()
      } else if (value === HISTORTY) {
        this.getHistoryProduct()
      }
    }
  },
  created () {
    if (this.activeName === PLATFORM) {
      this.getAllProduct()
    }
  },
  methods: {
    getAllProduct () {
      getAllProduct().then(res => {
        console.log(res)
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

<style scoped lang="scss">
.market {
  .nav-wrap {
    .van-tabs--card {
      padding: 0;
      background: #2291e0;
    }
  }
}
</style>
<style>
.nav-wrap .van-tabs__wrap {
  margin: 0 auto;
  padding: 10px 0;
  width: 200px !important;
}
.nav-wrap .van-tabs__content {
  background: #fff;
}
.filter-wrap .van-dropdown-menu__title {
  font-size: 12px;
}
</style>
