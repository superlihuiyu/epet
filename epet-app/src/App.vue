<template>
  <div>
    <router-view></router-view>
    <div class="footer">
      <ul class="clearfix">
        <li>
          <router-link to="/app"><span class="shouye"></span></router-link>
        </li>
        <li>
          <router-link to="/classify"><span class="fenlei"></span></router-link>
        </li>
        <li>
          <router-link to="/shoppingcart"><span class="shop"></span></router-link>
        </li>
        <li>
          <router-link to="/mine"><span class="my"></span></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import app_com from './components/app.vue'
export default {
    data (){
      return{

      }
    },
  components:{
    app_com
  }

}
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
            background url("./common/img/img.png") no-repeat
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
