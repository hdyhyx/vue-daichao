<template>
  <div class="details">
    <van-nav-bar title="标题" :border="false" left-arrow @click-left="onClickLeft" />
    <div class="head-wrap">
      <div class="content">
        <div class="head">
          <div class="head-left">
            <div class="container">
              <div class="price">
                <em>RP</em>
                1000.000
              </div>
              <p class="desc">Pinjaman</p>
            </div>
          </div>
          <div class="head-right">
            <div class="date">
              <em>7</em>
              Hari
            </div>
            <p class="desc">Lama Pinjam</p>
          </div>
        </div>
        <div class="footer">
          <div class="footer-left">
            <div class="interest">0.3% hari</div>
            <p class="desc">Referemsi tarif</p>
          </div>
          <div class="footer-mid">
            <div class="price">Rp 1.021.000</div>
            <p class="desc">Pembayaran</p>
          </div>
          <div class="footer-right">
            <div class="interest-price">Rp 21.000</div>
            <p class="desc">Bunga + admin</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { DropdownMenu, DropdownItem, NavBar } from 'vant'

Vue.use(DropdownMenu).use(DropdownItem)

Vue.use(NavBar)
export default {
  data () {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ]
    }
  },
  methods: {
    onClickLeft () {}
  }
}
</script>

<style scoped lang="scss">
.details {
  .van-nav-bar {
    background: #2291e0;
    .van-icon {
      color: #ffffff;
    }
    .van-nav-bar__title {
      color: #ffffff;
    }
  }
  .head-wrap {
    box-sizing: border-box;
    height: 160px;
    padding: 20px;
    background: linear-gradient(
      180deg,
      rgba(34, 145, 224, 1) 0%,
      rgba(255, 255, 255, 1) 60%
    );
    .content {
      height: 100%;
      border-radius: 4px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
      .head {
        display: flex;
        height: 70px;
        box-sizing: border-box;
        .head-left {
          flex: 1;
          padding: 5px 10px;
          .container {
            position: relative;
            height: 100%;
            .price {
              width: 145px;
              padding: 10px 0;
              font-size: 18px;
              font-weight: 600;
              color: #e14b36;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              text-align: center;
              em {
                padding-right: 5px;
                font-style: normal;
                font-weight: 600;
              }
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
          padding: 5px 10px;
          .date {
            width: 145px;
            padding: 10px 0;
            font-size: 18px;
            font-weight: 600;
            color: #e14b36;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: center;
            em {
              padding-right: 5px;
              font-style: normal;
              font-weight: 600;
            }
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
        height: 50px;
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
            line-height: 24px;
            font-size: 14px;
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
  }
}
</style>
