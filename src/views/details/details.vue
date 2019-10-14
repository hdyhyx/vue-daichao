<template>
  <transition name="slides">
    <div class="details">
      <van-nav-bar title="标题" fixed :border="false" left-arrow @click-left="onClickLeft" />
      <div class="head-wrap">
        <card></card>
      </div>
      <div class="details-info">
        <scroll class="details-wrap">
          <div>
            <div class="terms-wrap">
              <div class="title-wrap">
                <div class="icon"></div>
                <div class="title">Syarat Pendaftaran</div>
              </div>
              <ul class="list">
                <li class="item">1. klik install</li>
                <li class="item">2. akan lanjut ke halaman detail</li>
                <li class="item">3. download semua produk app yang dibutuhkan</li>
                <li class="item">4. isi data pribadi secara lengkap beserta jumlahuang</li>
                <li class="item">5.menunggu proses verifikasi dan pencairan dana.</li>
              </ul>
            </div>
            <div class="desc-wrap">
              <div class="title-wrap">
                <div class="icon"></div>
                <div class="title">Deskripsi Produk</div>
              </div>
              <ul class="list">
                <li class="item">1. klik install</li>
                <li class="item">2. akan lanjut ke halaman detail</li>
                <li class="item">3. download semua produk app yang dibutuhkan</li>
                <li class="item">4. isi data pribadi secara lengkap beserta jumlahuang</li>
                <li class="item">5.menunggu proses verifikasi dan pencairan dana.</li>
              </ul>
            </div>
          </div>
        </scroll>
      </div>
      <div class="install-wrap">
        <my-button class="install-btn">Daftar Sekarang</my-button>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue'
import Scroll from '@/base/scroll/scroll.vue'
import MyButton from '@/base/button/button'
import Card from '@/components/card/card'
import { NavBar } from 'vant'
Vue.use(NavBar)
export default {
  data () {
    return {}
  },
  components: {
    Scroll,
    MyButton,
    Card
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
.details {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  z-index: 99;
  .van-nav-bar {
    background: rgba(0, 0, 0, 0);
    .van-icon {
      color: #ffffff;
    }
    .van-nav-bar__title {
      color: #ffffff;
    }
  }
  &.slides-enter-active,
  &.slides-leave-active {
    transition: all 0.25s;
  }
  &.slides-enter,
  &.slides-leave-to {
    transform: translate3d(100%, 0, 0);
  }
  .head-wrap {
    box-sizing: border-box;
    height: 200px;
    padding: 60px 20px 0 20px;
    background: linear-gradient(
      180deg,
      rgba(34, 145, 224, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    .content {
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
          padding: 10px;
          .date {
            font-family: 'DINMedium';
            width: 145px;
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
  }
  .details-info {
    position: absolute;
    top: 200px;
    left: 0;
    right: 0;
    bottom: 60px;
    .details-wrap {
      height: 100%;
      overflow: hidden;
      .terms-wrap {
        padding: 10px 20px 0 20px;
      }
      .desc-wrap {
        padding: 0 20px 20px 20px;
      }
      .title-wrap {
        display: flex;
        height: 40px;
        align-items: center;
        .icon {
          height: 14px;
          margin-right: 5px;
          flex: 0 3px;
          border-radius: 2px;
          background: #2291e0;
        }
        .title {
          flex: 1;
          font-size: 17px;
          color: #333333;
        }
      }
      .list {
        font-size: 13px;
        .item {
          line-height: 18px;
          color: #999999;
        }
      }
    }
  }
  .install-wrap {
    position: fixed;
    height: 60px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background: #fff;
    text-align: center;
    .install-btn {
      margin-top: 9px;
      width: 308px;
      height: 43px;
    }

    &.install-wrap::after {
      content: '';
      width: 200%;
      height: 200%;
      position: absolute;
      top: 0;
      left: 0;
      border-top: 1px solid #bfbfbf;
      border-radius: 4px;
      -webkit-transform: scale(0.5, 0.5);
      transform: scale(0.5, 0.5);
      -webkit-transform-origin: top left;
    }
  }
}
</style>
