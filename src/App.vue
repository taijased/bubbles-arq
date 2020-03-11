<template lang="pug">
  #app
    //- ParticleBackground
    router-view
</template>


<script>
// import ParticleBackground from './components/ParticleBackground.vue'
// export default {
//   components: {
//     ParticleBackground
//   }
// }


</script>


<style lang="stylus">
#app
  font-family: 'TT Norms Medium', Arial;
  color: white;
  // font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  width 100vw
  height 100vh


body
  margin 0
  padding 0
  overflow-x: hidden;
  &::-webkit-scrollbar
    display none


</style>
