<template lang="pug">
  #app
    ParticleBackground(v-if="getVisibleParticle")
    router-view
</template>


<script>
import { mapActions, mapGetters} from 'vuex';
import ParticleBackground from './components/ParticleBackground.vue'
export default {
  computed: {
    ...mapGetters({
        getVisibleParticle: "header/getVisibleParticle",
    })
  },
  methods: {
    ...mapActions({
      updateParticle: "header/updateParticle",
    }),
  },
  components: {
    ParticleBackground
  },
  created() {
    this.updateParticle(true)
  }
}


</script>


<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  width 100vw
  height 100vh
  // overflow hidden
  // overflow-y: hidden;



body
  margin 0
  padding 0
  overflow hidden
  overflow-x: hidden;


</style>
