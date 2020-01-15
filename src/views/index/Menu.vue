<template lang="pug">
  .menu
    div
    .menu__controls
      .menu__controls-btn ABOUT US
      .menu__controls-btn EDITOR
      .menu__controls-btn STAY IN TOUCH


    .menu_contacts-desktop
      .menu_contacts
        .contacts-block
          .menu-info-block Russia, Kazan<br/>Spartakovskaya 2b, 57 office
          .menu-info-block 
            span Inst, Telegram<br/>
            | Spartakovskaya 2b, 57 office
          .menu-info-block 
            span Mail<br/>
            | hello@arq.su
        .menu-info-block © 2020 ARQ, LLC<br/>ALL RIGHTS RESERVED
    .menu_contacts-mobile
      .menu_contacts
        .contacts-block
          .menu-info-block Russia, Kazan<br/>Spartakovskaya 2b, 57 office
          .menu-info-block 
            span Inst, Telegram<br/>
            | Spartakovskaya 2b, 57 office
        .contacts-block
          .menu-info-block © 2020 ARQ, LLC<br/>ALL RIGHTS RESERVED
          .menu-info-block 
            span Mail<br/>
            | hello@arq.su
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
      if (!this.getMenuStatus) {
        this.openMenu()
      }
      document.body.style.overflow = "hidden"
    })
  },
  beforeDestroy() {
    document.body.style.overflow = "visible"
  }
}

</script>

<style lang="stylus" scoped>

.menu
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  display flex
  flex-direction column
  justify-content space-between
  align-items center
  overflow hidden
  z-index 5
  background: #4737D6;
  padding 36px 5vw;
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
      @media screen and (max-width: 1000px) 
        font-size: 36px;
        line-height: 44px;
        margin 25px 0;

      @media screen and (min-width: 1000px) 
        font-size: 48px;
        margin 50px 0;


  .menu_contacts
    width 100%
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    .contacts-block
      display flex
      flex-direction row
      justify-content space-between
      align-items center
     .menu-info-block 
      font-family 'TT Norms Medium'
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      color: #FFFFFF;
      margin-right 60px;
      &:last-child
        margin 0
      span 
        font-style: italic;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
      
  @media screen and (max-width: 1000px) 
    .menu_contacts-mobile
      width 100%
      .menu_contacts
        width @width
        flex-direction column
        justify-content space-between
        .contacts-block
          width @width
          &:first-child
            margin-bottom 14px
          .menu-info-block 
            margin-right 0px
            &:nth-child(even)
              text-align right
    .menu_contacts-desktop
      display none

  @media screen and (min-width: 1000px) 
    .menu_contacts-desktop
      width 100%
      display flex
    .menu_contacts-mobile
      display none

        
</style>