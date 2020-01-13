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
        .primary-btn START A PROJECT

    .about__title DREAMTEAM
    .about__title Partners
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
                span Stay in touch

            .primary-btn Try it for free
        img(src="../../assets/img/withphone.png", alt="withphone")

    .about__title ARQ FAMILY
    .about__fifeth-block
        .content-first
            span WE ARE ARQ
            |  and we are ready to <br/>create an awesome project for you
        .content-second Click this button, don't be shy


        .primary-btn START A PROJECT
        .about-llc © 2020 ARQ, LLC <br/> ALL RIGHTS RESERVED



    


</template>

<script>


export default {
  

}


</script>



<style lang="stylus" scoped>

.about
    z-index 10
    width 100%
    display flex
    flex-direction column
    justify-content flex-start
    align-items center
    padding-top 20px
    .about__title
        margin-top 80px
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
        display flex
        flex-direction row
        align-items flex-end
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
    .about__third-block
        width 80%
        display flex
        flex-direction row
        justify-content space-around

    .about__forth-block
        width 100%
        display flex
        flex-direction row
        justify-content space-between
        align-items flex-start
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
            span 
                color #4737D6
            .question-content 
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

        img 
            position relative
            right 0
            top 30px
            width 45%

    .about__fifeth-block
        padding 50px 0
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

</style>