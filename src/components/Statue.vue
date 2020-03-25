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
        width 100%
        // max-width $w-xxl
        font-family: 'TT Norms Medium';
        background: #14171D;
        display: flex;
        flex-flow: row wrap;
        align-items: space-between;
        justify-content: flex-start;
        &__left
            background-color: #4737D6;
            background-image url('../assets/img/wood.svg')
            background-size contain
            display: flex;
            flex-flow: column wrap;
            align-items: flex-start;
            justify-content: center;
            img 
                margin 7.222vh 0vw 7.222vh 0px
                width 100%
            @media screen and (min-width: $w-l) 
                width 49vw
            @media screen and (max-width: $w-l) 
                width 100vw
            
        .statue-right
            padding-left 148px
            padding-top 100px
            @media screen and (min-width: $w-l) 
                padding-left 80px
            @media screen and (max-width: $w-s) 
                padding-left 32px
                padding-top 42px
                // width 100%
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            &__overheader
                font-size: 12px;
                margin-bottom: 1.33vh;
                span 
                    color:#D00202;
                    position: relative;
                    top: -10px;
            .statue-right__header
                
                @media screen and (min-width: $w-m) 
                    font-size: 40px;
                    max-width 400px
                @media screen and (max-width: $w-m) 
                    max-width 300px
                    font-size: 26px;
                
                margin-bottom: 2.444vh;
            .statue-right-table
                width 100%
                display: flex;
                flex-flow: row wrap;
                align-items: flex-start;
                justify-content: flex-start;
                &-column
                  font-family: 'TT Norms Regular';
                  &:last-child
                    margin-left 7vw
                    @media screen and (max-width: $w-m) 
                      margin-left 0
                    @media screen and (min-width: $w-l) 
                      margin-left 2vw
                  // @media screen and (min-width: $w-m) 
                  //     &:last-child
                  //       margin-left 2vw
                  // @media screen and (min-width: $w-m) 
                  //     &:last-child
                  //       margin-left 2vw
                  
                      
                  
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
                margin-top: 3vh;
                display: flex;
                width 350px
                flex-flow: column;
                align-items: flex-start;
                justify-content: flex-start;
                div
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 16px;
                    &:first-child
                      min-width 230px
                      margin-bottom 22px


</style>  

  
