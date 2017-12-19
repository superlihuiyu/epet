<template>
    <div>
      {{classify.data.login_status}}
    </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default{
    computed:{
      ...mapState(["classify"])
    },
    mounted(){
      this.$store.dispatch('getClassify')
    }

  }

</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
