<template>
    <div>
        <div class="header">
            <ul class="listUl">
                <li><span class="iconfont listLi1 icon-arrow-left"></span></li>
                <li>加班/休假</li> 
                <li><span class="iconfont listLi2 icon-zixun"></span><span class="iconfont listLi3 icon-fangdajing"></span></li>
            </ul>
            <div class="listDl">
                <dl>
                    <dt class="iconfont icon-05"></dt>
                    <dd>待处理</dd>
                </dl>
                <dl>
                    <dt class="iconfont icon-07"></dt>
                    <dd>已发送</dd>
                </dl>
                <dl>
                    <dt class="iconfont icon-yibangding"></dt>
                    <dd>已处理</dd>
                </dl>
            </div>
        </div>
        <div class="main">
            <div class="Main">
                <div class="left">
                    <span class="active">加班</span>
                    <span>休假</span>
                </div>
                <div class="rigth">
                    <span class="iconfont icon-17"></span>
                    <span class="iconfont icon-gengduo-2"></span>
                </div>
            </div>
            
            <div class="mains">
                <div class="listmain">       
                    <span>Q56546549856</span>
                    <span>待审批</span>
                </div>
                <div class="mainUl">
                    <ul>
                        <li>
                            <span class="ccc">申请人&nbsp;&nbsp;&nbsp;</span>
                            <span>王浩</span>
                        </li>
                        <li>
                            <span class="ccc">加班类型</span>
                            <span>工作日加班</span>
                        </li>
                        <li>
                            <span class="ccc">加班日期</span>
                            <span>2019-5-10</span>
                        </li>
                        <li>
                            <span class="ccc">加班时数</span>
                            <span>2.5</span>
                        </li>
                    </ul>
                </div>
                    <div class="listmain">       
                    <span>Q56546549856</span>
                    <span>待审批</span>
                </div>
                <div class="mainUl">
                    <ul>
                        <li>
                            <span class="ccc">申请人&nbsp;&nbsp;&nbsp;</span>
                            <span>王浩</span>
                        </li>
                        <li>
                            <span class="ccc">加班类型</span>
                            <span>工作日加班</span>
                        </li>
                        <li>
                            <span class="ccc">加班日期</span>
                            <span>2019-5-10</span>
                        </li>
                        <li>
                            <span class="ccc">加班时数</span>
                            <span>2.5</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>  
    </div>
   
</template>
<script>

export default {
    
}
</script>
<style lang="scss" scoped>
.header{
  font-size:0.4rem;
  width: 100%;
  .listUl{
    display: flex;
    height: 1rem;
    line-height: 1rem;
    li{
    flex: 1;
    text-align: center
    }
  }
}

.header .listDl{
    width: 90%;
    margin: 0.3rem auto;
    display: flex;
     font-size:0.3rem;dl{
    flex:1;
    text-align: center
    }
}

.iconfont{
    font-size: 0.6rem;
}
.listLi1,.listLi2,.listLi3{
    font-size: 0.4rem;
}
.listLi3{
    margin: 0 0 0 0.5rem;
}
.main{
    width: 100%;
    height: 100%;
    margin-top: 1rem;
    .Main{
        display: flex;
    .left{
        width: 40%;
        display: flex;
        border:.01rem solid #333;
        border-radius:1rem;
        overflow: hidden;
        margin: 0 0 0 2.9rem;
        span{
            width: 100%;
            display: inline-block;
            font-size: 0.4rem;
            text-align: center;
            
        }
        .active{
                background: red;
                color: #fff;
        }
    }
    .rigth{
        margin-left: .5rem;
        span{
            margin-left: .4rem;
        }
    }
   
    } 
    .mains{
        width: 100%;
        font-size: 0.35rem;
        margin-top: 1rem;  
        background: #ccc;
        .listmain{
            display: flex;
            background: #fff;
            margin-top: .3rem;
           
            span{
                flex: 1;
                margin: 0 0 0.6rem 1rem;
                color: #ccc;
                // padding-top: .3rem;
                // margin-top: .3rem;
               
            }
        }
        .mainUl{
            height: 2rem;
            background: #fff;
           
            ul{    
                display: flex;
                flex-wrap: wrap;
                padding-left: 1rem;
                li{
                    width: 50%;
                    margin: 0 0 0.3rem 0;
                    span{
                       
                    }
                }
                .ccc{  
                    color: #ccc;
                    margin-right: .3rem;
                }
            }
        }
    }
}
</style>


