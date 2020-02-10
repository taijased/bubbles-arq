<template lang="pug">
    .header-main
        .navigation
            img.logo(v-if="!getMenuStatus", @click="goToIndex()", src="../assets/arq-logo.svg")
            img.logo(v-else-if="getContactsStatus", @click="goToIndex()", src="../assets/arq-logo_white.svg")
            div(v-else)
            .primary-link.center-fix(v-if="!getMenuStatus", @click="goToAbout()") About us
            .left-controls
                .primary-link.mobile-version(v-if="!getMenuStatus", @click="goToStayintouch()") Want an awesome project?
                #burger(@click="actionWithBurger()", :class="{ 'open': getMenuStatus }")
                    span
                    span
                    span

    
</template>


<script>

import { mapGetters, mapActions} from 'vuex';


export default {
    computed: {
        ...mapGetters({
            getMenuStatus: "header/getMenuStatus",
            getContactsStatus: "header/getContactsStatus",
        }),
    },
    methods: {
        ...mapActions({
            openMenu: "header/openMenu",
        }),
        actionWithBurger() {
            if (this.getMenuStatus) {
                this.$router.go(-1)
            } else {
                this.$router.push('/menu')
                this.openMenu()
            }
        },
        goToStayintouch() {
        //   window.open("https://editor.arq.su", "_blank");
           this.$router.push('/stayintouch')
        },
        goToIndex() {
            this.$router.push('/')
        },
        goToAbout() {
            this.$router.push('/about')
        }
    }
}


</script>


<style lang="stylus" scoped>
.header-main
    // position fixed
    // top 0
    // left 0
    // right 0
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


        #burger {
            z-index 10
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
            background white
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
            background white
        }
</style>    
