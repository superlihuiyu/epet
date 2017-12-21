<template>
    <div class="brandsmask" v-if="maskisShow">
      <div class="brands-header">
        <div class="header-top">
          <span class="brands-arrow" @click="goblack"></span>
          <span class="brands-title">全部品牌</span>
          <span class="carticon" @click="hide"></span>
        </div>
        <transition name="fade">
          <div class="header-quick " v-show="headerisShow">
          <a href="https://wap.epet.com/main.html?pet_type=dog">
            <span class="icon1"></span>
            <p>首页</p>
          </a>
          <a href="https://wap.epet.com/category.html">
            <span class="icon2"></span>
            <p>商品分类</p>
          </a>
          <a href="https://wap.epet.com/cart/">
            <span class="icon4" id="getCartNum"><em>0</em></span>
            <p>购物车</p>
          </a>
          <a href="https://wap.epet.com/user/UserCenter.html">
            <span class="icon5"></span>
            <p>我的e宠</p>
          </a>
        </div>
        </transition>
      </div>
        <div class="content" >
          <scroller :on-refresh="refresh"
                    :on-infinite="infinite">
            <div  v-if="brands">
               <div class="brand-item" :id="`item-${brand.order}`" v-for="(brand,index) in brands" :key="index">
              <h2>{{brand.order}}</h2>
              <div v-for="(list,index1) in brand.list" :key="index1">
                <a href="https://wap.epet.com/brand/bd1.html?fw=0" class="db">
                  <div class="brand-wrapper clearfix">
                    <div class="fl brand-img">
                      <img :src="list.logo" alt="" class="img">
                    </div>
                    <div class="fl brand-name">
                      <p class="ft14">{{list.name}}</p>
                      <p class="ft12 c999">{{list.address}}</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            </div>
          </scroller>
      </div>

    </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScorll from 'better-scroll'
  export default{
    props:{
      maskisShow:Boolean,
    },
    data(){
      return{
        headerisShow:false
      }
    },
    mounted(){

    },
    computed:{
      ...mapState(['brands'])
    },

    methods:{
      goblack(){
        var footerNodes=document.querySelector('.footer')
        footerNodes.style.display='block'
        this.$router.back()
      },
      hide (){
        this.headerisShow=!this.headerisShow
      }
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .brandsmask
    position absolute
    top:0
    left 0
    width 100%
    height 100%
    overflow hidden
    z-index 13
    background-color white
    .brands-header
      .header-top
        height: 50px;
        padding: 0 10px;
        line-height: 50px;
        position: relative;
        border-bottom: 1px solid #f3f3f3;
        .brands-arrow
          display: block;
          position: absolute;
          margin-top: 16px;
          background: url('../../common/img/img.png') no-repeat;
          background-size: 234px 159px;
          background-position: -201px -10px;
          height: 18px;
          width: 11px;
        .brands-title
          display inline-block
          text-align center
          font-size 18px
          width 100%
          padding 0 10%
        .carticon
          position absolute
          top: 16px
          right 10px
          background: url('../../common/img/img.png') no-repeat;
          background-size: 234px 163px;
          height: 18px;
          width: 17px;
          background-position: -217px -10px;
          display block
          outline: 0;
          z-index 16
      .header-quick
        width: 100%;
        background: #fff;
        border-bottom: 1px solid #d7d7d7;
        overflow: hidden;
        padding: 10px 0;
        a
          display: inline-block;
          width: 25%;
          text-align: center;
          float: left;
          span
            display block
            background: url('../../common/img/img.png') no-repeat;
            background-size: 234px 163px;
            height: 25px;
            width: 25px;
            margin: 0 auto;
          .icon1
            background-position: -172px -7px;
          .icon2
            background-position: -172px -49px;
          .icon4
            background-position: -172px -90px;
            em
              display: inline-block;
              height: 22px;
              width: 22px;
              color: #fff;
              text-align: center;
              line-height: 18px;
              font-size: 12px;
              background: red;
              border-radius: 1em;
              border: #fff solid 2px;
              position: relative;
              top: -.5em;
              left: 1em;
          .icon5
            background-position: -172px -133px;


      .fade-enter-active, .fade-leave-active
        transition: all .5s
      .fade-enter,.fade-leave-to
        transform: translateY(-10px);
        opacity: 0;
    .content
      position relative
      height 100%
      background: #f3f4f5;
      .brand-item
        h2
          background: #f3f4f5;
          text-indent: 15px;
          line-height: 24px;
        div
          .db
            background-color white
            display block
            .brand-wrapper
              padding: 10px;
              border-bottom: 1px solid #f3f4f5;
              margin-right: 20px;
              .brand-img
                display inline-block
                width: 30%;
                max-width: 150px;
                height: 50px;
                border: 1px solid #f3f4f5;
                padding-top: 50px;
                position relative
                .img
                  max-width: 90%;
                  height: 40px;
                  margin: 5px auto;
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
              .brand-name
                width 40%
                margin: 0 0 5px 20px;
                display: inline-block;
                p
                  display: block;
                  font-size 14px
                  color: #000
                  &:nth-child(2)
                    font-size 12px
                    color: #999


</style>
