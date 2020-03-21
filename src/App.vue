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
  font-family: 'TT Norms Medium';
  color: white;
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  width 100vw
  height 100vh


body
  background: #4737D6;
  margin 0
  padding 0
  overflow-x: hidden;
  // overflow-y: hidden;
  &::-webkit-scrollbar
    display none


</style>
