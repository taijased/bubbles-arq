<template lang="pug">
    form(autocomplete="off")
        .statue-email
            input(id="email", v-model="email", type="email", name="email", :placeholder='$t("statue.leaveemail")', :class="{ error: emailError }")
            .statue-email__sendbtn(@click="validateForm()")
                img(src='../assets/img/arrow-right-24px.svg')
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
    // width 100%
    display flex
    flex-direction column
    justify-content center
    align-items center
    
    .statue-email
        min-width 300px
        display: flex;
        background: #202328;
        input 
            font-family 'TT Norms Regular'
            color: #A6A6A6;
            background: #202328;
            font-size: 17px;
            height: 48px;
            padding-left: 15px;
            border-radius: 5px 0px 0px 5px;
            @media screen and (min-width: 1219px) 
                width: 310px;
            @media screen and (max-width: 1219px) 
                width: 250px;
        .statue-email__sendbtn
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
        .error
            color #F83902
</style>

