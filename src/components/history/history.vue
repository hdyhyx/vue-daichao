<template>
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
</template>
<script>
import Scroll from '@/base/scroll/scroll.vue'
import recommendItem from '@/components/recommendItem/recommendItem.vue'
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
.produject-list {
  position: absolute;
  top: 50px;
  bottom: 50px;
  left: 0;
  right: 0;
  .produject-wrap {
    height: 100%;
    overflow: hidden;
  }
}
</style>
