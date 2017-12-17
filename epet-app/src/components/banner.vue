<template>
  <div class="banner_item">
    <div class="swiper-wrapper">
      <mt-swipe :auto="3000" class="mt-swipe">
        <mt-swipe-item><img src="../common/img/c01.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../common/img/c02.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../common/img/c03.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../common/img/c04.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../common/img/c05.png" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>
<script>

  export default{}

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .banner_item
    .swiper-wrapper
      .mt-swipe
        width 100%
        height 160px
        img
          height 160px
</style>
