<template lang="pug">
.home
  div
    div Создай дополненную
    div реальность за пару минут
    .home__stores
      img(src='../assets/img/AppStore.svg')
      img(src='../assets/img/GooglePlay.svg')
  .home__images
    img(src='../assets/img/home1.svg')
    img(src='../assets/img/home2.svg')
    img(src='../assets/img/home3.svg')

</template>

<style lang="stylus" scoped>
    .home

        font-size: 5.33vh;
        background: #4737D6;
        height 100vh
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        div
            &:first-child
                width: 46.666vw;
                text-align: center;
            .home__stores
                // width 20
                margin-top: 2.2222vh;
                margin-bottom: 10.555vh;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                img 
                    &:first-child
                        margin-right: 0.9vw;
                    &:hover
                        cursor: pointer;
        .home__images
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: center;
            img
                height: 51.111vh;
                &:first-child
                    position: relative;
                    left: 3vw;
                &:last-child
                    position: relative;
                    left: -3vw;
                &:nth-child(2)
                    height: 59.111vh;
                    z-index: 10;
</style>  

  