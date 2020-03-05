<template lang="pug">
  .wrapper
    Header
    Home
    Features
    Statue
    Howto
    //- transition(name="fade", mode="out-in", :css="true")
    //-   router-view
    

</template>

<script>
import Header from '../components/Header';
import Home from '../components/Home';
import Features from '../components/Features';
import Statue from '../components/Statue';
import Howto from '../components/Howto';

export default {
  components: {
    Header,
    Home,
    Features,
    Statue,
    Howto
  }
}



</script>



<style lang="stylus">
.wrapper 
  width: 100%;
  height: 100%;


  




</style>