<template>
    <div class="list-header">
           <div class="list-header-left">
                <a href="javascript:history.go(-1)">
                <i class="iconfont icon-xiangzuo"></i></a>
           </div>
           <div class="list-header-center">
                <router-link tag="div" class="list-header-box" :to="'/search'">
                     <i class="iconfont icon-sousuo-sousuo"></i>
                     <input type="text" class="list-search" placeholder="请输入关键字">
                </router-link>
           </div>
           <div class="list-header-right">
                <i class="iconfont icon-androidmorehorizontal" @click="show = !show"></i>
                <div class="list-link" v-show="show">
                    <ul>
                        <router-link tag="li" v-for="obj in linkData" :to="obj.turn">
                            <i :class="obj.icon"></i><span>{{obj.span}}</span>
                        </router-link>
                    </ul>
                    <span class="list-duihua"></span>
                </div>
           </div>
        </div>
</template>

<script>
    import './list-top.scss'
    export default{
        data:function(){ 
            return {
                show:false,
                linkData:[
                    {icon:'iconfont icon-shouyeshouye',span:'首页',turn:'/'},
                    {icon:'iconfont icon-gouwuche',span:'购物车',turn:'/car'},
                    {icon:'iconfont icon-iconfonticonfontwode1',span:'我的商城',turn:'/mystore'},
                    {icon:'iconfont icon-xiaoxi',span:'消息',turn:'/mystore'}
                ]
            }
        }
    }
</script>