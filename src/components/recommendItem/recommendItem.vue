<template>
  <div class="item-wrap">
    <div class="content-left"></div>
    <div class="content-mid"></div>
    <div class="contnet-right"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.item-wrap {
  display: flex;
  .content-left {
    flex: 0 20px;
  }
  .content-mid {
    flex: 1;
  }
  .contnet-right {
    flex: 0 20px;
  }
}
</style>
