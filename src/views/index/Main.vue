<template lang="pug">
  .main
    .main__content Augmented Reality <br/> is easier than you think
    .primary-btn Try editor for free
    img(src="../../assets/img/mb.jpg", alt="alt")

</template>

<script>


export default {
  
}


</script>



<style lang="stylus" scoped>

.main
    width 100%
    height 100%
    display flex
    flex-direction column
    justify-content space-between
    align-items center
    &__content
      z-index 10
      margin-top $header-height
      font-family: 'TT Norms Medium';
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 70px;
      /* identical to box height */
      text-align: center;
      text-transform: uppercase;
      color: #4737D6;
  img
    width 60%

</style>