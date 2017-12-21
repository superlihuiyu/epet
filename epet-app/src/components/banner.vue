<template>
  <div class="banner_item">
    <div class="swiper-wrapper">
      <mt-swipe :auto="3000" class="mt-swipe">
        <mt-swipe-item v-for="(imgMessage,index) in imgSrc" :key="index">
          <a :href="imgMessage.target.param">
            <img :src="imgMessage.image">
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>
<script>
  export default{
    props:{
      imgSrc:Array
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .banner_item
    .swiper-wrapper
      .mt-swipe
        width 100%
        height 160px
        img
          height 100%
</style>
