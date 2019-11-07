<template>
  <div class="pullup-wrapper">
    <div v-if="!isPullUpLoad" class="before-trigger">
      <van-divider>向下拉取更多</van-divider>
    </div>
    <div v-else class="after-trigger">
      <van-loading size="24px">Loading...</van-loading>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Loading, Divider } from 'vant'
Vue.use(Loading).use(Divider)

export default {
  data () {
    return {}
  },
  props: {
    isPullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  components: {
    vanLoading: Loading,
    vanDivider: Divider
  }
}
</script>

<style scoped lang="scss">
.pullup-wrapper {
  padding: 10px 0;
  color: #999;
  text-align: center;
  .van-divider {
    margin: 0;
  }
}
</style>
