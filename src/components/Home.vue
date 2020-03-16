<template lang="pug">
.home
  div
    .home__logo
        img(src="../assets/arq-logo_white.svg")
    //- .home__header Создай дополненную реальность за пару минут
    .home__header {{$t("home.header")}}
    .home__stores
      img(src='../assets/img/AppStore.svg')
      img(src='../assets/img/GooglePlay.svg')
  .home__images
    img(src='../assets/img/home1.png')
    img(src='../assets/img/home2.png')
    img(src='../assets/img/home3.png')
    img(src='../assets/img/oval.svg')

</template>

<style lang="stylus" scoped>
    .home
        background: #4737D6;
        min-height 100vh
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        // padding-top 13.3333vh
        div
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            .home__logo
                img 
                    margin-top 32px
                    margin-bottom 32px
                    width 110px
                    height 80px
                @media screen and (min-width: 1000px) 
                    img 
                        display none
                
                @media screen and (max-width: 1000px) 
                    img 
                        display flex
                       
            .home__header
                text-align: center;
                @media screen and (min-width: 1000px) 
                    font-size: 40px;
                    max-width: 600px;
                @media screen and (max-width: 1000px) 
                    font-size: 26px;
                    max-width: 311px;
            .home__stores
                margin-top: 2.2222vh;
                margin-bottom: 5.22vh;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                img 
                    position relative
                    z-index 10
                    width 144px
                    height 48px
                    &:first-child
                        margin-right: 0.9vw;
                    &:last-child
                        width 162px
                        height 48px
                    &:hover
                        cursor: pointer;
        .home__images
            width 100vw
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: center;
            
            @media screen and (min-width: 1000px) 
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
            @media screen and (max-width: 1000px) 
                img
                    height: 300px;
                    width 188px
                    &:first-child
                        height: 282px;
                        position: relative;
                        left: 90px;
                    &:nth-child(3)
                        height: 282px;
                        position: relative;
                        left: -90px;
                    &:nth-child(2)
                        z-index: 10;
                    &:nth-child(4)
                        display none


</style>  

  