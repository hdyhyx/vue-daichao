<template>
  <div class="market">
    <div class="nav-wrap">
      <van-tabs type="card" background="#2291E0" title-active-color="#2291E0" color="#D3E9F9">
        <van-tab title="Platform"></van-tab>
        <van-tab title="Sejarah"></van-tab>
      </van-tabs>
    </div>
    <div class="filter-wrap">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
      </van-dropdown-menu>
    </div>
    <div class="produject-list">
      <scroll class="produject-wrap">
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
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs, DropdownMenu, DropdownItem } from 'vant'
import Scroll from '@/base/scroll/scroll.vue'
import recommendItem from '@/components/recommendItem/recommendItem.vue'
Vue.use(DropdownMenu)
  .use(DropdownItem)
  .use(Tab)
  .use(Tabs)
export default {
  data () {
    return {
      value1: 0,
      value2: '1',
      value3: '4',
      option1: [
        { text: 'Urutan Standar', value: 0 },
        { text: 'Bunga Rendah', value: 1 },
        { text: 'Persetujuan Mudah', value: 2 }
      ],
      option2: [
        { text: 'Jumlah Uang', value: '1' },
        { text: '好评排序', value: '2' },
        { text: '销量排序', value: '3' }
      ],
      option3: [
        { text: 'Membyar sekali', value: '4' },
        { text: 'Pembayaran cicilan', value: '5' }
      ]
    }
  },
  components: {
    Scroll,
    recommendItem
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
  .filter-wrap {
    overflow: hidden;
  }
  .produject-list {
    position: absolute;
    top: 100px;
    bottom: 50px;
    left: 0;
    right: 0;
    .produject-wrap {
      height: 100%;
      overflow: hidden;
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
