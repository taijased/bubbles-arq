<template lang="pug">
    .menu__controls
      .menu__controls-btn 
        | ABOUT US
        div
      .menu__controls-btn 
        | EDITOR
        div
      .menu__controls-btn(@click="goToStayInTouch()")
        | STAY IN TOUCH
        div 
</template>


<script>
export default {
    methods: {
        goToStayInTouch() {
            this.$router.push('/stayintouch')
        }
    }
 
}

</script>

<style lang="stylus" scoped>
.menu__controls
    width 100%
    display flex
    flex-direction column

    @media screen and (max-width: 1000px) 
      justify-content center
      align-items center
    @media screen and (min-width: 1000px) 
      justify-content flex-end
      align-items flex-end


    .menu__controls-btn
      font-family 'TT Norms Medium'
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 59px;
      text-align: right;
      text-transform: uppercase;
      color: #FFFFFF;
      margin 50px 0;
      display flex
      flex-direction column
      justify-content center
      align-items flex-end
      @media screen and (max-width: 1000px) 
        font-size: 36px;
        line-height: 44px;
        margin 25px 0;

      @media screen and (min-width: 1000px) 
        font-size: 48px;
        margin 50px 0;
      div 
        margin-top -20px
        position relative
        height 20px
        width 0px
        background #F83902
        z-index -1
        transition: width .3s;


      &:hover
        cursor pointer
        div 
          width 100%
  	      transition: width .3s;
      // div 
      //   margin-top -20px
      //   position relative
      //   height 0px
      //   width 100%
      //   background #F83902
      //   z-index -1
      //   transition: height .3s;
      // &:hover
      //   cursor pointer
      //   div 
      //     width 20px
  	  //     transition: height .3s;
</style>