<template lang="pug">
    .header-main
        .navigation
            img.logo(src="../assets/arq-logo.svg")
            .primary-link About us
            .left-controls
                .primary-link Want an awesome project?
                #burger(@click="openBurger()", :class="{ 'open': burgerStatus }")
                    span
                    span
                    span

    
</template>


<script>



export default {
    data() {
        return {
            burgerStatus: false
        }
    },
    methods: {
        openBurger() {
            this.burgerStatus = !this.burgerStatus
        }
    }
}


</script>


<style lang="stylus" scoped>
.header-main
    position fixed
    top 0
    left 0
    right 0
    z-index 10
    display flex
    flex-direction row
    align-items center
    justify-content space-between
    height $header-height
    // background: #FFFFFF;
    padding 0 5vw
    // box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    .navigation
        height @height
        width 100%
        display flex
        flex-direction row
        align-items center
        justify-content space-between
        .logo
            width 110px
            height 80px
        .left-controls
            display flex
            flex-direction row
            align-items center
            justify-content space-between

        #burger {
            margin-left 30px
            width: 30px;
            height: 25px;
            position: relative;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: .5s ease-in-out;
            -moz-transition: .5s ease-in-out;
            -o-transition: .5s ease-in-out;
            transition: .5s ease-in-out;
            cursor: pointer;
            span {
                display: block;
                position: absolute;
                height: 2px;
                width: 100%;
                background: #4737D6;
                border-radius: 9px;
                opacity: 1;
                left: 0;
                -webkit-transform: rotate(0deg);
                -moz-transform: rotate(0deg);
                -o-transform: rotate(0deg);
                transform: rotate(0deg);
                -webkit-transition: .25s ease-in-out;
                -moz-transition: .25s ease-in-out;
                -o-transition: .25s ease-in-out;
                transition: .25s ease-in-out;
                &:nth-child(1) {
                    top: 0px;

                }
                &:nth-child(2) {
                    top: 9px;   
                }
                &:nth-child(3) {
                    top: 18px;

                }
            }
        }

        #burger.open span:nth-child(1) {
            top: 9px;
            -webkit-transform: rotate(135deg);
            -moz-transform: rotate(135deg);
            -o-transform: rotate(135deg);
            transform: rotate(135deg);
        }

        #burger.open span:nth-child(2) {
            opacity: 0;
            left: -30px;
        }

        #burger.open span:nth-child(3) {
            top: 9px;
            -webkit-transform: rotate(-135deg);
            -moz-transform: rotate(-135deg);
            -o-transform: rotate(-135deg);
            transform: rotate(-135deg);
        }


</style>    
