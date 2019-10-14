<template>
  <div class="tabs">
    <van-tabbar v-model="active" route>
      <van-tabbar-item replace to="/home">
        <span>Beanda</span>
        <img slot="icon" slot-scope="props" :src="props.active ? homeIcon.active : homeIcon.normal" />
      </van-tabbar-item>
      <van-tabbar-item replace to="/market/1">
        <span>Pasar</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? marketIcon.active : marketIcon.normal"
        />
      </van-tabbar-item>
      <van-tabbar-item replace to="/my">
        <span>Pribadi</span>
        <img slot="icon" slot-scope="props" :src="props.active ? myIcon.active : myIcon.normal" />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar).use(TabbarItem)
export default {
  data () {
    return {
      active: 0,
      homeIcon: {
        normal:
          'http://doveicnew.oss-cn-shenzhen.aliyuncs.com/applet/mall/home.png',
        active:
          'http://doveicnew.oss-cn-shenzhen.aliyuncs.com/applet/mall/home-ative.png'
      },
      marketIcon: {
        normal:
          'http://doveicnew.oss-cn-shenzhen.aliyuncs.com/applet/mall/market.png',
        active:
          'http://doveicnew.oss-cn-shenzhen.aliyuncs.com/applet/mall/market-active.png'
      },
      myIcon: {
        normal:
          'http://doveicnew.oss-cn-shenzhen.aliyuncs.com/applet/mall/my.png',
        active:
          'http://doveicnew.oss-cn-shenzhen.aliyuncs.com/applet/mall/my-ative.png'
      }
    }
  }
}
</script>
