<template>
  <div class="type_box" v-show="show">
      <div class="type_box_top" @click.self="$emit('close')"></div>
        <div class="add_list_type">
            <dl class="orange">
                <dt>
                    <i class="iconfont icon-diannao2"></i>
                </dt>
                <dd>
                    加班
                </dd>
            </dl>
            <dl class="green">
                <dt>
                    <i class="iconfont icon-dujia"></i>
                </dt>
                <dd>
                    休假
                </dd>
            </dl>
        </div>
  </div>
</template>
<script>
export default {
    props:{
        show:Boolean
    }
}
</script>
<style lang="scss" scoped>
@import "@/static/scss/common.scss";
  .type_box{
      width:100%;
      height:100%;
      display:flex;
      flex-direction:column;
      position:fixed;
      top:0;

      left:0;
      .type_box_top{
          flex:1;
            background:rgba(0, 0, 0, 0.5);

      }
       .add_list_type{
      width:100%;
      height:pxTorem(120px);
      background:#fff;
      position:fixed;
      bottom:0;
      left:0;
      padding:pxTorem(25px) pxTorem(40px);
      box-sizing:border-box;
      display:flex;
      justify-content:space-between;

      dl{
        flex:1;
        text-align:center; 
        dt{
            width:pxTorem(40px);
            height:pxTorem(40px);
            border-radius:50%;
            background:orange;
            margin:0 auto;
            text-align:center;
            line-height:pxTorem(40px);
            font-size:pxTorem(25px);
            color:#fff;

        }
        dd{
            margin-top:pxTorem(10px);
        }
      }

      .green{
          dt{
              background:#79bd72;
          }
      }
      .orange{
          dt{
              background:#ffad36;
          }
      }
  }
  }
</style>
