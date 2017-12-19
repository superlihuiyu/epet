<template>
  <div class="classification-msg">
    <div class="head-class">
      <ul>
        <li><router-link to="/classification/goods" >分类</router-link></li>
        <li><router-link to="/classification/brand">品牌</router-link></li>
      </ul>
      <div class="classification-search">
        <img src="./search.png" alt="" class="img-search">
      </div>
    </div>

    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    mounted(){
      this.$store.dispatch('getClassify')
    },
    computed: {},

    methods: {
    },
    components: {


    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .classification-msg
    clearFix()
    position fixed
    top 0
    width 100%
    height 100%
    .head-class
      position relative
      background #fff
      z-index: 9;
      ul
        height 39px
        padding 0 15px
        border-bottom 1px solid #cbcbcb
        display flex
        li
          width 0
          flex 1
          font-size 13px
          font-weight 700
          line-height 40px
          height 100%
          margin-right  17px
          &:nth-child(1)
            text-align right
          &:nth-child(2)
            margin:0 0 0 17px
            text-align left
          .router-link-exact-active
            display inline-block
            height 100%
            text-align center
            border-bottom 2px solid #ed4044
            color #ed4044
          .head-class-brand
            margin-left  17px

      .classification-search
        position absolute
        top 13px
        right 15px
        width 14px
        height 14px
        .img-search
          width 100%
          height  100%

</style>
