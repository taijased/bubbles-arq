<template lang="pug">
  .main
    .main__content Augmented Reality <br/> is easier than you think
    .primary-btn Try editor for free
    img(src="../../assets/img/mb.jpg", alt="alt")

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
    &__content
      z-index 10
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