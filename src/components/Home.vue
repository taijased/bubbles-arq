<template lang="pug">
.home
  .home-container
    .home_lang(v-on:click="setLocalization()") {{$t("localename")}}
    .home__logo
        img(src="../assets/arq-logo_white.svg")
    //- .home__header Создай дополненную реальность за пару минут
    .home__header {{$t("home.header")}}
    //- .home__hint {{$t("home.hint")}}
    Stores
  .home__images
    img(src='../assets/img/home1.png')
    img(src='../assets/img/home2.png')
    img(src='../assets/img/home3.png')
    img(src='../assets/img/oval.svg')

</template>



<script>
import Stores from '../components/Stores';
export default {
    components: {
        Stores
    },
    data() {
        return {
            localization: 'EN'
        }
    },
    methods: {
        setLocalization() {
            this.$i18n.locale = this.$i18n.locale === "ru" ? "en" : "ru";
        }
    }
}
</script>

<style lang="stylus" scoped>
    .home
        background: #4737D6;
        min-height 100vh
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        // padding-top 13.3333vh
        .home-container
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            .home_lang
                cursor pointer
                text-decoration underline
                color rgba(255, 255, 255, 0.7)
                margin-top 2.5vh
                margin-bottom 3vh
            .home__logo
                img 
                    width 110px
                    height 80px
                    display flex
            
            .home__header
                // margin-bottom 1.0vh
                min-height 15vh
                text-align center
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                @media screen and (min-width: $w-l) 
                    font-size: 40px;
                    max-width: 600px;
                @media screen and (max-width: $w-l) 
                    font-size: 26px;
                    max-width: 311px;
            // .home__hint
            //     color rgba(255, 255, 255, 0.7)
            //     // margin-bottom 1.5vh
            
        .home__images
            margin-top 4vh
            width 100vw
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: center;
            
            @media screen and (min-width: $w-l) 
                img
                    height: 51.111vh;
                    &:first-child
                        position: relative;
                        right: -60px;
                        z-index: 9;
                    &:nth-child(3)
                        position: relative;
                        right: 60px;
                        z-index: 9;
                    &:nth-child(2)
                        height: 59.111vh;
                        z-index: 10;
                    &:nth-child(4)
                        position absolute
                        height 57vh
                        width 100vw
            @media screen and (max-width: $w-l) 
                img
                    height: 285px;
                    width 200px
                    &:first-child
                        height: 228px;
                        position: relative;
                        left: 120px;
                    &:nth-child(3)
                        height: 228px;
                        position: relative;
                        left: -100px;
                    &:nth-child(2)
                        z-index: 10;
                    &:nth-child(4)
                        display none


</style>  

  