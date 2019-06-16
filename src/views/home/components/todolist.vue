<template>
  <ul class="content">
    <Todotime v-for="val in todolist" :key="val.applicationNumber" :val="val"/>
  </ul>
</template>  
<script>
import { showType } from "@/utils/computedTime";
import Todotime from "./todotime";
export default {
  props: {
    todolist: Array
  },
  components: {
    Todotime
  }
};
</script>
<style lang="scss" scoped>
@import "@/static/scss/common.scss";
.content {
  flex: 1;
  overflow-y: auto;
}
</style>
