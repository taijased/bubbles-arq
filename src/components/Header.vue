<template lang="pug">
    .header-main
        .navigation
            img.logo(src="../assets/arq-logo.svg")
    
</template>

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
        display flex
        flex-direction row
        align-items center
        justify-content center
        .logo
            width 110px
            height 80px

</style>    
