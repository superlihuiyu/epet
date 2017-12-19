<template>
  <div class="titmoudle">
    <div class="leftimg titclass">
      <img :src="video_title.left.img.image">
    </div>
    <div class="more titclass fr">
      <a :href="video_content.share_target.param.url">
        <img :src="video_title.right.img.image">
      </a>
    </div>
    <div class="video_img">
      <a :href="video_content.share_target.param.url">
        <img :src="video_content.share_target.param.image" >
        <span class="cmallPlayIco"></span>
      </a>
    </div>
    <div class="text ft12 c999 pad10 ftc">
      <div class="textover">{{video_content.title}}</div>
      <div class="textbottom">
        <span class="cmallViewIco"></span>
        <i>{{video_content.visit}}</i>
        <span>|</span>
        {{video_content.video_size}}
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      video_title:Object,
      video_content:Object
    }
  }

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
