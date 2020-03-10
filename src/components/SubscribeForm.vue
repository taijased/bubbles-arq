<template lang="pug">
    form(autocomplete="off")
        .form__label E-MAIL
        input(id="email", v-model="email", type="email", name="email", placeholder="WRITE HERE", :class="{ error: emailError }")
        .white-btn(@click="validateForm()") Send
</template>


<script>

import ApiTrello from '../api/ApiTrello';
import { mapGetters, mapActions} from 'vuex';

export default {
    data() {
        return {
            loading: true,
            email: null,
            emailError: null,
        }
    },
    watch: {
        email() {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            this.emailError  = !re.test(this.email);
        },
    },

    methods: {
        validateForm() {
            if(!this.emailError && this.emailError !== null) {
                this.loading = true
                const idBoard = "5da06c29c9fb3747328efc66"
                const idList = "5da06c347ffb4d2ed8ffad98"
                let data = {
                    "name":`${this.email}`,
                    "desc": "From: https://arq.su/viewerlite",
                    "idBoard": idBoard,
                    "idList": idList,
                }
                new Promise((resolve, reject) => {
                    ApiTrello.post('', data)
                        .then(response => {
                            this.loading = false
                            this.$router.push('/')
                            resolve(response)
                        })
                        .catch(error => {
                            this.loading = false
                            this.$router.push('/')
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
    margin-top 50px
    width 100%
    display flex
    flex-direction column
    justify-content center
    align-items center
    .form__label
        font-family 'TT Norms Medium'
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 42px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
    input 
        width 100%
        font-family 'TT Norms Medium'
        font-style: normal;
        font-weight: bold;
        font-size: 26px;
        line-height: 31px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
        mix-blend-mode: normal;
        margin-bottom 40px
        margin-top 21px
    .error
        color #F83902


    .personal-content
        font-family 'TT Norms Medium'
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        color: #FFFFFF;
    .white-btn 
        margin-bottom 20px

    @media screen and (max-width: 1000px) 
        .form__label
            font-size: 24px;
            line-height: 28px;
        input 
            margin-bottom 40px
            margin-top 12px

    // @media screen and (min-width: 1000px) 
input::-webkit-input-placeholder {
    color: #FFFFFF;
    opacity: 0.3;
	text-decoration: underline;
    background none

}
</style>