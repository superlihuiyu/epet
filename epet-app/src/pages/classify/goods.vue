<template>
  <div class="nav-goods">
    <div class="nav-name"  ref="list">
      <ul class="nav-list">
        <li v-for="(category,index3) in classify.categorys" @click="changeBgcolor">{{category.name}}</li>
      </ul>
    </div>
    <div class="nav-msg">
        dsdsgvsd
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  import BScroll from 'better-scroll'
  export default {
    data() {
      return {}
    },
    mounted(){
      new BScroll(this.$refs.list, {
        scrollY: true,
        click:true
      })
    },
    methods:{
      changeBgcolor(ev){
        ev=ev||event
        var listNodes=document.querySelectorAll('.nav-list>li');
        for (var i=0;i<listNodes.length;i++){
          listNodes[i].style.backgroundColor='#fff';
          listNodes[i].style.color='black'
        }
        ev.target.style.backgroundColor='#f3f4f5';
        ev.target.style.color='red';
      }
    },
    computed: {
      ...mapState(['classify'])
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .nav-goods
    clearFix()
    padding 5px 0
    background: #f3f4f5;
    position relative
    top 0
    width 100%
    height 582px
    .nav-name
      width 70px
      height 100%
      background #f3f4f5
      overflow hidden
      .nav-list
        li
          border-1px(#f3f4f5)
          width 70px
          height 50px
          background-color #fff
          font-size 13px
          line-height 50px
          text-align center
    .nav-msg
      position absolute
      left 70px
      top 0
      width 100%
      height 100%
      font-size 50px
</style>
