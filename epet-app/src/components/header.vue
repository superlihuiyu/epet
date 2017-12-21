<template>
  <div class="indexheader">
    <div class="indexnavcon">
      <div class="seacher clearfix">
        <div class="epet-search bgf">
          <div class="location">
            <span class="c89">狗狗站</span>
            <span class="c89">|</span>
            <span class="c89 ft">重庆</span>
            <i></i>
          </div>
          <p class="search-text">
            <a href="https://wap.epet.com/search.html?pet_type=dog&amp;fw=0">
              <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
              <span class="serach-ico"></span>
            </a>
          </p>
          <a href="https://wap.epet.com/wappms/pms.html?fw=0" class="epet-category">
            <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png">
          </a>
        </div>
      </div>
    </div>
    <div class="find-nav">
      <div class="find_nav_list " ref="menuWrapper">
        <ul class="dscroll-ul" style="width: 140%;">
          <li v-for="(menu,index) in menus">
            <a href="https://wap.epet.com/main.html?menu_param=0&amp;pet_type=dog&amp;fw=0">
              <span class="rela">
                <span>{{menu.menu_name}}</span>
                <i></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default{
    props:{
      menus:Array
    },
    mounted(){
      this.$nextTick(()=>{
        new BScroll(this.$refs.menuWrapper, {
          scrollX: true,
          click:true
        })
      })

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.indexheader
  position fixed
  left 0
  z-index 9
  background: #fff;
  width: 100%;
  box-shadow: 2px 2px 2px #E9E9EA

  .seacher{
    width: 100%;
    height: 51px;
    padding: 5px 10px;
  }
  .epet-search{

    padding: 8px 0;
    background: #fff;
    text-align: center;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    justify-content: space-between;
  }
  .location{
    position relative
    margin-right:20px;
  }
  .location>i{
    position: absolute;
    top: 10px;
    right: -11px;
    border-width: 4px;
    font-size: 0;
    line-height: 0;
    border-style: solid solid dotted;
    border-color: #898989 transparent transparent;
  }
  .search-text{
    position relative
    width :0;
    flex:1
  }
  .search-text .serach-ico{
    width: 11px;
    height: 11px;
    position: absolute;
    right: 5px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    background-position: 0 0;
    background url("../common/img/search.png")
    background-size: 11px auto;
  }
  .search-text input{
    width: 100%;
    border: 0;
    height: 25px;
    background: #e9e9e9;
    border-radius: 4px;
    color: #bcbcbc;
    text-indent: 10px;
    font-size: 13px;
    outline: 0;
  }
  .epet-category>img {
    width: 25px;
    height: 25px;
    margin-left 10px
  }


  .dscroll-ul{
    white-space: nowrap;
    display: flex;
  }
  .dscroll-ul li{
    text-align: center;
    width: 74.5px;
  }
  .dscroll-ul li a{
    display: block;
    width: 100%;
    height: 100%;
    line-height: 36px;
    font-size: 14px;
    text-align: center;
    color: #666;
  }
  .dscroll-ul li:nth-child(1) a{
    color: #e73f85;
  }
  .dscroll-ul li:nth-child(1) a i {
    position: relative;
    left: 18px;
    display: block;
    width: 35px;
    height: 2px;
    background: #e73f85;
  }
</style>
