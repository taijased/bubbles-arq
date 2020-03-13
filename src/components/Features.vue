<template lang="pug">

.features
  .features__header {{$t("features.header")}}
  .features-container
    .features-container__item
      img(src='../assets/img/circle64-alarm.svg')
      span {{$t("features.items.1.header")}}
      | {{$t("features.items.1.content")}}
    .features-container__item
      img(src='../assets/img/circle64-share.svg')
      span {{$t("features.items.2.header")}}
      | {{$t("features.items.2.content")}}
    .features-container__item
      img(src='../assets/img/circle64-models.svg')
      span {{$t("features.items.3.header")}}
      | {{$t("features.items.3.content")}}



</template>

<style lang="stylus" scoped>
.features
    background: #14171D;
    padding 8.88888vh 10.27777vw
    .features__header
        @media screen and (min-width: 1000px) 
            font-size: 40px;
        @media screen and (max-width: 1000px) 
            font-size: 26px;
        max-width 550px
        // width 100%
        margin-bottom 55px
    .features-container
        width 100%
        display flex
        flex-flow row wrap
        justify-content space-between
        align-items center
        &__item
            font-family: 'TT Norms Regular', Arial;
            font-size: 16px;
            color: gray;
            height 217px
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            @media screen and (min-width: 1000px) 
                max-width 300px
            @media screen and (max-width: 1000px) 
                max-width 100%
            span
                font-family: 'TT Norms Medium', Arial;
                color: white;
                margin-top: 2vh;
                margin-bottom: 1.5vh;
                font-size: 20px;


    // .features
    //     // height: 64.666vh;
    //     background: #14171D;
    //     display: flex;
    //     flex-direction: column;
    //     align-items: flex-start;
    //     justify-content: center;
    //     div
    //         width: 100vw;
    //     .features__header
    //         margin-left: 8vw;
    //         font-size: 4.444vh;
    //         margin-bottom: 6vh;
    //         max-width 34.777vw
    //     .features-container

    //         display: flex;
    //         flex-flow: row wrap;
    //         align-items: center;
    //         justify-content: space-evenly;
    //         .features-container__item
    //             font-size: 2.2222vh;
    //             color: gray;
    //             max-width 300px
    //             display: flex;
    //             flex-direction: column;
    //             align-items: flex-start;
    //             justify-content: center;
    //             span
    //                 color: white;
    //                 margin-top: 2vh;
    //                 margin-bottom: 1.5vh;
    //                 font-size: 2.6666vh;
</style>  

