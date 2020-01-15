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
  }
}



</script>



<style lang="stylus">
.wrapper 
  width: 100%;
  height: 100%;


  




</style>