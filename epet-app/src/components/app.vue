<template>
  <div class="indexbox">
    <header_com :menus="home.menus"/>
    <div class="main">
      <banner_com :imgSrc="home.datas[0].value"/>
      <div class="columnnavdiv clearfix">
        <ul class="sale-list clearfix ">
          <li v-for="(img,index) in home.datas[1].menus">
            <a :href="img.target.param">
              <img :src="img.image" alt="">
            </a>
          </li>
        </ul>
      </div>
      <div class="surprise">
        <div class="mrfq-title">
          <div class="mrfq-logo fl">
            <img src="//static.epetbar.com/static_web/wap/src/images/suprice.png">
          </div>
          <div class="fl">
            <span>距离本场结束</span>
          </div>
          <div class="time-container fl">
            <span>00</span>
            <span class="f12">:</span>
            <span>00</span>
            <span class="f12">:</span>
            <span>00</span>
          </div>
          <div class="move-icon fr">
            <a href="https://wap.epet.com/surprise/Main.html?pet_type=dog&amp;fw=0" class="db ftr">
              <img src="https://img2.epetbar.com/nowater/2017-12/13/10/bc4f0db8483e9084f5923cb92bfe2b7a.jpg">
            </a>
          </div>
        </div>
        <div class="surprise-pro">
          <div class="swiper-container" style="width: 100%" ref="goodsWrapper">
            <div class="swiper-wrapper clearfix" style="width: 120%" >
              <div class="swiper-slide " style="width: 98.5714px; margin-right: 10px;">
                <div class="pro-block"><a href="https://wap.epet.com/surprise/Main.html?pet_type=dog&amp;fw=0">
                  <div class="thispro-img loadimg-nofixed">
                    <img class="image" src="https://img1.epetbar.com/2016-01/25/16/9811dd2f3a1c18116c52dd89ea831ac0.jpg@!300w-b" >
                  </div>
                  <div class="bt ftc mt5">
                    <span class="f12">¥</span>
                    <span class="ft17">3.50</span>
                  </div>
                  <p class="c999 ftc f12">省￥31.50</p>
                </a>
                </div>
              </div>
              <div class="swiper-slide " style="width: 98.5714px; margin-right: 10px;">
                <div class="pro-block"><a href="https://wap.epet.com/surprise/Main.html?pet_type=dog&amp;fw=0">
                  <div class="thispro-img loadimg-nofixed">
                    <img class="image" src="https://img1.epetbar.com/2017-08/18/21/957eff8598b9972e7205988b5ade3b22.jpg@!300w-b" lazy="loaded">
                  </div>
                  <div class="bt ftc mt5">
                    <span class="f12">¥</span>
                    <span class="ft17">2.59</span>
                  </div>
                  <p class="c999 ftc f12">省￥23.31</p>
                </a>
                </div>
              </div>
              <div class="swiper-slide" style="width: 98.5714px; margin-right: 10px;">
                <div class="pro-block">
                  <a href="https://wap.epet.com/surprise/Main.html?pet_type=dog&amp;fw=0">
                    <div class="thispro-img loadimg-nofixed"><img class="image" src="https://img1.epetbar.com/2016-11/28/8/6eea62e8c596077ce3e0deb584dfdf82.jpg@!300w-b" lazy="loaded">
                      <!----> <!---->
                    </div>
                    <div class="bt ftc mt5">
                      <span class="f12">¥</span>
                      <span class="ft17">4.90</span>
                    </div>
                    <p class="c999 ftc f12">省￥44.10</p>
                  </a>
                </div>
              </div>
              <div class="swiper-slide" style="width: 98.5714px; margin-right: 10px;">
                <div class="pro-block">
                  <a href="https://wap.epet.com/surprise/Main.html?pet_type=dog&amp;fw=0">
                    <div class="thispro-img loadimg-nofixed">
                      <img class="image" src="https://img1.epetbar.com/2017-03/08/10/f97ce84556e10829332649b6e4fdb975.jpg@!300w-b" lazy="loaded">
                      <!----> <!---->
                    </div>
                    <div class="bt ftc mt5">
                      <span class="f12">¥</span>
                      <span class="ft17">9.80</span>
                    </div>
                    <p class="c999 ftc f12">省￥88.20</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pageline_com />
      <div class="divboximg">
        <div class="divimg" style="width: 100%;">
          <a href="https://wap.epet.com/group/v226/main.html?pettype=dog&amp;pet_type=dog&amp;fw=0" style="height: 185px;">
            <img style="width: 100%" name="750x370" src="https://img2.epetbar.com/nowater/2017-12/15/13/42dc2731be284c68e0917d617b396fa1.jpg@!water">
          </a>
        </div>
      </div>
      <pageline_com />
      <div class="divboxmoreimg">
        <div class="divimg1" style="width: 50.13%;">
          <a href="http://wap.epetht.com/guide.html?pet_type=dog&amp;fw=0" style="height: 250px;">
            <img name="376x500" src="https://img2.epetbar.com/nowater/2017-12/13/09/1ec9379f83eb421db9a09195c9594e29.jpg@!water" >
          </a>
        </div>
        <div class="divimg2" style="width: 49.87%;">
          <a href="https://sale.epet.com/m/mould/fashion/main.html?pet_type=dog&amp;fw=0" style="height: 125px;">
            <img name="374x250" src="https://img2.epetbar.com/nowater/2017-12/13/09/c023e6c441d726b0c1b1caafae8999f0.jpg@!water">
          </a>
          <a href="https://wap.epet.com/petschool/SchoolDetail.html?aid=116&amp;fw=0" style="height: 125px;">
            <img name="374x250" src="https://img2.epetbar.com/nowater/2017-12/13/10/35bb7f3bd146cb9a9e74a935803f0d9a.jpg@!water">
          </a>
        </div>
      </div>
      <pageline_com />
      <div class="show"></div>
      <title_video_com :video_title="home.datas[9].value" :video_content="home.datas[10].value[0]"/>
      <pageline_com />
      <title_list_com :listMessage="home.datas[12].value" :listImg="home.datas[13].content_images"/>
      <title_com />
      <div class="swiper-wrapper">
        <mt-swipe :auto="3000" class="mt-swipe">
          <mt-swipe-item><img src="../common/img/1.png" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="../common/img/2.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="../common/img/3.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="../common/img/4.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
      </div>
      <title_video_com :video_title="home.datas[16].value" :video_content="home.datas[17].value[0]"/>
      <title_video_com :video_title="home.datas[18].value" :video_content="home.datas[19].value[0]"/>
      <div class="divimg">
        <img :src="home.datas[20].content_images.image">
      </div>
      <div class="footertext">
        <div class="ft">
          <span class="bt" title="触屏版">触屏版</span>
          <span><a href="https://wap.epet.com/app.html">手机客户端</a></span>
          <span><a href="https://wap.epet.com/AboutEpet.html">关于我们</a></span>
          <span><a href="https://wap.epet.com/faq.html">联系我们</a></span>
        </div>
        <div style="text-align:center;margin:0 10px 0 10px; padding-bottom:25px; font-size:12px">&copy; wap.epet.com 版权：重庆易宠科技有限公司</div>
      </div>
    </div>
  </div>
