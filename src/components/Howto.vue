<template lang="pug">
.howto
  .howto-container
    .howto-container__texts
      div КАК ЭТО РАБОТАЕТ
      div
        | Создай AR в 3 простых шага
      div
        | Для просмотра проекта необходимо импортировать файл в ARQ Viewer. Наше приложение умеет синхронизироваться со всеми популярными облачными хранилищами.
    .howto-container__btns
      div
        img(src='../assets/img/date-range-24px.svg')
        |                         Импортируй файл
      div
        img(src='../assets/img/edit-24px.svg')
        |                         Открой проект
      div
        img(src='../assets/img/person-add-24px.svg')
        |                         Поделись проектом
  .howto-images
    img(src='../assets/img/howto-files.svg')
    img(src='../assets/img/howto-projects.svg')


</template>

<style lang="stylus" scoped>
    .howto
        padding 7.7777vh 9vw 0 9vw
        @media screen and (max-width: 1000px) 
                padding 0 10.27777vw 0 10.27777vw
        // height: 75.1111vh;
        background: #14171D;
        display: flex;
        flex-flow: row wrap;
        align-items: flex-start;
        justify-content: space-between;
        &-container
            // width: 33vw;
            // height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            margin-bottom 4vh
            &__texts
                margin-left: 19px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-end;
                div:nth-child(1)
                    font-family: 'TT Norms Regular', Arial;
                    font-size: 12px;
                    margin-bottom: 1.33vh;
                div:nth-child(2)
                    font-size: 36px;
                    margin-bottom: 2.444vh;
                    max-width 240px
                div:nth-child(3)
                    font-family: 'TT Norms Regular', Arial;
                    font-size: 16px;
                    max-width 450px
                    color: gray;
            .howto-container__btns
                div
                    font-family: 'TT Norms Regular', Arial;
                    font-size: 16px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    margin-top: 1.3vh;
                    &:first-child
                        margin-top: 2.8888vh;
                        width: 288px;
                        height 48px
                        background: #4737D6;
                        border-radius: 5px;
                    img 
                        height: 24px;
                        margin: 12px 12px 12px 16px;
        .howto-images
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: flex-start;
            img 
                &:first-child
                    
                    position: relative;
                    z-index: 10;
                    @media screen and (min-width: 1000px) 
                        height: 490px;
                    @media screen and (max-width: 1000px) 
                        height: 320px;
                &:last-child
                    
                    position: relative;
                    z-index: 0;
                    @media screen and (min-width: 1000px) 
                        left: -110px;
                        height: 440px;
                    @media screen and (max-width: 1000px) 
                        left: -110px;
                        height: 255px;

</style>  


// @media screen and (min-width: 1000px) 
//                     font-size: 40px;
//                     max-width: 600px;
//                 @media screen and (max-width: 1000px) 
//                     font-size: 26px;
//                     max-width: 311px;