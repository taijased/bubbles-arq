<template lang="pug">
    form(autocomplete="off")
        .form__label WHAT’S YOUR NAME?
        input(id="name", 
            v-model="name", 
            type="text", 
            name="name", 
            placeholder="WRITE HERE",
            :class="{ error: nameError }")
        .form__label E-MAIL
        input(id="email", v-model="email", type="email", name="email", placeholder="WRITE HERE", :class="{ error: emailError }")
        .form__label PHONE
        input(id="phone", v-mask="'+7 (999) 999 99 99'", v-model="phone", type="tel", name="phone", placeholder="WRITE HERE", :class="{ error: phoneError }")
        .form__label QUESTION? PROJECT?
        input(id="question", v-model="question", type="text", name="question", placeholder="WRITE HERE")
        .white-btn(@click="validateForm()") Send
        .personal-content By clicking “SEND” button I agree <br/>to the processing of personal data

</template>


<script>

import ApiTrello from '../api/ApiTrello';
import { mapGetters, mapActions} from 'vuex';

export default {
    data() {
        return {
            loading: true,
            name: null,
            nameError: null,
            email: null,
            emailError: null,
            phone: null,
            phoneError: null,
            question: null,
        }
    },
    watch: {
        name() {
            this.nameError = this.isNotEmpty(this.name)
        },
        email() {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            this.emailError  = !re.test(this.email);
        },

        phone() {
            let re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
            this.phoneError = !re.test(this.phone);
        },
    },
    computed: {
        ...mapGetters({
            getContactsStatus: "header/getContactsStatus",
        })
    },
    methods: {
        ...mapActions({
            updateBottomContacts: "header/updateBottomContacts",
        }),
        isNotEmpty(value) {
            return value.length > 6 ? false : true
        },
        validateForm() {
            console.log(!this.phoneError && !this.emailError && !this.nameError && this.phoneError !== null && this.emailError !== null && this.nameError !== null);
            if(!this.phoneError && !this.emailError && !this.nameError && this.phoneError !== null && this.emailError !== null && this.nameError !== null) {
                this.loading = true
                const idBoard = "5da06c29c9fb3747328efc66"
                const idList = "5da06c347ffb4d2ed8ffad98"
                let description = `Имя: ${this.name}\n Телефон: ${this.phone}\n E-mail: ${this.email}\n Question: ${this.question}`;
                let data = {
                    "name":`${this.name}`,
                    "desc": description,
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
    created() {
        this.$nextTick(() => {
            if(this.getContactsStatus) {
                this.updateBottomContacts()
            }   
            // document.body.style.overflow = "vhiddenz"
        })
    },
    beforeDestroy() {
        this.updateBottomContacts()
        // document.body.style.overflow = "hidden"

    },
}

</script>

<style lang="stylus" scoped>
form
    width 100%
    height 100%
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