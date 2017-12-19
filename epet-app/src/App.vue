<template>
  <div>
      <router-view></router-view>
    <div class="footer">
      <ul class="clearfix">
        <li @click="changeColor">
          <router-link to="/app"><span class="shouye"></span></router-link>
        </li>
        <li @click="changeColor">
          <router-link to="/classification" @click="changeColor"><span class="fenlei"></span></router-link>
        </li>
        <li @click="changeColor">
          <router-link to="/shoppingcart" @click="changeColor"><span class="shop"></span></router-link>
        </li>
        <li @click="changeColor">
          <router-link to="/mine" @click="changeColor"><span class="my"></span></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data　(){
    return{
      x:0
    }
  },
  mounted(){
    this.$store.dispatch('getHome')
  },
  methods:{
    changeColor (ev) {
      ev=ev||event
      var spanNodes=document.querySelectorAll('.footer>ul>li>a>span')
      for (var i=0;i<spanNodes.length;i++){
        spanNodes[i].style.backgroundPositionX='-85px'
      }
      ev.target.style.backgroundPositionX='0'
    }
  },
  components:{
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
          text-align center
          span
            display inline-block;
            margin-top: 2px;
            width 42px
            height 40px
            background url("./common/img/img.png") no-repeat
            background-size 560%
        .shouye
          background-position-x 0
          background-position-y 0
        .fenlei
          background-position -85px -41px
        .shop
          background-position -85px -81px
        .my
          background-position -85px -122px




</style>
