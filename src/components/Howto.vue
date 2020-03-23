<template lang="pug">
.howto
  .howto-container
    .howto-container__texts
      div {{$t("howto.overheader")}}
      div
        | {{$t("howto.header")}}
      div
        | {{$t("howto.content")}}
    .howto-container__btns
      .howto-container__btns-btn(@mouseover='mouseOver(1)')
        .howto-container__btns-back
        .howto-container__btns-slide
        img(src='../assets/img/date-range-24px.svg')
        .howto-container__btns-text {{$t("howto.1")}}
      .howto-container__btns-btn(@mouseover='mouseOver(2)')
        .howto-container__btns-back
        .howto-container__btns-slide
        img(src='../assets/img/edit-24px.svg')
        .howto-container__btns-text {{$t("howto.2")}}
      .howto-container__btns-btn(@mouseover='mouseOver(3)')
        .howto-container__btns-back
        .howto-container__btns-slide
        img(src='../assets/img/person-add-24px.svg')
        .howto-container__btns-text {{$t("howto.3")}}
    .howto-container__hint {{$t("howto.soon")}}
  .howto-images
    img(src='../assets/img/phone-frame.png')
    //- iframe.giphy-embed(src='https://giphy.com/embed/IRFQYGCokErS0', width='200', height='490', frameborder='0', allowfullscreen='')
    //- img(src='../assets/vid/cat.gif')
    //- video
    //-     source(src='../assets/vid/phone-videvo.MP4')
    //- video.video-container(ref='videoRef', src='../assets/vid/phone-videvo.MP4', width='100%', controls='')
    //- iframe(src='https://vk.com/video?q=%D0%BA%D0%BE%D1%82&z=video-31480508_456239214', width='680', height='480', frameborder='0')
    //- videoPlayer.videvo(:options="optionsA")
    videoPlayer.videvo(ref='videoPlayer', :options='playerOptions', :playsinline='true', @play='onPlayerPlay($event)', @pause='onPlayerPause($event)', @ended='onPlayerEnded($event)', @loadeddata='onPlayerLoadeddata($event)', @waiting='onPlayerWaiting($event)', @playing='onPlayerPlaying($event)', @timeupdate='onPlayerTimeupdate($event)', @canplay='onPlayerCanplay($event)', @canplaythrough='onPlayerCanplaythrough($event)', @ready='playerReadied', @statechanged='playerStateChanged($event)')


    //- VuePlayer(v-bind="videvo")

    img(src='../assets/img/howto-projects.svg')
      
</template>

<script>
    import 'video.js/dist/video-js.css'
    import { videoPlayer } from 'vue-video-player'
