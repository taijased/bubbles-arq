<template lang="pug">
.footer
    .footer-buttons
        img(src='../assets/img/arq-viewer.svg')
        div {{$t("footer.1")}}
        div {{$t("footer.2")}}
        div {{$t("footer.3")}}
        div {{$t("footer.4")}}
    .footer-right
      .footer-right-lang-mobile
        img(src='../assets/img/earth-24px.svg')
        img(src='../assets/img/down-arrow-24px.svg')
        select(value='EN' v-model='localization', @change="setLocalization()")
          option EN
          option RU
      .home__stores
        img(src='../assets/img/AppStore.svg')
        img(src='../assets/img/GooglePlay.svg')
      .footer-right-lang
        img(src='../assets/img/earth-24px.svg')
        img(src='../assets/img/down-arrow-24px.svg')
        select(value='EN' v-model='localization', @change="setLocalization()")
          option EN
          option RU
    .footer-rights 2020 © ARQ, LLC. All rights reserved. Built with ❤️ in Russia, Kazan
    

</template>

<script>
export default {
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
    .footer
        font-family: 'TT Norms Regular';
        background: #14171D;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-between;
        padding 6.666vh 10.555555vw 
    .footer-buttons
        // max-width 40vw
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-between;
        div
            margin-left 1.319vw
            @media screen and (max-width: 1000px) 
                width 80%
                margin-top 32px
        img
            @media screen and (min-width: 1000px) 
                width 55px
            @media screen and (max-width: 1000px) 
                width 110px
    .footer-right
        position relative
        top 2.5vh
        display: flex;
        flex-direction: column;
        
        justify-content: space-between;
        @media screen and (min-width: 1000px) 
            align-items: flex-end;
        @media screen and (max-width: 1000px) 
            align-items: flex-start;
        .footer-right-lang-mobile
                    margin-bottom 22px
                    position: relative;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-end;
                    img:nth-child(1)
                        height: 3.5555vh;
                        position: relative;
                        left: 1.2vw;
                    img:nth-child(2)
                        position: relative;
                        left: 50px;
                        z-index: 5;
                    select
                        color white
                        padding-left: 0.3vw;
                        height: 24px;
                        width: 47px;
                        background-color: #171A20;
                        opacity: 0.5;
                        border-color: #171A20;
                        -moz-appearance:none; /* Firefox */
                        -webkit-appearance:none; /* Safari and Chrome */
                        appearance:none;
                        position: relative;
                        z-index: 10;
                    @media screen and (min-width: 1000px) 
                        display: none;
                    @media screen and (max-width: 1000px) 
                        display: flex;
        .home__stores
            margin-bottom 4.444vh
            img:first-child
                margin-right 15px
        .footer-right-lang
                    position: relative;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-end;
                    img:nth-child(1)
                        height: 3.5555vh;
                        position: relative;
                        left: 1.2vw;
                    img:nth-child(2)
                        position: relative;
                        left: 3.8vw;
                        z-index: 5;
                    select
                        color white
                        padding-left: 0.3vw;
                        height: 3.8vh;
                        width: 3.811vw;
                        background-color: #171A20;
                        opacity: 0.5;
                        border-color: #171A20;
                        -moz-appearance:none; /* Firefox */
                        -webkit-appearance:none; /* Safari and Chrome */
                        appearance:none;
                        position: relative;
                        z-index: 10;
                    @media screen and (min-width: 1000px) 
                        display: flex;
                    @media screen and (max-width: 1000px) 
                        display: none;
    .footer-rights
        color: #A6A6A6;
        min-width 50vw
        
    //     div
    //         display: flex;
    //         flex-direction: row;
    //         align-items: center;
    //         justify-content: space-between;
    //         .footer-left
    //             height 100%
    //             display: flex;
    //             flex-direction: column;
    //             align-items: flex-start;
    //             justify-content: space-between;
                
    //                 div
    //                     font-size: 1.7777vh;
    //                     display: flex;
    //                     flex-direction: row;
    //                     align-items: center;
    //                     justify-content: flex-start;
    //                 img 
    //                     width: 3.819444vw;
    //                     margin-right: 3.819444vw;
    //             .footer-left-rights
    //                 color: #A6A6A6;
    //         .footer-right
    //             height: 100%;
    //             width: 40%;
                
    //             .home__stores
    //                 display: flex;
    //                 flex-direction: row;
    //                 align-items: center;
    //                 justify-content: flex-end;
    //                 img 
    //                     &:first-child
    //                         margin-right: 0.9vw;
    //                     &:hover
    //                         cursor: pointer;
                
  
  
</style>