<template>
  <div class="card">
    <div class="head">
      <div class="head-left" @click="handleLeft">
        <div class="container">
          <div class="price">
            <em>RP</em>
            {{replacePrice(priceValue)}}
          </div>
          <div class="triangle"></div>
          <p class="desc">Pinjaman</p>
        </div>
      </div>
      <div class="head-right" @click="handleRight">
        <div class="date">
          <em>{{dateValue}}</em>
          Hari
        </div>
        <div class="triangle"></div>
        <p class="desc">Lama Pinjam</p>
      </div>
    </div>
    <div class="footer">
      <div class="footer-left">
        <div class="interest">{{detail.interestRate}}% hari</div>
        <p class="desc">Referemsi tarif</p>
      </div>
      <div class="footer-mid">
        <div class="price">Rp {{replacePrice(payAmount)}}</div>
        <p class="desc">Pembayaran</p>
      </div>
      <div class="footer-right">
        <div class="interest-price">Rp {{replacePrice(interestRate)}}</div>
        <p class="desc">Bunga + admin</p>
      </div>
    </div>
    <!-- 选择金额 -->
    <van-popup v-model="isSelectPrice" position="bottom" :style="{ height: '40%' }">
      <van-picker :columns="priceArr" show-toolbar @cancel="onCancel" @confirm="onConfirmPrice" />
    </van-popup>
    <van-popup v-model="isSelectDate" position="bottom" :style="{ height: '40%' }">
      <van-picker :columns="dateArr" show-toolbar @cancel="onCancel" @confirm="onConfirmDate" />
    </van-popup>
  </div>
</template>

<script>
import Vue from 'vue'
import { Popup, Picker } from 'vant'
import { sortNumber } from '@/common/utils/utils'
Vue.use(Popup).use(Picker)
export default {
  data () {
    return {
      isSelectPrice: false,
      isSelectDate: false,
      priceArr: [],
      priceValue: 100000,
      dateArr: [],
      dateValue: 7
    }
  },
  created () {
    this.priceArr = this.detail.loanAmountList.sort(sortNumber).map(item => {
      let obj = Object.assign(
        {},
        {
          text: `RP ${this.replacePrice(item)}`,
          price: item
        }
      )
      return obj
    })
    this.dateArr = this.detail.loanTimeList.sort(sortNumber).map(item => {
      let obj = Object.assign(
        {},
        {
          text: `${item} Hari`,
          date: parseInt(item)
        }
      )
      return obj
    })
    this.priceValue = this.priceArr[0].price
    this.dateValue = this.dateArr[0].date
  },
  props: {
    detail: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    interestRate () {
      let interest = (
        this.dateValue *
        (this.detail.interestRate / 100) *
        this.priceValue
      ).toFixed(0)
      return interest
    },
    payAmount () {
      return parseInt(this.interestRate) + parseInt(this.priceValue)
    }
  },
  methods: {
    replacePrice (price) {
      return price.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1.')
    },
    handleLeft () {
      this.isSelectPrice = true
    },
    handleRight () {
      this.isSelectDate = true
    },
    onCancel () {
      this.isSelectPrice = false
      this.isSelectDate = false
    },
    onConfirmPrice (value) {
      this.priceValue = value.price
      this.isSelectPrice = false
    },
    onConfirmDate (value) {
      this.dateValue = value.date
      this.isSelectDate = false
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  height: 100%;
  border-radius: 4px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  .head {
    display: flex;
    height: 80px;
    box-sizing: border-box;
    .head-left {
      flex: 1;
      padding: 10px;
      .container {
        position: relative;
        height: 100%;
        .price {
          font-family: 'DINMedium';
          width: 145px;
          padding: 5px 10px 0 5px;
          font-size: 23px;
          color: #e14b36;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-align: center;
          em {
            padding-right: 5px;
            font-style: normal;
          }
        }
        .triangle {
          position: absolute;
          top: 15px;
          right: 0;
          width: 0;
          height: 0;
          border-width: 5px;
          border-style: solid;
          border-color: #333 transparent transparent transparent;
        }
        .desc {
          text-align: center;
          font-size: 12px;
          color: #999999;
        }
        &.container::after {
          content: '';
          width: 200%;
          height: 150%;
          position: absolute;
          top: 10%;
          left: 5%;
          border-right: 1px solid #bfbfbf;
          border-radius: 4px;
          -webkit-transform: scale(0.5, 0.5);
          transform: scale(0.5, 0.5);
          -webkit-transform-origin: top left;
        }
      }
    }
    .head-right {
      flex: 1;
      padding: 10px 10px 10px 0;
      position: relative;
      .date {
        font-family: 'DINMedium';
        width: 130px;
        padding: 5px 0;
        font-size: 23px;
        color: #e14b36;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        em {
          padding-right: 5px;
          font-style: normal;
        }
      }
      .triangle {
        position: absolute;
        top: 25px;
        right: 10px;
        width: 0;
        height: 0;
        border-width: 5px;
        border-style: solid;
        border-color: #333 transparent transparent transparent;
      }
      .desc {
        text-align: center;
        font-size: 12px;
        color: #999999;
      }
    }
  }
  .footer {
    display: flex;
    height: 60px;
    .footer-left {
      position: relative;
      flex: 1;
      padding: 5px 0;
      .interest {
        line-height: 24px;
        font-size: 14px;
        text-align: center;
      }
      &.footer-left::after {
        content: '';
        width: 200%;
        height: 150%;
        position: absolute;
        top: 10%;
        left: 0;
        border-right: 1px solid #bfbfbf;
        border-radius: 4px;
        -webkit-transform: scale(0.5, 0.5);
        transform: scale(0.5, 0.5);
        -webkit-transform-origin: top left;
      }
    }
    .footer-mid {
      position: relative;
      flex: 1;
      padding: 5px 0;
      margin: 0 auto;
      .price {
        box-sizing: border-box;
        padding: 0 5px;
        width: 120px;
        line-height: 24px;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
      }

      &.footer-mid::after {
        content: '';
        width: 200%;
        height: 150%;
        position: absolute;
        top: 10%;
        left: 0;
        border-right: 1px solid #bfbfbf;
        border-radius: 4px;
        -webkit-transform: scale(0.5, 0.5);
        transform: scale(0.5, 0.5);
        -webkit-transform-origin: top left;
      }
    }
    .footer-right {
      flex: 1;
      padding: 5px 0;
      .interest-price {
        box-sizing: border-box;
        padding: 0 5px;
        width: 120px;
        line-height: 24px;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
      }
    }
    .desc {
      font-size: 12px;
      text-align: center;
      color: #999999;
    }
  }
}
@media screen and (max-width: 350px) {
  .card {
    .head {
      .head-left {
        .container {
          .price {
            width: 130px;
          }
        }
      }
      .head-right {
        .date {
          width: 100px;
        }
      }
    }
    .footer {
      .footer-left {
      }
      .footer-mid {
        .price {
          width: 100px;
        }
      }
      .footer-right {
        .interest-price {
          width: 100px;
        }
      }
    }
  }
}
</style>
