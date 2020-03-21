<template lang="pug">
.downloads
  .downloads-blue-rect
    //- .downloads-blue-rect__background
    //-     img(src='../assets/img/vector.svg')
    .downloads-blue-rect-left
        div {{$t("downloads.overheader")}}
        div {{$t("downloads.header")}}
        //- .downloads__hint {{$t("home.hint")}}
        Stores
    .downloads__rights 2020 © ARQ, LLC. All rights reserved. Built with ❤️ in Russia, Kazan
    .downloads__images
        img(src='../assets/img/home3.svg')
        img(src='../assets/img/home2.svg')

</template>

<script>
import Stores from '../components/Stores';
export default {
    components: {
        Stores
    }
}
</script>

<style lang="stylus" scoped>
    .downloads
        font-family: 'TT Norms Medium';
        background: #14171D;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position relative
        z-index 10
        height 100vh
        .downloads-blue-rect
            width 100vw
            height 100%
            background-image url('../assets/img/wood.svg')
            background-size: contain
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            background-color: #4737D6;
            .downloads-blue-rect-left
                margin-top 3vh
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                div:nth-child(1)
                    font-size: 16px;
                    margin-bottom: 1vh;
                div:nth-child(2)
                    margin-bottom: 2vh;
                    text-align center
                    max-width 400px
                    @media screen and (min-width: $w-l) 
                        font-size: 32px;
                    @media screen and (max-width: $w-l) 
                        font-size: 26px;
                // .downloads__hint
                //     font-family: 'TT Norms Regular';
                //     color rgba(255, 255, 255, 0.7)
            .downloads__rights
                text-align center
                color rgba(255, 255, 255, 0.7)
                max-width 290px
            .downloads__images
                display: flex;
                flex-direction: row;
                align-items: flex-end;
                justify-content: center;
                // margin-top 30px
                img
                    position relative
                    @media screen and (min-width: $w-l) 
                        height 65vh
                        &:first-child
                            height 58vh
                            left 5vw
                    @media screen and (max-width: $w-l) 
                        height 65vh
                        &:first-child
                            height 58vh
                            left 20vw
                    

                
</style>  
