<template>
  <div class="platform">
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
import { DropdownMenu, DropdownItem } from 'vant'
import Scroll from '@/base/scroll/scroll.vue'
import recommendItem from '@/components/recommendItem/recommendItem.vue'
Vue.use(DropdownMenu).use(DropdownItem)
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
<style lang="scss" scoped>
.platform {
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
