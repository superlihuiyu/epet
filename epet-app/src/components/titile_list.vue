
<template>
  <div class="titmoudle2">
    <div class="leftimg2 titclass">
      <img :src="listMessage.left.img.image">
    </div>
    <div class="more2 titclass fr">
      <a :href="listMessage.left.img.target.param">
        <img :src="listMessage.right.img.image">
      </a>
    </div>
    <div class="boximg">
      <div v-for="(imgPath,index) in listImg" :key="index">
        <div class="divimg" v-if="imgPath.target">
          <a :href="imgPath.target.param">
            <img :src="imgPath.image">
          </a>
        </div>
        <pageline_com/>
      </div>
    </div>
  </div>
</template>
<script>
  import pageline_com from './pageline.vue'
  export default{
    props:{
      listMessage:Object,
      listImg:Array
    },
    components:{
      pageline_com
    }

  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .titmoudle2
    position relative
    padding-top  15px
    .titclass
      & img
        max-width: 50%;
        max-height: 73px;
    .more2
      position: absolute;
      top: 17px
      right 0px
      & img
        margin-right -20px
        margin-left 60px


    .boximg
      width 100%
      .divimg
        width 100%
        a
          display inline-block
          width 100%
          height 160px
          img
            display inline-block
            width 100%

</style>
