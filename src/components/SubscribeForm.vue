<template lang="pug">
    form(autocomplete="off")
        .statue-email
            input.email-text(id="email", v-model="email", type="email", name="email", :placeholder='$t("statue.leaveemail")', :class="{ error: emailError }")
            .statue-email__sendbtn(@click="validateForm()")
                .email-btn__arrow
                    .email-btn__gal

</template>

<script>

import ApiTrello from '../api/ApiTrello';
import { mapGetters, mapActions} from 'vuex';
import gsap from 'gsap'

export default {
    data() {
        return {
            loading: true,
            email: null,
            emailError: null,
            imageUrl: '../assets/img/arrow-right-24px.svg'
        }
    },
    watch: {
        email() {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
        },
    },

    methods: {
        validateForm() {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            this.emailError  = !re.test(this.email);
            if(!this.emailError && this.emailError !== null) {
                
                gsap.to(".statue-email__sendbtn", {duration: 0.9, width: "101.5%", borderRadius: "5px", cursor:"auto"});
                gsap.to(".statue-email__sendbtn:hover", {duration: 0.9, backgroundColor: "#4737D6"});
                gsap.to(".email-text", {delay: 0.89, padding: 0, borderRadius: "5px"});
                // gsap.to(".email-btn__arrow", {duration: 0.4, opacity: 0});
                gsap.to(".email-btn__gal", {delay: 0.4, duration: 0.5, opacity: 0});
            //    / gsap.to(imageUrl, {delay: 0.89, backgroundImage:"url('../assets/img/arrow-right-24px.svg')"});
                

                // gsap.to(".statue-email__sendbtn", {delay: 0.5, position:"absolute", width: "350px", borderRadius: "5px"});



                this.loading = true
                const idBoard = "5da06c29c9fb3747328efc66"
                const idList = "5da06c347ffb4d2ed8ffad98"

                var today = new Date();
                var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + 
                today.getSeconds();
                var dateTime = date+' '+time;

                let data = {
                    "name":`${this.email}`,
                    // "desc": "From: https://arq.su/viewerlite",
                    "desc": "From "+`${window.location}` + "\n" + dateTime,
                    "idBoard": idBoard,
                    "idList": idList,
                }

                new Promise((resolve, reject) => {
                    ApiTrello.post('', data)
                        .then(response => {
                            this.loading = false
                            // this.$router.push('/')
                            // gsap.to(".email-text", {duration: 0.4, width: 0, padding: 0});
                            resolve(response)
                        })
                        .catch(error => {
                            this.loading = false
                            // this.$router.push('/')
                            // gsap.to(".email-text", {duration: 0.4, width: 0, padding: 0});
                            // gsap.to(".statue-email__sendbtn", {duration: 0.5, position:"absolute", width: "350px", borderRadius: "5px"});
                            reject(error)
                        })
                })
                
            }
        }
    },
}

</script>

<style lang="stylus" scoped>
form
    // width 100%
    display flex
    flex-direction column
    justify-content center
    align-items center
    
    .statue-email
        // min-width 300px
        position relative
        @media screen and (min-width: 1219px) 
            width: 350px;
        @media screen and (max-width: 1219px) 
            width: 250px;
        display: flex;
        background: #202328;
        .email-text 
            font-family 'TT Norms Regular'
            color: #A6A6A6;
            background: #202328;
            font-size: 17px;
            height: 48px;
            padding-left: 15px;
            border-radius: 5px 0px 0px 5px;
            width 90%
        .statue-email__sendbtn
            position absolute
            right -3px
            cursor pointer
            width: 48px;
            height: 48px;
            background-color: #4737D6;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            border-radius: 0px 5px 5px 0px;
            &:hover
                transition .3s
                background #6C5FDE
                .email-btn__arrow
                    .email-btn__gal
                        transition .3s
                        background-color #6C5FDE
            .email-btn__arrow
                position relative
                height 26px
                width 26px
                background-image url('../assets/img/gal_ochka.svg')
                background-size 75%
                background-position center
                background-repeat: no-repeat
                .email-btn__gal
                    position absolute
                    height 100%
                    width 100%
                    background-color: #4737D6;
                    background-image url('../assets/img/arrow-right-24px.svg')
                    background-position center
                    background-repeat: no-repeat
                    background-size 110%

        .error
            color #F83902
</style>

