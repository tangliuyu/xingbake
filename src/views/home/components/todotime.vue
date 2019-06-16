<template>
  <li
    @click="$router.push({
      name:`detail`,
      params:{
        type:val.list_type,
        id:val.applicationNumber
      }
    })"
  >
    <p>
      <span>{{val.applicationNumber}}</span>
      <span>
        <i class="iconfont icon-73dengdai"></i>待审批
      </span>
    </p>
    <div class="inner_list">
      <dl>
        <dt>申请人</dt>
        <dd>{{val.nickname}}</dd>
      </dl>
      <dl>
        <dt>加班类型</dt>
        <dd>{{settype}}</dd>
      </dl>
      <dl>
        <dt>加班日期</dt>
        <dd>{{new Date(val.startTime).toLocaleDateString()}}</dd>
      </dl>
      <dl>
        <dt>加班时数</dt>
        <dd>{{reducetime}}</dd>
      </dl>
    </div>
  </li>
</template>
<script>
import { showType } from "@/utils/computedTime";
export default {
  props: {
    val: Object
  },
  computed: {
    settype() {
      return showType(this.val.type, this.val.list_type);
    },
    reducetime(start, end) {
      let start_num = new Date(new Date(this.val.startTime).toGMTString()) * 1;
      let end_num = new Date(new Date(this.val.endTime).toGMTString()) * 1;
      let num = (end_num - start_num) / 1000;
      let day = (num / 60 / 60 / 24).toFixed(1);
      return day;
    }
  },
};
</script>
<style lang="scss" scoped>
@import "@/static/scss/common.scss";
li {
  width: 100%;
  height: pxTorem(110px);
  overflow: hidden;
  background: #fff;
  display: flex;
  flex-direction: column;
  margin-top: pxTorem(10px);
  padding: pxTorem(10px) pxTorem(15px);
  box-sizing: border-box;
  p:nth-child(1) {
    width: 100%;
    height: pxTorem(30px);
    display: flex;
    justify-content: space-between;
    color: #969696;
    span {
      i {
        font-size: pxTorem(20px);
        margin-right: pxTorem(5px);
        color: #f7d536;
      }
    }
  }

  .inner_list {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    dl {
      width: 45%;
      display: flex;

      font-size: pxTorem(14px);
      line-height: pxTorem(30px);

      dt {
        width: 40%;
        color: #969696;
      }
      dd {
        margin-left: pxTorem(15px);
      }
    }
  }
}
</style>
