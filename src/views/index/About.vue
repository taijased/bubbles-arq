<template lang="pug">
  .about
    .about__title WE ARE ARQ
    .about__first-block
        .first-block__left
            p
                span ARQ Family
                |  is an AR Studio implementing it’s own projects and projects of it’s partners.
            p 
                | We love to be an integral part of the creative process, and we fond of doing incredible things using augmented reality.
                span  With all our work, we hope to empower users
                | to bring something different to their daily lives.
        .primary-btn(@click="goStayintouch()") START A PROJECT

    .about__title DREAMTEAM

    .about__second-block
        DreamTeam.dreamteam-desktop
    DreamTeamMobile.dreamteam-mobile
    .about__title Partnerss
    .about__third-block
        img(src="../../assets/img/mincult.svg", alt="mincult")
        img(src="../../assets/img/bayer.svg", alt="bayer")
        img(src="../../assets/img/sanofi.svg", alt="sanofi")
        img(src="../../assets/img/w2w.svg", alt="w2w")
        img(src="../../assets/img/neurosim.svg", alt="neurosim")

    .about__title ARQ Editor
    .about__forth-block
        .left-content
            p 
                | AUGMENTED REALITY 
                span is easier than you think.
            p 
                | ARQ Editor
                span  is a simple tool to create your own AR applications.
            p 
                span Use
                |  ARQ Viewer
                span  to view your projects.
            .question-content 
                | Have a questions? <br/>
                span(@click="goStayintouch()") Stay in touch
            .macbook-small
            .primary-btn(@click="goToEditor()") Try it for free
        img(src="../../assets/img/withphone.png", alt="withphone")

    .about__title ARQ FAMILY
    .about__fifeth-block
        .content-first
            span WE ARE ARQ
            |  and we are ready to <br/>create an awesome project for you
        .content-second Click this button, don't be shy
        
        .primary-btn(@click="goStayintouch()") START A PROJECT
        .about-llc © 2020 ARQ, LLC <br/> ALL RIGHTS RESERVED

</template>

<script>
import { mapGetters, mapActions} from 'vuex';
import DreamTeam from '../../components/DreamTeam';
import DreamTeamMobile from '../../components/DreamTeamMobile';

export default {
    computed: {
        ...mapGetters({
            getMenuStatus: "header/getMenuStatus",
        }),
    },
    methods: {
        ...mapActions({
            openMenu: "header/openMenu",
        }),
        goToAbout() {
            this.$router.push('/about')
        },
        goToEditor() {
          window.open("https://editor.arq.su", "_blank");
        },
        goStayintouch() {
            this.$router.push('/stayintouch')
        }
    },
    created() {
        this.$nextTick(() => {
            document.body.style.overflow = "visible"
            if (this.getMenuStatus) {
                this.openMenu()
            }
        })
    },
    beforeDestroy() {
        document.body.style.overflow = "hidden"

    },
    components: {
        DreamTeam,
        DreamTeamMobile
    }
}


</script>



<style lang="stylus" scoped>

.about
    overflow hidden
    z-index 10
    width 100%
    .about__title
        margin-bottom 50px
        font-family: 'TT Norms Medium';
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 59px;
        /* identical to box height */
        text-align: center;
        text-transform: uppercase;
        color: #4737D6;
    .about__first-block
        width 100%
        display flex
        flex-flow row wrap
        align-items flex-end
        justify-content space-around
        margin-bottom 80px
        .first-block__left
            width 600px
              

            font-family: 'TT Norms Medium'; 
            font-style: normal;
            font-weight: 500;
            font-size: 36px;
            line-height: 44px;
            color: #F83902;
            span
                color #4737D6
            p
                margin-bottom 0px
    @media screen and (max-width: 1000px) 
        .about__first-block
            width 100%
            justify-content center
            .first-block__left
                width 80%
                margin-bottom 20px


    .about__second-block

        width 100%
        display flex
        flex-direction column
        align-items center
        justify-content center

    .about__third-block
        width 100%
        margin-top -20px
        @media screen and (max-width: 1000px) 
            padding 0
        display flex
        flex-flow row wrap
        justify-content space-around
        align-items center
        margin-bottom 80px
        img 
            margin 20px 10px


    .about__forth-block
        width 100%
        display flex
        flex-direction row
        justify-content space-between
        align-items flex-start
        margin-bottom 80px

        .left-content
            width 520px
            position relative
            left 20vw
            font-family: 'TT Norms Medium'; 
            font-style: normal;
            font-weight: 500;
            font-size: 36px;
            line-height: 44px;
            color: #F83902;
            .macbook-small
                display none
            span 
                color #4737D6
            .question-content 
                width 100%
                font-family: 'TT Norms Medium'; 
                font-style: normal;
                font-weight: 500;
                font-size: 30px;
                line-height: 35px;
                color: #000000;
                margin-bottom 42px
                span 
                    font-style: normal;
                    font-weight: 500;
                    font-size: 30px;
                    line-height: 35px;
                    text-decoration-line: underline;
                    color: #F83902;
                    &:hover
                        cursor pointer

        img 
            position relative
            right 0
            top 30px
            width 45%
    @media screen and (max-width: 1000px) 
        .about__forth-block
            justify-content center

            .left-content

                width 80%
                left 0
                display flex
                flex-direction column
                justify-content center
                align-items center
                .macbook-small
                    display block
                    width 100%
                    height 210px
                    background url('../../assets/img/mb_mobile.jpg') no-repeat center
                    margin-bottom 20px
                    z-index -1
                p 
                    width 100%
                    text-align left
                .question-content 
                    display flex
                    flex-direction column
                    justify-content center
                    align-items center
            img
                display none


    .about__fifeth-block
        padding-bottom 50px
        display flex
        flex-direction column
        justify-content center
        align-items center
        .content-first
            font-family: 'TT Norms Medium'; 
            font-style: normal;
            font-weight: 500;
            font-size: 36px;
            line-height: 44px;
            text-align: center;
            color: #F83902;
        span 
            color: #4737D6;
            &:hover
                cursor pointer

        .content-second 
            font-family: 'TT Norms Medium'; 
            font-style: normal;
            font-weight: 600;
            font-size: 26px;
            line-height: 32px;
            /* identical to box height */
            text-align: center;
            color: #F83902;
            margin-top 40px
            margin-bottom 22px

    .about-llc 
        margin-top 42px
        font-family: 'TT Norms Medium'; 
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        color: #000000;
@media screen and (max-width: 1000px) 

    .dreamteam-mobile
        display: block;
    .dreamteam-desktop
        display none

@media screen and (min-width: 1000px) 
    .dreamteam-mobile
        display none 
    .dreamteam-desktop
        display block
</style>