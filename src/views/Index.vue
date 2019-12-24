<template lang="pug">
  div
    .index
      Header
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

@media screen and (min-width: 1000px) 
  .index
    background rgba(61, 69, 238, 1);
    overflow hidden
  // .mobile-index
  //   display none
@media screen and (max-width: 1000px) 
  .index
    display none
  // .mobile-index
  //   display block
</style>