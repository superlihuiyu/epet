<template>
  <div class="titmoudle">
    <div class="leftimg titclass">
      <img src="https://img2.epetbar.com/nowater/2017-12/13/13/c07935b6d02b84cf457c3eaa40f95677.jpg">
    </div>
    <div class="more titclass fr">
      <a href="https://wap.epet.com/main.html?menu_param=121&amp;pet_type=dog&amp;is_single=1&amp;fw=0">
        <img src="https://img2.epetbar.com/nowater/2017-12/13/13/e37e5a0b4da02d65c3fbed58c8174e1d.jpg">
      </a>
    </div>
    <div class="video_img">
      <img src="https://img1.epetbar.com/2017-12/13/13/bf5a66590af3b4c59f7bc0de38cb8060.jpg@!500w0h" >
      <span class="cmallPlayIco"></span>
    </div>
    <div class="text ft12 c999 pad10 ftc">
      <div class="textover">KIWI KITCHENS狗罐头 一罐装下93%鲜肉</div>
      <div class="textbottom">
        <span class="cmallViewIco"></span>
        <i>15502</i>
        <span>|</span>
        02:15
      </div>
    </div>
  </div>
</template>
<script>
  export default{}

</script>
<style lang="stylus" rel="stylesheet/stylus">
.titmoudle
  position relative
  padding-top  15px
  .titclass
    & img
      max-width: 50%;
      max-height: 73px;
  .more
    position: absolute;
    top: 17px
    right 0px
    & img
      margin-right -20px
      margin-left 60px
  .video_img
    position relative
    width 100%
    img
      width 100%
    .cmallPlayIco
      position absolute
      left 50%
      top 50%
      margin -10px 0 0 -10px
      display inline-block
      width 20px
      height 20px
      background  url("../common/img/play.png") no-repeat
      background-size cover


  .text
    width 100%
    padding 10px
    height 58px
    font-size 12px
    color: #999
    div
      text-align center
    .textover
      color #333
    .textbottom
      .cmallViewIco
        display inline-block
        width 10px
        height 9px
        background url("../common/img/view-black.png") no-repeat
        background-size cover
</style>
