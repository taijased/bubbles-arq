<template lang="pug">
.howto
  .howto-body
    .howto-container
      .howto-container__texts
        div {{$t("howto.overheader")}}
        div
          | {{$t("howto.header")}}
        div
          | {{$t("howto.content")}}
      .howto-container__btns
        .howto-container__btns-btn(@mouseover='mouseOver(0)')
          .howto-container__btns-back(:style='backs[0]')
          .howto-container__btns-slide(:style='sliders[0]')
          .howto-container__btns-exclude
          img(src='../assets/img/date-range-24px.svg')
          .howto-container__btns-text {{$t("howto.1")}}
        .howto-container__btns-btn(@mouseover='mouseOver(1)')
          .howto-container__btns-back(:style='backs[1]')
          .howto-container__btns-slide(:style='sliders[1]')
          .howto-container__btns-exclude
          img(src='../assets/img/edit-24px.svg')
          .howto-container__btns-text {{$t("howto.2")}}
        .howto-container__btns-btn(@mouseover='mouseOver(2)')
          .howto-container__btns-back(:style='backs[2]')
          .howto-container__btns-slide(:style='sliders[2]')
          .howto-container__btns-exclude
          img(src='../assets/img/person-add-24px.svg')
          .howto-container__btns-text {{$t("howto.3")}}
          .howto-container__hint {{$t("howto.soon")}} 
    //-   .howto-container__hint {{$t("howto.soon")}} 
    .howto-images
      .howto-videvo
        .videvo-cover  
        .videvo
          videoPlayer(ref='videoPlayer', :options='playerOptions', :playsinline='true', @playing='onPlayerPlay($event)')
      img(src='../assets/img/howto-projects.png')
      
</template>

<script>
    import gsap from 'gsap'
    import 'video.js/dist/video-js.css'
    import { videoPlayer } from 'vue-video-player'
    export default {
        data() {
            return {
                normalTime: 0,
                currentBtn: 0,
                currentAnim: 0,
                backs: [
                    { width: '288px' },
                    { width: 0 },
                    { width: 0 }
                ],
                sliders:[
                    { width: 0 },
                    { width: 0 },
                    { width: 0 }
                ],
                videoSources:[
                    'https://yanovp.arq.su/vid/howto1.mp4',
                    'https://yanovp.arq.su/vid/howto2.mp4',
                    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
                ],
                playerOptions: {
                    autoplay: true,
                    loop: true,
                    controls:false,
                    preload: true,
                    muted: true,
                    fluid: true,
                    language: 'en',
                    nativeControlsForTouch: false,
                    sources: [{
                        type: "video/mp4",
                        src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
                        src: 'https://yanovp.arq.su/vid/howto2.mp4',
                        src: 'https://yanovp.arq.su/vid/howto1.mp4'
                    }],
                    poster: "../assets/img/howto-projects.svg",
                }
        }
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            }
        },
        components: {
            videoPlayer
        },
        methods: {
            mouseOver(btnNum){
                if(this.currentBtn != btnNum){
                    this.currentBtn = btnNum
                    this.playerOptions.sources[0].src = this.videoSources[this.currentBtn]
                    for (let i = 0; i < this.backs.length; i++) {
                        this.backs[i].width = 0
                        this.sliders[i].width = 0
                    }
                    this.backs[this.currentBtn].width='288px'
                    for (let i = 0; i < 3; i++) {
                        gsap.killTweensOf(this.sliders[i]);
                        this.sliders[i].width = 0;
                    }
                }
            },
            // onPlayerTimeupdate(player) {
                // this.normalTime = (player.currentTime() / player.duration())
                // this.number = this.normalTime
                // this.sliders[this.currentBtn].width = this.normalTime * 100 + '%'
            // },
            // onPlayerEnded(player) {
            //     this.sliders[this.currentBtn].width = 0;
            //     console.log("ended")
            // },
            onPlayerPlay(player) {
                // this.players = player.getPlayers()
                for (let i = 0; i < 3; i++) {
                    gsap.killTweensOf(this.sliders[i]);
                    this.sliders[i].width = 0;
                }
                this.currentAnim = gsap.to(this.sliders[this.currentBtn], {duration: player.duration(), width: 100 + '%',});
                // console.log("play", player, this.players)
            }
        }
    }
</script>



<style lang="stylus" scoped>
.howto
    background: #14171D;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content center;
    .howto-body
        width 100%
        max-width: $w-xxl
        padding 8.888vh 10.277vw
        background: #14171D;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content space-between;
        // padding-top 4vh
        @media screen and (max-width: $w-s) 
                padding 42px 32px
                padding-bottom 0
                flex-direction: column;
                align-items: flex-start;
                justify-content center;
        .howto-container
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            .howto-container__texts
                margin-left: 15px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-end;
                div:nth-child(1)
                    font-family: 'TT Norms Regular';
                    font-size: 12px;
                    margin-bottom: 1.33vh;
                div:nth-child(2)
                    font-size: 36px;
                    margin-bottom: 2.444vh;
                    max-width 240px
                div:nth-child(3)
                    font-family: 'TT Norms Regular';
                    font-size: 16px;
                    max-width 450px
                    color: gray;
            .howto-container__btns
                .howto-container__btns-btn
                    position relative
                    font-family: 'TT Norms Regular';
                    font-size: 16px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    margin-top: 1.3vh;
                    width: 288px;
                    height 48px
                    &:first-child
                        margin-top: 2.8888vh;
                    &:last-child
                        margin-bottom 5vh
                    img 
                        position relative
                        z-index 10
                        height: 24px;
                        margin: 12px 12px 12px 16px;
                    .howto-container__btns-back
                        height 48px
                        border-radius: 5px;
                        z-index 5
                        width 0
                        background #4737D6
                        position absolute
                    .howto-container__btns-slide
                        height 48px
                        // border-radius: 5px;
                        z-index 8
                        width 0
                        background #6C5FDE
                        position absolute
                        // transition  all .1s
                    .howto-container__btns-exclude
                        height 48px
                        z-index 9
                        width 288px
                        background-image url('../assets/img/exclude.png')
                        position absolute
                    .howto-container__btns-text
                        background none
                        position relative
                        z-index 10
                        margin 0
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: flex-start;
                    .howto-container__hint
                        // margin-top 1vh
                        // margin-bottom 5vh
                        margin-left 8px
                        color: gray;
        .howto-images
            position: relative;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            .howto-videvo
                background-image url('../assets/img/phone-frame1.png')
                // background-color black
                background-size 100%
                position: relative;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                position: relative;
                z-index: 10;
                @media screen and (min-width: $w-l) 
                    height: 600px;
                    width 300px
                    left: 80px;
                @media screen and (max-width: $w-l) 
                    margin-bottom 20px
                    height: 330px;
                    width 164px
                .videvo-cover 
                    background-image url('../assets/img/phone-frame.png')
                    position: relative;
                    z-index: 10;
                    height 100%
                    width 100%
                    background-size 100%
                .videvo
                    position: absolute;
                    z-index: 9;
                    width 87.1%
                    
            img 
                &:last-child
                    position: relative;
                    z-index: 0;
                    @media screen and (min-width: $w-l) 
                        height: 440px;
                    @media screen and (max-width: $w-l) 
                        height: 255px;
                        left: -55px;

</style>  


