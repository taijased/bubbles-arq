<template lang="pug">
.howto
  .howto-container
    .howto-container__texts
      div {{$t("howto.overheader")}}
      div
        | {{$t("howto.header")}}
      div
        | {{$t("howto.content")}}
    .howto-container__btns
      .howto-container__btns-btn
        .howto-container__btns-back
        .howto-container__btns-slide
        img(src='../assets/img/date-range-24px.svg')
        .howto-container__btns-text {{$t("howto.1")}}
      .howto-container__btns-btn
        .howto-container__btns-back
        .howto-container__btns-slide
        img(src='../assets/img/edit-24px.svg')
        .howto-container__btns-text {{$t("howto.2")}}
      .howto-container__btns-btn
        .howto-container__btns-back
        .howto-container__btns-slide
        img(src='../assets/img/person-add-24px.svg')
        .howto-container__btns-text {{$t("howto.3")}}
    .howto-container__hint {{$t("howto.soon")}}
  .howto-images
    img(src='../assets/img/howto-files.svg')
    img(src='../assets/img/howto-projects.svg')


</template>

<style lang="stylus" scoped>
    .howto
        background: #14171D;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content center;
        padding-top 4vh
        @media screen and (max-width: $w-l) 
                padding 0 10.27777vw 0 10.27777vw
                flex-direction: column;
                align-items: flex-start;
                justify-content center;
        &-container
            // width: 33vw;
            // height: 100%;
            margin-right 4vw
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            // margin-top 4vh
            &__texts
                margin-left: 15px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-end;
                div:nth-child(1)
                    font-family: 'TT Norms Regular';
                    font-size: 12px;
                    margin-bottom: 1.33vh;
                div:nth-child(2)
                    font-size: 36px;
                    margin-bottom: 2.444vh;
                    max-width 240px
                div:nth-child(3)
                    font-family: 'TT Norms Regular';
                    font-size: 16px;
                    max-width 450px
                    color: gray;
            .howto-container__btns
                .howto-container__btns-btn
                    position relative
                    // background red
                    font-family: 'TT Norms Regular';
                    font-size: 16px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    margin-top: 1.3vh;
                    width: 288px;
                    height 48px
                    &:hover
                        .howto-container__btns-slide
                            width 288px
                            transition 2s
                        .howto-container__btns-back
                            width 288px
                    &:first-child
                        margin-top: 2.8888vh;
                    img 
                        position relative
                        z-index 10
                        height: 24px;
                        margin: 12px 12px 12px 16px;
                    .howto-container__btns-back
                        height 48px
                        border-radius: 5px;
                        z-index 8
                        width 0
                        background #4737D6
                        position absolute
                        // top -28px
                    .howto-container__btns-slide
                        height 48px
                        border-radius: 5px;
                        // top -20px
                        z-index 9
                        width 0
                        background #6C5FDE
                        position absolute
                    .howto-container__btns-text
                        background none
                        position relative
                        z-index 10
                        margin 0
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: flex-start;
            .howto-container__hint
              margin-top 5vh
              margin-left 15px
              color: gray;
        .howto-images
            
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: flex-start;
            img 
                &:first-child
                    position: relative;
                    z-index: 10;
                    @media screen and (min-width: $w-l) 
                        margin-left 3vw
                        height: 490px;
                        left: 110px;
                    @media screen and (max-width: $w-l) 
                        margin-top 2vw
                        height: 320px;
                        // left: 55px;
                        
                &:last-child
                    position: relative;
                    z-index: 0;
                    @media screen and (min-width: $w-l) 
                        height: 440px;
                    @media screen and (max-width: $w-l) 
                        height: 255px;
                        left: -55px;

</style>  


// @media screen and (min-width: 1000px) 
//                     font-size: 40px;
//                     max-width: 600px;
//                 @media screen and (max-width: 1000px) 
//                     font-size: 26px;
//                     max-width: 311px;