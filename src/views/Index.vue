<template lang="pug">
  .wrapper
    Header
    transition(name="fade", mode="out-in", :css="true")
      router-view
</template>

<script>
import Header from '../components/Header';

export default {
  components: {
    Header
  },
}


</script>



<style lang="stylus">
.wrapper 
  width: 100%;
  height: 100%;


  
// @media screen and (min-width: 1000px) 
//   #main
//     background rgba(61, 69, 238, 1);
//     overflow hidden
//   // .mobile-index
//   //   display none
// @media screen and (max-width: 1000px) 
//   #main
//     display none
//   // .mobile-index
//   //   display block




</style>