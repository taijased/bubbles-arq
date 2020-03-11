<template lang="pug">
.downloads
  .downloads-blue-rect
    //- .downloads-blue-rect__background
    //-     img(src='../assets/img/vector.svg')
    .downloads-blue-rect-left
        div ЧЕГО ТЫ ЖДЕШЬ?
        div Создавай дополненную рельность уже сейчас
        .home__stores
            img(src='../assets/img/AppStore.svg')
            img(src='../assets/img/GooglePlay.svg')
    .downloads__images
        img(src='../assets/img/home3.svg')
        img(src='../assets/img/home2.svg')

</template>

<style lang="stylus" scoped>
    .downloads
        @media screen and (min-width: 1000px) 
            padding 7.7777vh 9vw 0 9vw
        @media screen and (max-width: 1000px) 
            padding 0
        background: #14171D;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position relative
        z-index 10
        .downloads-blue-rect
            
            @media screen and (min-width: 1000px) 
                padding-left 75px
                padding-right 100px
                padding-top 22px
                border-radius: 5px;
                background-image url('../assets/img/vector.svg')
            @media screen and (max-width: 1000px) 
                padding 26px 42px
                border-radius: 0px;
            width 100%
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            background-color: #4737D6;
            .downloads-blue-rect__background
                left 1px
                position absolute
                height 100%
                width 100%
                padding 4.5vh 50vw 0 9vw
                img 
                    height 100%
                    width 100%
                    overflow hidden
            .downloads-blue-rect-left
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                div:nth-child(1)
                    font-size: 16px;
                    margin-bottom: 1vh;
                div:nth-child(2)
                    margin-bottom: 2vh;
                    @media screen and (min-width: 1000px) 
                        font-size: 32px;
                        width: 500px
                    @media screen and (max-width: 1000px) 
                        font-size: 26px;
                        width: 290px
                    
                .home__stores
                    // width 20
                    margin-top: 2.2222vh;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    // margin-bottom 42px
                    img 
                        &:first-child
                            margin-right: 16px;
                        &:hover
                            cursor: pointer;
            .downloads__images
                
                @media screen and (min-width: 1000px) 
                    display: flex;
                @media screen and (max-width: 1000px) 
                    display: none;
                flex-direction: row;
                align-items: flex-end;
                justify-content: center;
                img
                    position relative
                    height 316px
                    width 244px
                    &:first-child
                        height 266px
                        width 194px
                        left 30px

                
</style>  