</template>
<script>
  import header_com from './header.vue'
  import banner_com from './banner.vue'
  import pageline_com from './pageline.vue'
  import title_video_com from './titile_video.vue'
  import title_list_com from './titile_list.vue'
  import title_com from './title.vue'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default{

    mounted(){
      this.$nextTick(()=>{
        new BScroll(this.$refs.goodsWrapper,{
          scrollX:true,
          click:true
        })
      })
    },
    computed: {
      ...mapState(['home'])
    },
    methods:{

    },
    components:{
      header_com,
      banner_com,
      pageline_com,
      title_video_com,
      title_list_com,
      title_com
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .indexbox
    position relative
    .main
      padding-top 25%
      padding-bottom 40px
      .columnnavdiv

        .sale-list
          margin 0 auto;
          li
            width 20%;
            float left;
            img
              width 100%;
      .surprise
        .mrfq-title
          width 100%;
          height 60px;
          padding 10px;
          .mrfq-logo
            img
              height: 24px;
              margin-left: -20px;
          .move-icon
            img
              height: 55px;
              margin-left: 60px;
              margin-right: -20px;
              margin-top: -5px;



        .surprise-pro
          padding-left: 5px;
          margin-bottom: 10px;
          .swiper-container
            width: 100%;
            height: 100%;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
            z-index: 3;
            .swiper-wrapper
              width: 100%;
              height: 100%;
              position: relative;
              display flex
              justify-content flex-start
              .swiper-slide
                float left
                height: 100%;
                margin-right 10px
                .pro-block
                  height: 100%;
                & .image
                  width 100%






      .divboxmoreimg
        height 250px
        display flex
        justify-content center
        .divimg1
          & img
            height 100%
        .divimg2
          display flex
          align-items  center
          flex-wrap  wrap
          & img
            height 100%


      .swiper-wrapper
        .mt-swipe
          width 100%
          height 160px
          img
            height 160px
      .divimg
        width 100%
        img
          width 100%
      .footertext
        .ft
          font-size: 14px;
          padding: 15px 0 5px;
          text-align: center;
          span
            margin-right 10px



    .ftc{
      text-align center
    }
    .ft17{
      font-size 14px
    }
</style>
