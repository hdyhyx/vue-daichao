<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <my-tabs></my-tabs>
  </div>
</template>
<script>
import MyTabs from '@/components/tabs/tabs.vue'
export default {
  data () {
    return {}
  },
  components: {
    MyTabs
  }
}
</script>
<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
