<template lang="pug">
    section#dream-team(@scroll="handleScroll")
        .dreamteam__person(:class="{'active': elementCard[0]}")
            .photo(:style="{'background-image': `url(${require(`../assets/img/dreamteam/person-${1}.jpg`)})`}")
                .photo-name Alexey
                .photo-developer 
                    | Unity Software <br/>Engineer
            .blue
            .red
        .dreamteam__person(:class="{'active': elementCard[1]}")
            .photo(:style="{'background-image': `url(${require(`../assets/img/dreamteam/person-${2}.jpg`)})`}")
                .photo-name Maxim
                .photo-developer iOS/Front-end  <br/>Software Engineer
            .blue
            .red
        .dreamteam__person(:class="{'active': elementCard[2]}")
            .photo(:style="{'background-image': `url(${require(`../assets/img/dreamteam/person-${3}.jpg`)})`}")
                .photo-name Denis
                .photo-developer Android/Unity <br/>Software Engineer 
            .blue
            .red
        .dreamteam__person(:class="{'active': elementCard[3]}")
            .photo(:style="{'background-image': `url(${require(`../assets/img/dreamteam/person-${4}.jpg`)})`}")
                .photo-name Anton
                .photo-developer 3D Generalist
            .blue
            .red
        .dreamteam__person(:class="{'active': elementCard[4]}")
            .photo(:style="{'background-image': `url(${require(`../assets/img/dreamteam/person-${6}.jpg`)})`}")
                .photo-name Alexander
                .photo-developer 
                    | CTO/Back-End<br/>Software Engineer
            .blue
            .red
        .dreamteam__person(:class="{'active': elementCard[5]}")
            .photo(:style="{'background-image': `url(${require(`../assets/img/dreamteam/person-${5}.jpg`)})`}")
                .photo-name Tim
                .photo-developer 
                    | CEO/Art-director
            .blue
            .red
        .dreamteam__person(:class="{'active': elementCard[6]}")
            .photo(:style="{'background-image': `url(${require(`../assets/img/dreamteam/person-${7}.jpg`)})`}")
                .photo-name Mikhail
                .photo-developer Project Manager
            .blue
            .red

</template>


<script>
export default {
    data() {
        return {
            elementCard: [
                false,
                false,
                false,
                false,
                false,
                false,
                false
            ]

        }
    },
    methods: {
        handleScroll (event) {
            const element = document.getElementById('dream-team');

            console.log(element.scrollLeft);
            if (0 < element.scrollLeft && element.scrollLeft < 50) {
                this.resetElements()
                this.elementCard[0] = true
            } else if (50 < element.scrollLeft && element.scrollLeft < 180) {
                this.resetElements()
                this.elementCard[1] = true

            } else if (200 < element.scrollLeft && element.scrollLeft < 300) {
                this.resetElements()
                this.elementCard[2] = true

            } else if (350 < element.scrollLeft && element.scrollLeft < 450) {
                this.resetElements()
                this.elementCard[3] = true
            } else if (450 < element.scrollLeft && element.scrollLeft < 550) {
                this.resetElements()
                this.elementCard[4] = true
            } else if (550 < element.scrollLeft && element.scrollLeft < 675) {
                this.resetElements()
                this.elementCard[5] = true
            } else if (675 < element.scrollLeft && element.scrollLeft < 700) {
                this.resetElements()
                this.elementCard[6] = true
            }
        },
        resetElements() {
            this.elementCard =  [
                false,
                false,
                false,
                false,
                false,
                false,
                false
            ]
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    }
}

</script>

<style lang="stylus">


#dream-team
    overflow-x: scroll !important;
    overflow-y: hidden !important;
    white-space: nowrap;
    padding: 0 50px; 
    margin-right -550px
    padding-bottom 240px


    .dreamteam__person
        position relative
        display: inline-block;
        width 230px
        height 290px

        &:nth-child(1)
            z-index 11
        &:nth-child(2)
            left -150px
            bottom -150px
            z-index 12
        &:nth-child(3)
            left -200px
            bottom -50px
            z-index 13
        &:nth-child(4)
            left -300px
            bottom -200px
            z-index 14
        &:nth-child(5)
            left -400px
            z-index 15
        &:nth-child(6)
            left -480px
            bottom -150px  
            z-index 16
        &:nth-child(7)
            left -580px
            bottom -20px  
            z-index 16
        transition all .3s            
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
.active
    z-index 20 !important
    transform scale(1.2) !important
    transition all .3s !important
    .photo
        mix-blend-mode: lighten !important
        cursor pointer
        box-shadow: 0px 0px 0px 0px #F83902 !important
        transition all .3s !important
        .photo-name
            display block !important
            transition display .3s !important
        .photo-developer
            display block !important
            transition display .3s !important
    



</style>