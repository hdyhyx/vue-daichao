<template>
  <div class="my">
    <div class="head-wrap">
      <div v-if="userInfo" class="avatar" @click="goToLogin"></div>
      <div class="tel">{{isLogin?userInfo.name:'请登录'}}</div>
    </div>
    <div class="cell-list">
      <van-cell is-link to="/historyPage">
        <template slot="title">
          <svg class="icon icon-size" aria-hidden="true">
            <use xlink:href="#icontime" />
          </svg>
          <span class="custom-title">Riwayat Penelusuran</span>
        </template>
      </van-cell>
      <van-cell is-link to="/feedback">
        <template slot="title">
          <svg class="icon icon-size" aria-hidden="true">
            <use xlink:href="#iconmsg" />
          </svg>
          <span class="custom-title">Kritik & Saran</span>
        </template>
      </van-cell>
      <van-cell is-link to="/setting">
        <template slot="title">
          <svg class="icon icon-size" aria-hidden="true">
            <use xlink:href="#iconsetting" />
          </svg>
          <span class="custom-title">Settings</span>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import { Cell, CellGroup } from 'vant'
import { getToken } from '@/common/utils/cookie'
Vue.use(Cell).use(CellGroup)
export default {
  name: 'my',
  data () {
    return {
      isLogin: false
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  methods: {
    goToLogin () {
      if (this.isLogin) {
        return
      }
      this.$router.push({
        path: '/login'
      })
    }
  },
  created () {
    this.isLogin = !!getToken()
  }
}
</script>

<style scoped lang="scss">
.my {
  .head-wrap {
    position: relative;
    width: 100%;
    height: 135px;
    background-image: url('http://doveicnew.oss-cn-shenzhen.aliyuncs.com/applet/mall/my-background.png');
    background-size: cover;
    background-repeat: no-repeat;
    .avatar {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 73px;
      height: 73px;
      border-radius: 50%;
      background-image: url('http://doveicnew.oss-cn-shenzhen.aliyuncs.com/applet/mall/avatar.png');
      background-size: cover;
      background-repeat: no-repeat;
    }
    .tel {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translate(-50%, 0);
      border-radius: 50%;
      color: #fff;
      font-size: 14px;
    }
  }
}
</style>
<style lang="scss">
.cell-list {
  .icon-size {
    margin-right: 5px;
    font-size: 14px;
  }
}
</style>
