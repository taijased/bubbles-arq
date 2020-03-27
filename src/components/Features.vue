<template lang="pug">
.feat
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
.feat
    
    background: #14171D;
    display flex
    flex-flow row 
    justify-content center
    align-items center
    .features
        width 100%
        max-width $w-xxl
        padding 80px 148px
        @media screen and (min-width: $w-s) 
            padding 8.888vh 10.277vw
        @media screen and (max-width: $w-s) 
            padding 42px 32px
        .features__header
            font-size: 40px;
            max-width 550px
            @media screen and (min-width: $w-l) 
                margin-bottom 55px
            @media screen and (max-width: $w-s) 
                font-size: 26px;
                margin-bottom 42px
        .features-container
            // width 100%
            display flex
            flex-flow row wrap
            justify-content space-between
            align-items center
            &__item
                // margin-left 100px
                font-family: 'TT Norms Regular';
                font-size: 16px;
                color: gray;
                height 217px
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                @media screen and (min-width: $w-l) 
                    width 21vw
                    max-width 330px
                @media screen and (max-width: $w-l) 
                    max-width 100%
                
                span
                    font-family: 'TT Norms Medium';
                    color: white;
                    margin-top: 2vh;
                    margin-bottom: 1.5vh;
                    font-size: 20px;


</style>  

