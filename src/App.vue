<template>
  <div id="app">
    <!-- Nh  -->
    <router-view />
  </div>
</template>
<script>
export default {
  data(){
    return{
    }
  }
}
</script>

<style lang="scss" scoped>
@import './static/scss/_minix.scss';
#app{
    @include sizing;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
</style>
