<template>
    <div class="container">
      <dl :class="{
        active:value.index===index
      }"
      @click="change(value.index)"
      v-for="value in menudata"
      :key="value.index">
        <dt class="font_max">
          <i :class="'iconfont '+value.icon"></i>
        </dt>
        <dd>{{value.title}}</dd>
      </dl>
      
    </div>
</template>
<script>
export default {
    data(){
      return{
        index:0,
        menudata:[
          {
            title:"待处理",
            icon:'icon-shijian',
            index:0
          },
          {
            title:"已发起",
            icon:'icon-zhifeiji',
            index:1
          },{
            title:"已处理",
            icon:'icon-wancheng',
            index:2
          }
        ]
      }
    },
    methods:{
      change(index){
        this.index = index;
        this.$emit("change",index)
      }
    }
}
</script>
<style lang="scss" scoped>
@import "@/static/scss/common.scss";
  .container {
    width: 100%;
    height: pxTorem(90px);
    display: flex;
    text-align: center;
    justify-content: space-between;
    padding: pxTorem(10px) pxTorem(30px);
    box-sizing: border-box;
    font-size: pxTorem(15px);
    // border-bottom:1px solid #ccc;
    box-shadow: pxTorem(5px) pxTorem(6px) pxTorem(7px) #f0f0f0;
    background: #ffffff;

    dl {
      flex: 1;
      color: #cbc9c9;
      dt {
        width: 100%;
        height: pxTorem(35px);
        i {
          font-size: pxTorem(25px);
        }
      }

      &.active {
        color: #0d6646;
      }
    }
    .font_max {
      i {
        font-size: pxTorem(28px);
      }
    }
  }
</style>
