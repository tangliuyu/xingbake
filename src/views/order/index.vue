<template>
    <div>
       排序
       {{userinfo}}
    </div>
</template>
<script>
import request from "@/utils/request";
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
    // beforeRouteEnter (to, from, next) {
    //     request.get("/api/user/info").then(res=>{
    //         next()
    //     })
    //     console.log('beforeRouteEnter',to)
    // },
    // beforeCreate() {       
    // },
    computed: {
        ...mapState('user',['userinfo'])
    },
    methods:{
        ...mapActions('user',['getUserInfo'])
    },
    created(){
        this.getUserInfo();
        // this.$store.dispatch('user/getUserInfo')
    },
}
</script>
