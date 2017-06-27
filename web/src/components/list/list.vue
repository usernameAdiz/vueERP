<template>
    <div class="list-container">
       <list-top></list-top>
        <div class="list-main">
            <div class="list-left">
                <ul class="list-left-ul">
                    <li v-for="(obj,index) in list" @click="changeStauts(index)" >
                        <router-link :to="obj.name" :class="{'list-active':activeIndex === index}">
                            <i :class="obj.icon"></i><br>
                            <span>{{obj.span}}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="list-right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    import './list.scss'
    import '../../assets/font/iconfont.css'
    import listTop from './list-top/list-top.vue'
    export default {
        components:{
            'list-top':listTop
        },
        data:function(){
            return {
                list:[{icon:'iconfont icon-star-outline',span:'品牌推荐',name:'/logo'},
                    {icon:'iconfont icon-star-outline',span:'唐夫人',name:'/tang'},
                    {icon:'iconfont icon-star-outline',span:'精品女包',name:'/nvbao'},
                    {icon:'iconfont icon-star-outline',span:'精品男包',name:'/nanbao'},
                    {icon:'iconfont icon-star-outline',span:'品牌箱包',name:'/trademark'},
                    {icon:'iconfont icon-lvxing',span:'旅行箱包',name:'/travel'},
                    {icon:'iconfont icon-star-outline',span:'功能箱包',name:'/use'},
                    {icon:'iconfont icon-beibao',span:'双肩背包',name:'/backpack'},
                    {icon:'iconfont icon-star-outline',span:'真皮包包',name:'/dermal'},
                    {icon:'iconfont icon-star-outline',span:'学生包',name:'/student'},
                    {icon:'iconfont icon-star-outline',span:'进货专区',name:'/stock'},
                    {icon:'iconfont icon-star-outline',span:'加盟店',name:'/franchisee'}
                ],
                activeIndex: 0,
            }
        },
        methods:{
            changeStauts:function(index){
                this.activeIndex = index;
            }
        }

    }
</script>