<template lang="pug">
    .stay-in-touch
        .menu__controls
        .menu__controls-btn ABOUT US

</template>
<script>
export default {
  created() {
    this.$nextTick(() => {
      document.body.style.overflow = "hidden"
    })
  }
}

</script>

<style lang="stylus" scoped>

.stay-in-touch
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  display flex
  flex-direction column
  justify-content space-between
  align-items center
  overflow hidden
  z-index 5
  background: #4737D6;
  padding 36px 5vw;

</style>