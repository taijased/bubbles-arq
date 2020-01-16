<template lang="pug">
  #app
    //- ParticleBackground
    router-view
</template>


<script>
import ParticleBackground from './components/ParticleBackground.vue'
export default {
  components: {
    ParticleBackground
  }
}


</script>


<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  width 100vw
  height 100vh
  // overflow hidden

body
  margin 0
  padding 0
  overflow hidden


</style>
