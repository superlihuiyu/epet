<template>
  <div class="footer">
    <ul class="clearfix">
      <li>
        <a href="#"><span class="shouye"></span></a>
      </li>
      <li>
        <a href="#"><span class="fenlei"></span></a>
      </li>
      <li>
        <a href="#"><span class="shop"></span></a>
      </li>
      <li>
        <a href="#"><span class="my"></span></a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{}

</script>
<style lang="stylus" rel="stylesheet/stylus">
.footer
  position fixed
  bottom 0
  width 100%
  height 45px
  line-height 45px
  background-color white
  z-index 12
  border-top: 1px solid #e7e7e7;
  ul
    display flex
    li
      float left
      width 0
      flex 1
      text-align center
      a
        display inline-block
        span
          display inline-block;
          margin-top: 2px;
          width 42px
          height 40px
          background url("../common/img/img.png") no-repeat
          background-size 560%
      .shouye
        background-position 0px 0px
      .fenlei
        background-position -82px -40px
      .shop
        background-position -82px -82px
      .my
        background-position -82px -124px




</style>
