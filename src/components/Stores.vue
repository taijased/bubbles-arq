<template lang="pug">
    .stores
        .appstore
            img(src='../assets/img/stores/app-store-1.svg')
            img(src='../assets/img/stores/app-store-2.svg')
        .gplay
            img(src='../assets/img/stores/play-market-1.svg')
            img(src='../assets/img/stores/play-market-2.svg')
</template>


<style lang="stylus" scoped>
    .stores
        min-width 297px
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        div
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            &:hover
                cursor: pointer;
                img
                    &:last-child
                        transition all .3s
                        opacity 1
                    &:first-child
                        opacity 0
            img 
                width 144px
                height 48px
                &:last-child
                    position absolute
                    opacity 0
                    // &:hover
                    //     transition all .3s
                    //     opacity 1
                    //     cursor: pointer;
                
                    
                    
</style>  

  