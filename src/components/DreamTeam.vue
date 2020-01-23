<template lang="pug">
    .dreamteam
        .dreamteam__row
            .dreamteam__person
                .photo(:style="{'background-image': `url(${require(`../assets/img/dreamteam/person-${1}.jpg`)})`}")
                    .photo-name Alexey
                    .photo-developer 
                        | Unity Software
                        | Engineer
                .blue
                .red
            .dreamteam__person
                .photo(:style="{'background-image': `url(${require(`../assets/img/dreamteam/person-${2}.jpg`)})`}")
                    .photo-name Maxim
                    .photo-developer iOS/Front-end  <br/>Software Engineer
                .blue
                .red
            .dreamteam__person
                .photo(:style="{'background-image': `url(${require(`../assets/img/dreamteam/person-${3}.jpg`)})`}")
                    .photo-name Denis
                    .photo-developer Android/Unity <br/>Software Engineer 
                .blue
                .red
            .dreamteam__person
                .photo(:style="{'background-image': `url(${require(`../assets/img/dreamteam/person-${4}.jpg`)})`}")
                    .photo-name Anton
                    .photo-developer 3D Generalist
                .blue
                .red
        .dreamteam__row
            .dreamteam__person
                .photo(:style="{'background-image': `url(${require(`../assets/img/dreamteam/person-${6}.jpg`)})`}")
                    .photo-name Alexander
                    .photo-developer 
                        | CTO/Back-End<br/>Software Engineer
                .blue
                .red
            .dreamteam__person
                .photo(:style="{'background-image': `url(${require(`../assets/img/dreamteam/person-${5}.jpg`)})`}")
                    .photo-name Tim
                    .photo-developer 
                        | CEO/Art-director
                .blue
                .red
            .dreamteam__person
                .photo(:style="{'background-image': `url(${require(`../assets/img/dreamteam/person-${7}.jpg`)})`}")
                    .photo-name Mikhail
                    .photo-developer Project Manager
                .blue
                .red


</template>


<script>
export default {
    methods: {
        // getImgUrl(pet) {
        //     var images = require.context('../assets/img/dreamteam/person-', false, /\.jpg$/)
        //     console.log(images('./' + pet + ".png"))
        // }
    }
}

</script>

<style lang="stylus">


.dreamteam
    width 1000px
    display flex
    flex-direction column
    align-items center
    justify-content center
    margin-bottom 20px

    .dreamteam__person
        position relative
        width 230px
        height 290px
        margin-right 35px
        transition all .3s
        &:hover 
            z-index 20 !important
            transform scale(1.2)
            transition all .3s
            .photo
                mix-blend-mode: lighten;
                cursor pointer
                box-shadow: 0px 0px 0px 0px #F83902;
                transition all .3s
                .photo-name
                    display block
                    transition display .3s
                .photo-developer
                    display block
                    transition display .3s
        &:active 
            z-index 20 !important
            transform scale(1.2)
            transition all .3s
            .photo
                mix-blend-mode: lighten;
                cursor pointer
                box-shadow: 0px 0px 0px 0px #F83902;
                transition all .3s
                .photo-name
                    display block
                    transition display .3s
                .photo-developer
                    display block
                    transition display .3s
            
        .blue
            position relative
            top -(@height)
            z-index 2
            width @width
            height @height
            background #4737D6
            
        .red
            position relative
            top -2 * (@height)
            z-index 1
            width @width
            height @height
            background #F83902
        .photo
            position relative
            z-index 10
            width 230px
            height 290px
            background-repeat: no-repeat;
            background-size: 100%;
            box-shadow: -8px 8px 0px 0px #F83902;
            margin-right 30px
            transition all .3s
            mix-blend-mode: color-burn;
            display flex
            flex-direction column
            justify-content flex-end

    
            .photo-name
                display none
                margin-top 8px
                margin-left 16px
                font-family: 'TT Norms Medium';
                font-style: normal;
                font-weight: bold;
                font-size: 36px;
                color: #FFFFFF;

            .photo-developer 
                display none
                margin-left 16px
                margin-bottom 16px
                font-family: 'TT Norms Regular';
                font-style: italic;
                font-weight: 600;
                font-size: 20px;
                color: #FFFFFF;
    
    .dreamteam__row
        display flex
        flex-direction row
        justify-content space-around
        &:nth-child(1)
            .dreamteam__person
                &:nth-child(1)
                    z-index 11
                &:nth-child(2)
                    bottom -80px
                    z-index 13
                &:nth-child(3)
                    bottom -33px
                    z-index 15
                &:nth-child(4)
                    left 20px
                    bottom -55px
                    z-index 17

        &:nth-child(2)
            .dreamteam__person
                &:nth-child(1)
                    left -40px
                    bottom 119px  
                    z-index 12
                &:nth-child(2)
                    bottom 40px  
                    z-index 14
                &:nth-child(3)
                    bottom 80px  
                    z-index 16


</style>