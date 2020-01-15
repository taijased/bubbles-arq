<template lang="pug">
  .main
    .main__content-desktop
      .main__title Augmented Reality <br/> is easier than you think
      .primary-btn Try editor for free
      img(src="../../assets/img/mb.jpg", alt="macbook")

    .main__content-mobile
      .main__title Augmented <br/> Reality <br/>is easier than <br/>you think
      img(src="../../assets/img/mb_mobile.jpg", alt="mb_mobile")
      .primary-btn Try editor for free
      .primary-link Want an awesome project?

</template>

<script>

import { mapGetters, mapActions} from 'vuex';

export default {
  computed: {
    ...mapGetters({
      getMenuStatus: "header/getMenuStatus",
    }),
  },
  methods: {
    ...mapActions({
      openMenu: "header/openMenu",
    }),
  },
  created() {
    this.$nextTick(() => {
      document.body.style.overflow = "hidden"
      if (this.getMenuStatus) {
        this.openMenu()
      }
    })
  }
}


</script>

  
<style lang="stylus" scoped>

.main
  height $main-height 
  display flex
  flex-direction column
  justify-content space-between
  align-items center
  overflow hidden
  padding-bottom 51px
  &__title
    width 80%
    z-index 10
    font-family: 'TT Norms Medium';
    font-style: normal;
    font-weight: bold;
    line-height: 70px;
    /* identical to box height */
    text-align: center;
    text-transform: uppercase;
    color: #4737D6;
    @media screen and (max-width: 1000px) 
      font-size: 36px;
      line-height: 44px;
      margin-bottom 20px
    @media screen and (min-width: 1000px) 
      font-size: 48px;

 
  @media screen and (min-width: 1000px) 
    .main__content-desktop
      height @height
      display flex
      flex-direction column
      justify-content space-between
      align-items center
      img 
        width 60%
    .main__content-mobile
      display none
  @media screen and (max-width: 1000px) 
    .main__content-desktop
      display none
    .main__content-mobile
      height @height
      display flex
      flex-direction column
      justify-content flex-start
      align-items center
      padding-bottom 83px
      img 
        width 100%
        margin-bottom 20px
      .primary-btn 
        margin-bottom 40px


    


</style>