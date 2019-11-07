<template>
  <div class="item-wrap" @click="goToDetails">
    <div class="content-left">
      <van-icon name="fire" />
    </div>
    <div class="content-mid">
      <div class="produject-name">{{recommend.name}}</div>
      <div class="produject-price">
        <em>Rp</em>
        {{recommend.loanAmount}}
      </div>
      <div class="produject-desc">
        <span class="interest">Bunga ≥{{recommend.interestRate}}% / hari</span>
        <span class="cycle">Prises 1 hari</span>
      </div>
    </div>
    <div class="contnet-right">
      <my-button class="detail-btn" :myClass="'opcityBlue'">Pinjam</my-button>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Icon } from 'vant'
import MyButton from '@/base/button/button'
Vue.use(Icon)
export default {
  data () {
    return {}
  },
  components: {
    MyButton
  },
  props: {
    recommend: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    goToDetails () {
      const productId = this.recommend.id
      this.$router.push({
        path: '/details',
        query: {
          productId: productId
        }
      })
    }
  },
  created () {}
}
</script>
<style lang="scss" scoped>
.item-wrap {
  display: flex;
  padding: 10px 20px;
  .content-left {
    flex: 0 20px;
  }
  .content-mid {
    flex: 1;
    .produject-name {
      line-height: 20px;
      font-size: 14px;
      color: #333;
    }
    .produject-price {
      padding: 8px 0;
      font-size: 16px;
      color: #e14b36;
      font-family: 'DINMedium';
      em {
        padding-right: 5px;
        font-style: normal;
      }
    }
    .produject-desc {
      line-height: 15px;
      font-size: 12px;
      color: #999999;
      .interest {
        padding-right: 30px;
      }
      .cycle {
      }
    }
  }
  .contnet-right {
    flex: 0 100px;
    position: relative;
    .detail-btn {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 70px;
      height: 25px;
      transform: translate(-50%, -50%);
      border-radius: 4px;
    }
  }
}
</style>
