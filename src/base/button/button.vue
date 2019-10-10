<template>
  <button :disabled="isDisable ? 'disabled' : false" :class="myClass" @click="click">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    child: {
      type: null,
      default: ''
    },
    isDisable: {
      type: Boolean,
      default: false
    },
    myClass: {
      type: String,
      default: 'bule'
    }
  },
  methods: {
    click () {
      return this.$emit('click')
    }
  }
}
</script>

<style scoped>
button {
  position: relative;
  display: inline-block;
  font-size: 14px;
  border: 1px solid #fff;
  border-radius: 3px;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
}
button:disabled {
  color: rgba(180, 180, 180, 1) !important;
  background-color: rgba(235, 235, 235, 1) !important;
  border-color: rgba(235, 235, 235, 1) !important;
  cursor: not-allowed !important;
}
.bule {
  color: rgba(255, 255, 255, 1);
  background: linear-gradient(
    90deg,
    rgba(81, 117, 247, 1) 0%,
    rgba(15, 189, 252, 1) 100%
  ); /* 标准的语法 */
}
.opcityBlue {
  color: rgba(255, 255, 255, 1);
  background: #d3e9f9;
  color: #2291e0;
}
.white {
  color: rgba(120, 120, 120, 1);
  background-color: rgba(235, 235, 235, 1);
  border-color: rgba(200, 200, 200, 1);
}
.white:hover {
  color: rgba(120, 120, 120, 1);
  background-color: rgba(200, 200, 200, 1);
}
</style>
