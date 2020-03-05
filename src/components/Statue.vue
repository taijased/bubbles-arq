<template lang="pug">
.statue
  .statue__left
    img(src='../assets/img/statue-ui.svg')
  .statue-right
    .statue-right__overheader
      | ДОПОЛНЕННАЯ РЕАЛЬНОСТЬ ДЛЯ ВСЕХ
      span РЕЛИЗ СКОРО
    .statue-right__header
      div ARQ Editor простой 
      div редактор дополненной 
      div реальности
    .statue-right-table
      .statue-right-table-column
        .statue-right-table-column__item
          img(src='../assets/img/circle24-check.svg')
          div
            span
              | Редактор
            div Простой редактор сцен и
            div связей между ними
        .statue-right-table-column__item
          img(src='../assets/img/circle24-check.svg')
          div
            span
              | Работа с ассетами
            div От положения в пространстве до смены
            div материалов модели
        .statue-right-table-column__item
          img(src='../assets/img/circle24-check.svg')
          div
            span
              | Машина состояний
            div Создание взаимодействий со сценой,
            div от тапа до тройных свайпов
      .statue-right-table-column
        .statue-right-table-column__item
          img(src='../assets/img/circle24-check.svg')
          div
            span
              | Работа с анимацией
            div Поддержка и простой запуск 
            div анимаций вашей 3D модели
        .statue-right-table-column__item
          img(src='../assets/img/circle24-check.svg')
          div
            span
              | Редактор
            div Display potential benefits
            div Bringing out the best in your schedule
        .statue-right-table-column__item
          img(src='../assets/img/circle24-check.svg')
          div
            span
              | Групповая работа
            div Делитесь вашими проектами и 
            div работайте в паре
    .statue-email
      div Получи доступ в числе первых
      div
        input(type='email', value='Оставь свой E-mail')
        .statue-email-sendbtn
          img(src='../assets/img/arrow-right-24px.svg')

</template>

<style lang="stylus" scoped>
    .statue
        height: 77.8888vh;
        background: #14171D;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        &__left
            background-color: #4737D6;
            width: 45.625vw;
            height: 100%;
            display: flex;
            flex-flow: column wrap;
            align-items: flex-start;
            justify-content: center;
            img 
                width: 90%;
        .statue-right
            height 100%
            width: 54.375vw;
            margin-left: 6vw;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            &__overheader
                font-size: 1.3333vh;
                margin-bottom: 1.33vh;
                span 
                    color:#D00202;
                    position: relative;
                    top: -10px;
            .statue-right__header
                font-size: 4.4444vh;
                margin-bottom: 2.444vh;
            .statue-right-table
                display: flex;
                flex-direction: row ;
                align-items: flex-start;
                justify-content: center;
                :last-child
                        // margin-left: 6vw;
                .statue-right-table-column__item
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: flex-start;
                    width: 25vw;
                    margin-bottom: 3.666vh;
                    div
                        color: #A6A6A6;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: center;
                        div
                            color: #A6A6A6;
                        span
                            margin-bottom: 1vh;
                    img 
                        margin-top: 12px;
                        margin-right: 0.8vw;
            .statue-email
                width: 50vw;
                margin-top: 3vh;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                div
                    width 100%
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 1.777vh;
                    input 
                        color: #A6A6A6;
                        background-color: #171A20;
                        border: #14171D none 0px;
                        font-size: 1.777vh;
                        height: 48px;
                        width: 310px;
                        padding-left: 15px;
                .statue-email-sendbtn
                    width: 48px;
                    height: 48px;
                    background-color: #4737D6;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;

                    border-radius: 0px 5px 5px 0px;


</style>  

  
