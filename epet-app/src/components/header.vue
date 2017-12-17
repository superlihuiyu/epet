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
          <li data-type="0" data-shareid="1" class="dscroll-li on" style="width: 74.5px;">
            <a href="https://wap.epet.com/main.html?menu_param=0&amp;pet_type=dog&amp;fw=0">
              <span class="rela">
                <span>首页</span>
                <i></i>
              </span>
            </a>
          </li>
          <li data-type="" data-shareid="0" class="dscroll-li" style="width: 74.5px;">
            <a href="https://wap.epet.com/clothmall/main.html?pet_type=dog&amp;fw=0">
              <!---->
              <span class="rela">
                <span>服饰城</span>
                <i></i>
              </span>
            </a>
          </li>
          <li data-type="123" data-shareid="372" class="dscroll-li" style="width: 74.5px;">
            <a href="https://wap.epet.com/main.html?menu_param=123&amp;pet_type=dog&amp;is_single=1&amp;fw=0">
              <!---->
              <span class="rela">
                <span>狗狗主粮</span>
                <i></i>
              </span>
            </a>
          </li>
          <li data-type="125" data-shareid="374" class="dscroll-li" style="width: 74.5px;">
            <a href="https://wap.epet.com/main.html?menu_param=125&amp;pet_type=dog&amp;is_single=1&amp;fw=0">
              <!---->
              <span class="rela">
                <span>医疗保健</span>
                <i></i>
              </span>
            </a>
          </li>
          <li data-type="131" data-shareid="375" class="dscroll-li" style="width: 74.5px;">
            <a href="https://wap.epet.com/main.html?menu_param=131&amp;pet_type=dog&amp;is_single=1&amp;fw=0">
              <!---->
              <span class="rela">
                <span>零食玩具</span>
                <i></i>
              </span>
            </a>
          </li>
          <li data-type="134" data-shareid="0" class="dscroll-li" style="width: 74.5px;">
            <a href="https://wap.epet.com/main.html?menu_param=134&amp;pet_type=dog&amp;is_single=1&amp;fw=0">
              <!---->
              <span class="rela">
                <span>日用外出</span>
                <i></i>
              </span>
            </a>
          </li>
          <li data-type="140" data-shareid="371" class="dscroll-li" style="width: 74.5px;">
            <a href="https://wap.epet.com/main.html?menu_param=140&amp;pet_type=dog&amp;is_single=1&amp;fw=0">
              <!---->
              <span class="rela">
                <span>美容香波</span>
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

    mounted(){
      new BScroll(this.$refs.menuWrapper, {
        scrollX: true
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
    color :green;
  }
  .dscroll-ul li:nth-child(1) a i {
    position: relative;
    left: 18px;
    display: block;
    width: 35px;
    height: 2px;
    background: green;
  }
</style>
