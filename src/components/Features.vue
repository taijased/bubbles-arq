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
        margin 8.88888vh 0
        .features__header
            @media screen and (min-width: $w-l) 
                margin-bottom 55px
                font-size: 40px;
            @media screen and (max-width: $w-l) 
                font-size: 26px;
                margin-left 9vw
            max-width 550px
            
        .features-container
            width 100%
            display flex
            flex-flow row wrap
            justify-content space-between
            align-items center
            &__item
                margin-left 9vw
                font-family: 'TT Norms Regular';
                font-size: 16px;
                color: gray;
                height 217px
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                @media screen and (min-width: $w-l) 
                    max-width 300px
                    &:first-child
                        margin-left 0
                @media screen and (max-width: $w-l) 
                    max-width 100%
                
                span
                    font-family: 'TT Norms Medium';
                    color: white;
                    margin-top: 2vh;
                    margin-bottom: 1.5vh;
                    font-size: 20px;


</style>  

