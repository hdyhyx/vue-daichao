<template>
  <transition name="slide">
    <div class="feedback">
      <van-nav-bar title="Kritik & Saran" left-arrow @click-left="onClickLeft" />
      <van-field
        v-model="value"
        maxlength="200"
        rows="10"
        type="textarea"
        placeholder="Yang terhormat, kami menghargai saran berharga dari Anda yang membantu kami meningkatkan kualitas produk kami. Terima kasih!"
      />
      <div class="count">{{count}}/200</div>
      <div class="submit-wrap">
        <my-button class="submit" @click="handleClickSave">Kirim</my-button>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue'
import MyButton from '@/base/button/button'
import { Cell, CellGroup, NavBar, Field } from 'vant'
import { Addproduct } from '@/api/product'

Vue.use(Cell)
  .use(CellGroup)
  .use(NavBar)
  .use(Field)
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    handleClickSave () {
      Addproduct()
      // setHomeBanner()
    }
  },
  components: {
    MyButton
  },
  computed: {
    count () {
      return this.value.length
    }
  }
}
</script>

<style scoped lang="scss">
.feedback {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #f5f5f5;
  z-index: 99;
  &.slide-enter-active,
  &.slide-leave-active {
    transition: all 0.25s;
  }
  &.slide-enter,
  &.slide-leave-to {
    transform: translate3d(100%, 0, 0);
  }
  .van-nav-bar {
    background: #2291e0;
    .van-icon {
      color: #ffffff;
    }
    .van-nav-bar__title {
      color: #ffffff;
    }
  }
  .count {
    position: relative;
    padding: 0 10px;
    top: -20px;
    font-size: 14px;
    text-align: right;
    color: #333;
  }
  .submit-wrap {
    text-align: center;
    .submit {
      width: 270px;
      height: 40px;
      border-radius: 4px;
    }
  }
}
</style>
