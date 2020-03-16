<template lang="pug">
.statue
  .statue__left
    img(src='../assets/img/statue-ui.svg')
  .statue-right
    .statue-right__overheader
      | {{$t("statue.overheader")}}
      span {{$t("statue.ooverheader")}}
    .statue-right__header
      div {{$t("statue.header")}}
    .statue-right-table
      .statue-right-table-column
        .statue-right-table-column__item
          img(src='../assets/img/circle24-check.svg')
          div
            span
              | {{$t("statue.table.1.header")}}
            div {{$t("statue.table.1.content")}}
        .statue-right-table-column__item
          img(src='../assets/img/circle24-check.svg')
          div
            span
              | {{$t("statue.table.2.header")}}
            div {{$t("statue.table.2.content")}}
        .statue-right-table-column__item
          img(src='../assets/img/circle24-check.svg')
          div
            span
              | {{$t("statue.table.3.header")}}
            div {{$t("statue.table.3.content")}}
      .statue-right-table-column
        .statue-right-table-column__item
          img(src='../assets/img/circle24-check.svg')
          div
            span
              | {{$t("statue.table.4.header")}}
            div {{$t("statue.table.4.content")}}
        .statue-right-table-column__item
          img(src='../assets/img/circle24-check.svg')
          div
            span
              | {{$t("statue.table.5.header")}}
            div {{$t("statue.table.5.content")}}
        .statue-right-table-column__item
          img(src='../assets/img/circle24-check.svg')
          div
            span
              | {{$t("statue.table.6.header")}}
            div {{$t("statue.table.6.content")}}
    
    .statue-email
      div {{$t("statue.gainaccess")}}
      SubscribeForm
      //- div
      //-   input(type='email', value='Оставь свой E-mail')
      //-   .statue-email-sendbtn
      //-     img(src='../assets/img/arrow-right-24px.svg')

</template>

<script>

import SubscribeForm from '../components/SubscribeForm';
export default {
    components: {
        SubscribeForm
    }
}
</script>

<style lang="stylus" scoped>
    .statue
        font-family: 'TT Norms Medium';
        background: #14171D;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: flex-start;
        &__left
            // min-width 30%
            background-color: #4737D6;
            display: flex;
            flex-flow: column wrap;
            align-items: flex-start;
            justify-content: center;
            img 
                margin 7.222vh 3.125vw 7.222vh 0px
                width 100%
            @media screen and (min-width: 1000px) 
                width 50vw
            @media screen and (max-width: 1000px) 
                width 100vw
            
        .statue-right
            padding 100px 2vw
            padding-left 4vw
            @media screen and (max-width: 1000px) 
                padding-left 10.27777vw 
                padding-bottom 84px
                padding-top 42px
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
                
                @media screen and (min-width: 1000px) 
                    max-width 24.3vw
                @media screen and (max-width: 1000px) 
                    max-width 80vw
                font-size: 4.4444vh;
                margin-bottom: 2.444vh;
            .statue-right-table
                width 100%
                display: flex;
                flex-flow: row wrap;
                align-items: flex-start;
                justify-content: space-between;
                // div:first-child
                //     margin-right 2vw
                &-column
                  font-family: 'TT Norms Regular';
                  .statue-right-table-column__item
                      display: flex;
                      flex-direction: row;
                      align-items: flex-start;
                      justify-content: flex-start;
                      margin-bottom: 3.666vh;
                      min-width 281px
                      div
                          color: #A6A6A6;
                          display: flex;
                          flex-direction: column;
                          align-items: flex-start;
                          justify-content: center;
                          div
                              color: #A6A6A6;
                              max-width 250px
                          span
                              margin-bottom: 1vh;
                              color white
                      img 
                          margin-top: 12px;
                          margin-right: 14px;
            .statue-email
                font-family: 'TT Norms Regular';
                // width: 50vw;
                margin-top: 3vh;
                display: flex;
                width 44vw
                flex-flow: row wrap;
                align-items: center;
                justify-content: space-between;
                div
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 16px;
                    // margin-bottom 22px
                    &:first-child
                      min-width 230px
                      @media screen and (max-width: 1370px) 
                        margin-bottom 22px
                //     input 
                //         color: #A6A6A6;
                //         background-color: #171A20;
                //         border: #14171D none 0px;
                //         font-size: 1.777vh;
                //         height: 48px;
                        
                //         padding-left: 15px;
                //         @media screen and (min-width: 1219px) 
                //             width: 310px;
                //         @media screen and (max-width: 1219px) 
                //             width: 250px;
                // .statue-email-sendbtn
                //     width: 48px;
                //     height: 48px;
                //     background-color: #4737D6;
                //     display: flex;
                //     flex-direction: row;
                //     align-items: center;
                //     justify-content: center;

                //     border-radius: 0px 5px 5px 0px;


</style>  

  