export default {
    data() {
        return {
            currentBtn: 1,
            videoSources:[
                'https://r1---sn-ab5szn7s.googlevideo.com/videoplayback?expire=1585001488&ei=sN94XqLFGpST8wSo2JioDQ&ip=23.254.30.26&id=o-AOYZeWcr7z7e-VxpaoYmiKIGhFjbDnLvMhLrXIDRQG7d&itag=22&source=youtube&requiressl=yes&mh=H3&mm=31%2C29&mn=sn-ab5szn7s%2Csn-ab5l6nzd&ms=au%2Crdu&mv=m&mvi=0&pl=23&initcwndbps=1250000&vprv=1&mime=video%2Fmp4&ratebypass=yes&dur=11.726&lmt=1584979753139900&mt=1584979774&fvip=1&fexp=23882514&c=WEB&txp=6216222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cratebypass%2Cdur%2Clmt&sig=ADKhkGMwRgIhAJc4zvymAKSDW28EEOqv4HtpK-cy00byNew0tp_BKyhsAiEA0vg-zJ1MUZfs-3TqU-xfxfmLaKuR_egStfuEW2_XuEA%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ABSNjpQwRAIgLRyUX6Z3FE1Cd0VcZKjNEPGs20vg2jYgfkkoR2Y5YPcCIGjVpcBSXczzA2fWE8gzipULwbLaJPOpdUL8alVp94O4&contentlength=559658&video_id=ey4Uzaex2kE&title=phone+videvo',
                'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
            ],
            // videojs options
            playerOptions: {
                height: '460',
                width: '225',
                autoplay: true,
                loop: true,
                controls:false,
                muted: true,
                language: 'en',
                nativeControlsForTouch: false,
                //   playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [{
                    type: "video/mp4",
                    // mp4
                    src: 'https://r1---sn-ab5szn7s.googlevideo.com/videoplayback?expire=1585001488&ei=sN94XqLFGpST8wSo2JioDQ&ip=23.254.30.26&id=o-AOYZeWcr7z7e-VxpaoYmiKIGhFjbDnLvMhLrXIDRQG7d&itag=22&source=youtube&requiressl=yes&mh=H3&mm=31%2C29&mn=sn-ab5szn7s%2Csn-ab5l6nzd&ms=au%2Crdu&mv=m&mvi=0&pl=23&initcwndbps=1250000&vprv=1&mime=video%2Fmp4&ratebypass=yes&dur=11.726&lmt=1584979753139900&mt=1584979774&fvip=1&fexp=23882514&c=WEB&txp=6216222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cratebypass%2Cdur%2Clmt&sig=ADKhkGMwRgIhAJc4zvymAKSDW28EEOqv4HtpK-cy00byNew0tp_BKyhsAiEA0vg-zJ1MUZfs-3TqU-xfxfmLaKuR_egStfuEW2_XuEA%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ABSNjpQwRAIgLRyUX6Z3FE1Cd0VcZKjNEPGs20vg2jYgfkkoR2Y5YPcCIGjVpcBSXczzA2fWE8gzipULwbLaJPOpdUL8alVp94O4&contentlength=559658&video_id=ey4Uzaex2kE&title=phone+videvo'
                    // webm
                    // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                }],
                poster: "../assets/img/howto-projects.svg",
            }
      }
    },
    mounted() {
      // console.log('this is current player instance object', this.player)
      
    //   setTimeout(() => {
    //     console.log('dynamic change options', this.player)
    //     this.playerOptions.sources[0].src = 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm';
    //   }, 5000),
    //   setTimeout(() => {
    //     console.log('dynamic change options', this.player)
    //     this.playerOptions.sources[0].src = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4';
    //   }, 10000)
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
            console.log('hovered over btn', btnNum)
            this.playerOptions.sources[0].src = this.videoSources[btnNum-1]
        },
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        console.log('player ended!', player)

      },
      onPlayerLoadeddata(player) {
        // console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
        // console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
        // console.log('player Playing!', player)
      },
      onPlayerTimeupdate(player) {
        // console.log('player Timeupdate!', player.currentTime())
      },
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        // seek to 10s
        console.log('example player 1 readied', player)
        // player.currentTime(10)
        // console.log('example 01: the player is readied', player)
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
        padding-top 4vh
        @media screen and (max-width: $w-l) 
                padding 0 10.27777vw 0 10.27777vw
                flex-direction: column;
                align-items: flex-start;
                justify-content center;
        &-container
            margin-right 4vw
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            &__texts
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
                    &:hover
                        .howto-container__btns-slide
                            width 288px
                            transition 2s
                        .howto-container__btns-back
                            width 288px
                    &:first-child
                        margin-top: 2.8888vh;
                    img 
                        position relative
                        z-index 10
                        height: 24px;
                        margin: 12px 12px 12px 16px;
                    .howto-container__btns-back
                        height 48px
                        border-radius: 5px;
                        z-index 8
                        width 0
                        background #4737D6
                        position absolute
                    .howto-container__btns-slide
                        height 48px
                        border-radius: 5px;
                        z-index 9
                        width 0
                        background #6C5FDE
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
              margin-top 5vh
              margin-left 15px
              color: gray;
        .howto-images
            position: relative;
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: flex-start;
            .videvo
                position: absolute;
                left 120px
                top 15px
                z-index: 9;
            img 
                &:first-child
                    position: relative;
                    z-index: 10;
                    @media screen and (min-width: $w-l) 
                        // margin-left 3vw
                        height: 490px;
                        left: 110px;
                    @media screen and (max-width: $w-l) 
                        margin-top 2vw
                        height: 320px;
                &:last-child
                    position: relative;
                    z-index: 0;
                    @media screen and (min-width: $w-l) 
                        height: 440px;
                    @media screen and (max-width: $w-l) 
                        height: 255px;
                        left: -55px;

</style>  


