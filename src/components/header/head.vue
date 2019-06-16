<template>
  <header class="header">
    <p v-if="back" @click="$router.back()">
      <i class="iconfont icon-fanhui"></i>
    </p>
    <p class="center_title">{{titletext}}</p>
    <!-- <p class="btn_top">
      <i class="iconfont icon-daiban"></i>
      <i class="iconfont icon-fangdajing"></i>
    </p> -->
    <div class="btn_top"><slot></slot></div>
  </header>
</template>
<script>
export default {
    props:{
        back:{
            default:true,
            type:Boolean
        },
        title:{
            default:'',
            type:String
        }
    },
    computed:{
      titletext(){
        return this.title ? this.title : this.$route.meta.title
      }
    }
};
</script>
<style lang="scss" scoped>
@import "@/static/scss/common.scss";
  .header {
    width: 100%;
    height: pxTorem(44px);
    display: flex;
    justify-content: space-between;
    padding: 0 pxTorem(15px);
    line-height: pxTorem(44px);
    box-sizing: border-box;
    color: #000;
    background: #ffffff;
    .iconfont {
      font-size: pxTorem(18px);
    }
    .center_title {
      flex: 1;
      text-align: center;
      margin-left: pxTorem(20px);
      font-size: pxTorem(18px);
    }
    .btn_top{
      margin: 0 pxTorem(5px);
    }
  }

</style>
