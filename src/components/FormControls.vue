<template lang="pug">
    form(autocomplete="off")
        .form__label WHAT’S YOUR NAME?
        input(id="name", v-model="name", type="text", name="name", placeholder="WRITE HERE")
        .form__label E-MAIL
        input(id="email", v-model="name", type="text", name="email", placeholder="WRITE HERE")
        .form__label PHONE
        input(id="phone", v-model="name", type="text", name="phone", placeholder="WRITE HERE")
        .form__label QUESTION? PROJECT?
        input(id="question", v-model="name", type="text", name="question", placeholder="WRITE HERE")
        .white-btn Send
        .personal-content By clicking “SEND” button I agree <br/>to the processing of personal data

</template>


<script>


import { mapGetters, mapActions} from 'vuex';

export default {
    data() {
        return {
            name: null,
            email: null,
            phone: null,
            question: null,
        }
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

    }
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

    // @media screen and (min-width: 1000px) 
input::-webkit-input-placeholder {
    color: #FFFFFF;
    opacity: 0.3;
	text-decoration: underline;
    background none

}
</style>