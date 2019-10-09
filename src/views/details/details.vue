<template>
  <div class="details">
    <van-nav-bar title="标题" :border="false" left-arrow @click-left="onClickLeft" />
    <div class="head-wrap">
      <div class="content">
        <div class="head">
          <div class="head-left"></div>
          <div class="head-right"></div>
        </div>
        <div class="footer">
          <div class="footer-left"></div>
          <div class="footer-mid"></div>
          <div class="footer-right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { DropdownMenu, DropdownItem, NavBar } from 'vant';

Vue.use(DropdownMenu).use(DropdownItem);

Vue.use(NavBar);
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
    };
  },
  methods: {
    onClickLeft () {}
  }
};
</script>

<style scoped lang="scss">
.details {
  .van-nav-bar {
    background: red;
    .van-icon {
      color: #ffffff;
    }
    .van-nav-bar__title {
      color: #ffffff;
    }
  }
  .head-wrap {
    box-sizing: border-box;
    height: 200px;
    padding: 20px;
    background: red;
    .content {
      height: 100%;
      border-radius: 4px;
      background: #ffffff;
      .head {
        display: flex;
        height: 100px;
        background: #666;
        .head-left {
          flex: 1;
        }
        .head-right {
          flex: 1;
        }
      }
      .footer {
        display: flex;
        height: 60px;
        .footer-left {
          flex: 1;
        }
        .footer-mid {
          flex: 1;
        }
        .footer-right {
          flex: 1;
        }
      }
    }
  }
}
</style>
