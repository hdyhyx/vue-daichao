<template>
  <transition name="slides">
    <div class="details">
      <van-nav-bar
        :title="productDetails.name"
        fixed
        :border="false"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="head-wrap">
        <card v-if="productDetails" :detail="productDetails"></card>
        <van-skeleton v-else class="card-skeleton" title-width="100%" title :row="0" />
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
        <my-button class="install-btn" @click="handleSaveHistory">Daftar Sekarang</my-button>
      </div>
      <!-- 选择下载途径-->
      <van-popup v-model="showUpload" round position="bottom" :style="{ height: '100px' }">
        <div class="upload-wrap">
          <div class="contnet-left">
            <div class="download-icon">
              <svg class="icon icon-size" :style="{'color':downloadIconColor}" aria-hidden="true">
                <use xlink:href="#iconupload" />
              </svg>
            </div>
            <div class="desc">Download APK</div>
          </div>
          <div class="content-right">
            <div class="download-icon">
              <svg
                class="icon icon-size"
                :style="{'color':googlePlayIconColor}"
                aria-hidden="true"
              >
                <use xlink:href="#iconGoogle-Play" />
              </svg>
            </div>
            <div class="desc">Google-Play</div>
          </div>
        </div>
      </van-popup>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue'
import Scroll from '@/base/scroll/scroll.vue'
import MyButton from '@/base/button/button'
import Card from '@/components/card/card'
import { getToken } from '@/common/utils/cookie'
import { getProductDetails, setHistoryProduct } from '@/api/product'
import { NavBar, Toast, Skeleton, Popup } from 'vant'
Vue.use(NavBar)
  .use(Toast)
  .use(Skeleton)
  .use(Popup)
export default {
  data () {
    return {
      showUpload: false,
      productDetails: '',
      productId: '',
      downloadIconColor: '#999999',
      googlePlayIconColor: '#999999'
    }
  },
  components: {
    Scroll,
    MyButton,
    Card
  },
  created () {
    console.log(this.$route)
    this.productId = this.$route.query.productId
    if (this.productId !== undefined || this.productId !== '') {
      const formData = Object.assign(
        {},
        {
          productId: this.productId
        }
      )
      this.getProductDetails(formData)
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    getProductDetails (formData) {
      getProductDetails(formData).then(res => {
        const {
          data: { code, results, message }
        } = res
        if (code === '200') {
          console.log(results.googleUrl)
          if (results.googleUrl !== null && results.googleUrl !== '') {
            this.googlePlayIconColor = '#2291e0'
          }
          if (results.url !== null && results.url !== '') {
            this.downloadIconColor = '#2291e0'
          }
          this.productDetails = results
        } else {
          Toast(message)
        }
      })
    },
    handleSaveHistory () {
      if (!getToken()) {
        return this.$router.push({
          path: '/login',
          query: {
            redirect: `/details?productId=${this.productId}`
          }
        })
      }
      this.showUpload = true
      // console.log(111)
      // window.location.href =
      //   'http://play.google.com/store/apps/details?id=com.google.android.apps.maps'
      // const formData = Object.assign(
      //   {},
      //   {
      //     productId: this.productId
      //   }
      // )
      // setHistoryProduct(formData).then(res => {
      //   console.log(res)
      // })
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
    .card-skeleton {
      padding: 0;
      width: 100%;
      height: 100%;
      .van-skeleton__row {
        height: 100%;
      }
      .van-skeleton__title {
        height: 100%;
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
          line-height: 24px;
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
    z-index: 999;
    background: #fff;
    text-align: center;
    .install-btn {
      margin-top: 9px;
      width: 308px;
      height: 43px;
      z-index: 999;
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
  .upload-wrap {
    display: flex;
    height: 100%;
    justify-content: center;
    text-align: center;
    color: #333333;
    .contnet-left {
      flex: 1;
      .download-icon {
        margin: 5px 0 5px 0;
        text-align: center;
        font-size: 60px;
      }
      .desc {
        font-size: 12px;
      }
    }
    .content-right {
      flex: 1;
      .download-icon {
        margin: 12px 0 5px 0;
        text-align: center;
        font-size: 48px;
      }
      .desc {
        margin-top: 10px;
        font-size: 12px;
      }
    }
  }
}
</style>
