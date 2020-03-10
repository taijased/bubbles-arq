<template lang="pug">
    .viewer-lite
        .viewer-lite__header
            .navigation
                img.logo( @click="$router.push('/')", src="../assets/arq-logo_white.svg")
                img( @click="$router.push('/')", src="../assets/close.png", width="50px", height="50px")

        .viewer-lite__title Create augmented reality in a couple of minutes
        SubscribeForm
        .gradient-circle
        .viewer-lite__phones
            img(src="../assets/main-phones.png", alt="AR")
</template>


<script>

import { mapActions} from 'vuex';
import SubscribeForm from '../components/SubscribeForm';

export default {
    methods: {
        ...mapActions({
            updateParticle: "header/updateParticle",
        }),
    },
    created() {
        this.updateParticle(false)
    },
    components: {
        SubscribeForm
    }
}

</script>

<style lang="stylus" scoped>
.viewer-lite 
    width 100vw
    height 100vh
    overflow hidden
    background #4737D6
    display flex
    flex-direction column
    justify-content center
    align-items center
    &__phones
        z-index 2
        position absolute
        bottom -350px
        @media screen and (max-width: 1000px) 
            bottom -100px
        img 
            height 700px
        @media screen and (max-width: 1000px) 
            img 
                height 300px
    &__title
        margin-top -200px
        max-width 672px
        font-family: 'TT Norms Medium';
        font-style: normal;
        font-weight: 500;
        font-size: 48px;
        line-height: 60px;
        /* or 125% */
        text-align: center;
        color: #FFFFFF;
        @media screen and (max-width: 1000px) 
            font-size: 38px;

    .gradient-circle
        z-index 1
        position absolute
        bottom -75vw
        left 0
        right 0
        width 100vw
        height 100vw
        @media screen and (max-width: 1000px) 
            left 50%
            margin-left -250px
            bottom -200px
            width 500px
            height 500px
            border-radius 250px

        border-radius 50vw
        background linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.0001) 47%);
        mix-blend-mode: normal;
        opacity: 0.1;


.viewer-lite__header
    position absolute
    top 0
    z-index 2
    width 100vw
    .navigation
        height @height
        // width 100%
        margin 0 5vh
        margin-top 2.5vh
        display flex
        flex-direction row
        align-items center
        justify-content space-between
        .logo
            width 110px
            height 80px
            z-index 10
            transition opacity .25s
            &:hover
                cursor pointer
                opacity 0.7
                transition opacity .25s
        .center-fix
            position relative
            left 0
            right 0
            @media screen and (min-width: 1000px) 
                margin-left: 150px;
            @media screen and (max-width: 1000px) 
                margin: 0;

        .left-controls
            display flex
            flex-direction row
            align-items center
            justify-content space-between
            @media screen and (min-width: 1000px) 
                .mobile-version
                    display block
            @media screen and (max-width: 1000px) 
                .mobile-version
                    display none
</style>