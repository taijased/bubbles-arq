<template lang="pug">
    .navbar(id="navbar")
        .navbar__logo
            img(src="../assets/arq-logo_white.svg")
        .navbar__buttons
            div Why faces
            div Features
            div Resources
            div Pricing
            div Get Started
       
</template>

<script>
export default {
    created(){
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
          if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
          } else {
            document.getElementById("navbar").style.top = "-8.88888vh";
          }
          prevScrollpos = currentScrollPos;
        }
    }
}
</script>

<style lang="stylus" scoped>
.navbar
    z-index: 100;
    font-size: 16px;
    width 100vw;
    position: fixed;
    height: 8.88888vh;
    top: 0vh;
    /* background-color:rgba(​ 71, ​ 55, ​ 214, 0.7); */
    background-color:rgba(70,55,214,0.8);
    /* color:#14171D; */
    border-width: 1px;
    color white
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s;
    @media screen and (min-width: 1000px) 
        display: flex;
    @media screen and (max-width: 1000px) 
        display: none;
    &__logo
        img 
            width: 55px;
            height 30px;
            margin-left: 151px;

    &__buttons
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        margin-right: 10.4816111%;
        height: 100%;
        div
            margin-left: 32px;
            cursor: pointer;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            &:hover
                color: #A6A6A6;
                border-color: #A6A6A6;
            &:last-child
                height: 60%;
                padding: 0px 24px;
                border: 1px solid white;
                border-radius: 5px;


</style>    

