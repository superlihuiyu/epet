<template>
  <div>
      <router-view></router-view>
    <div class="footer" v-if="isShow">
      <ul class="clearfix">
        <li>
          <router-link to="/app" class="shouye"></router-link>
        </li>
        <li>
          <router-link to="/classification" class="fenlei"></router-link>
        </li>
        <li>
          <router-link to="/shoppingcart" class="shop" ></router-link>
        </li>
        <li>
          <router-link to="/mine" class="my"></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data　(){
    return{
      isShow:true
    }
  },
  mounted(){
    this.$store.dispatch('getHome')
    this.$store.dispatch('getBrands')
  },
  methods:{
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
    display block
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
          margin-top: 2px;
          width 42px
          height 40px
          background url("./common/img/img.png") no-repeat
          background-size 560%
        .shouye
          background-position-x -85px
          background-position-y 0
        .fenlei
          background-position -85px -41px
        .shop
          background-position -85px -81px
        .my
          background-position -85px -122px
        .router-link-exact-active
          background-position-x -42px
        .active
          background-position-x -42px




</style>
