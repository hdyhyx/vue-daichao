<template>
  <div class="unfound">
    <div class="unfound-img"></div>
    <div class="unfound-text">Tidak ada lagi konten</div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
.unfound {
  .unfound-img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -80%);
    width: 83px;
    height: 83px;
    background-image: url('./unfound.png');
    background-size: cover;
    background-repeat: no-repeat;
  }
  .unfound-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 160%);
    font-size: 13px;
    color: #999;
  }
}
</style>
