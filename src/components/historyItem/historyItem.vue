<template>
  <div class="history-item">
    <div class="content-left">
      <img
        v-lazy="'http://p.qpic.cn/music_cover/NaYDCjF6oFDyCBFMbYpoK7eq5Mu1K6Vz16Fl8YpQfy5axerkQG8dzg/600?n=1'"
        width="50"
        height="50"
      />
    </div>
    <div class="content-mid">{{history.name}}</div>
    <div class="content-right">
      <div class="price">Rp {{price}}</div>
      <div class="time">{{time}}</div>
    </div>
  </div>
</template>

<script>
import { sortNumber } from '@/common/utils/utils'
export default {
  data () {
    return {
      price: '',
      time: ''
    }
  },
  props: {
    history: {
      type: Object,
      default: () => {}
    }
  },
  created () {
    this.price = this.history.loanAmount.sort(sortNumber)[0]
    this.time = this.history.downloadTime
      .split(' ')[0]
      .split('-')
      .reverse()
      .join('\\')
  }
}
</script>

<style scoped lang="scss">
.history-item {
  display: flex;
  height: 80px;
  padding: 0 20px;
  align-items: center;
  .content-left {
    flex: 0 50px;
    height: 50px;
  }
  .content-mid {
    flex: 1;
    padding-left: 20px;
    font-size: 16px;
    font-family: 'DINMedium';
    color: #333;
  }
  .content-right {
    flex: 1;
    text-align: right;
    .price {
      line-height: 25px;
      color: #e14b36;
      font-size: 19px;
      font-family: 'DINMedium';
    }
    .time {
      line-height: 25px;
      font-size: 13px;
      color: #999;
    }
  }
}
</style>
