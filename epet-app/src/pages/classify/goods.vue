<template>
  <div class="nav-goods" v-if="classify.categorys">
    <scroller>
      <div class="nav-name">
      <ul class="nav-list">
        <li v-for="(category,index) in classify.categorys" :key="index" @click="changeBgcolor(index)">{{category.name}}</li>
      </ul>
    </div>
    </scroller>
    <catasgood :category="classify.categorys[listIndex]"/>
  </div>
</template>

<script>
  import catasgood from './catasGood.vue'
  import {mapState} from 'vuex'

  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        listIndex:0
      }
    },
    mounted(){
    },
    methods:{
      changeBgcolor(index,ev){
        ev=ev||event
        var listNodes=document.querySelectorAll('.nav-list>li');
        for (var i=0;i<listNodes.length;i++){
          listNodes[i].style.backgroundColor='#fff';
          listNodes[i].style.color='black'
        }
        ev.target.style.backgroundColor='#f3f4f5';
        ev.target.style.color='red';
        this.listIndex=index
      }
    },
    computed: {
      ...mapState(['classify'])
    },
    components:{
      catasgood
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .nav-goods
    clearFix()
    padding 5px 0
    height 100%
    background: #f3f4f5;
    position relative
    top 0
    .nav-name
      width 20%

      background #f3f4f5
      overflow hidden
      .nav-list
        height 120%
        li
          border-1px(#f3f4f5)
          width 70px
          height 50px
          background-color #fff
          font-size 13px
          line-height 50px
          text-align center
          &:nth-child(1)
            background-color #f3f4f5
            color: red
    .nav-msg
      position absolute
      left 70px
      top 0
      font-size 50px
</style>
