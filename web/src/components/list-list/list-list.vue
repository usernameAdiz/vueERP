<template>
    <div class="list-list-container">
        <div class="list-list-header">
             <list-top></list-top>
        </div>
        <div class="list-list-select">
            <ul class="list-list-ul">
                <li class="list-paixu" @click="status =!status">{{msg}}<i class="iconfont icon-xiasanjiao-copy"></i>
                    <div class="list-select-status" v-if="status">
                        <ul class="list-select-ul">
                           <li>综合排序</li>
                           <li @click="paixu1">价格从高到低</li>
                           <li @click="paixu2">价格从低到高</li>
                           <li>人气排序</li>
                        </ul>
                    </div>
                </li>
                <li @click="paixu3">销量优先</li>
                <li class="list-select-judge" @click.stop="animation1">筛选<i class="iconfont icon-xiasanjiao-copy"></i>
                      <div class="select-docs" :class="animation">
                            <div class="select-header">
                                <a href="javascript:history.go(-1)">
                                    <i class="iconfont icon-xiangzuo"></i>
                                </a>
                                <span>商品筛选</span>
                                <span class="select-reset">重置</span>
                            </div>
                            <div class="select-main">
                                <div class="select-price">
                                    <p class="select-div">价格区间</p>
                                    <div>
                                        <input type="text" placeholder="最低价"> — <input type="text" placeholder="最高价">
                                    </div>
                                </div>
                                <div class="select-city">
                                    <p class="select-div">商品所在地</p>
                                    <div>
                                        <select name="city">
                                            <option value="不限">不限</option>
                                            <option value="北京">北京</option>
                                            <option value="天津">天津</option>
                                            <option value="河北">河北</option>
                                            <option value="内蒙古">内蒙古</option>
                                            <option value="辽宁">辽宁</option>
                                            <option value="吉林">吉林</option>
                                            <option value="黑龙江">黑龙江</option>
                                            <option value="上海">上海</option>
                                            <option value="江苏">江苏</option>
                                            <option value="浙江">浙江</option>
                                            <option value="安徽">安徽</option>
                                            <option value="福建">福建</option>
                                            <option value="江西">江西</option>
                                            <option value="山东">山东</option>
                                            <option value="河南">河南</option>
                                            <option value="湖北">湖北</option>
                                            <option value="湖南">湖南</option>
                                            <option value="广东">广东</option>
                                            <option value="广西">广西</option>
                                            <option value="海南">海南</option>
                                            <option value="重庆">重庆</option>
                                            <option value="四川">四川</option>
                                            <option value="贵州">贵州</option>
                                            <option value="云南">云南</option>
                                            <option value="西藏">西藏</option>
                                            <option value="陕西">陕西</option>
                                            <option value="甘肃">甘肃</option>
                                            <option value="青海">青海</option>
                                            <option value="宁夏">宁夏</option>
                                            <option value="新疆">新疆</option>
                                            <option value="台湾">台湾</option>
                                            <option value="香港">香港</option>
                                            <option value="澳门">澳门</option>
                                            <option value="海外">海外</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <p class="select-div">商品类型</p>
                                    <div id="select_1" @click="select1($event)">
                                        <span>赠品</span>
                                        <span>团购</span>
                                        <span>限时团购</span>
                                        <span>虚拟</span>
                                    </div>
                                </div>
                                <div>
                                    <p class="select-div">店铺类型</p>
                                    <div>
                                        <span :class="{'span-active':active}" @click="active = !active">平台自营</span>
                                    </div>
                                </div> 
                                <div>
                                    <p class="select-div">店铺服务</p>
                                    <div id="select_1" @click="select1($event)">
                                        <span>7天退货</span>
                                        <span>品质承诺</span>
                                        <span>破损补寄</span>
                                        <span>急速物流</span>
                                    </div>
                                </div>
                                <div>
                                    <button @click.stop="animation2">筛选商品</button>
                                </div>
                            </div>
                     </div>
                </li>
            </ul>
            <div class="list-list-fenlei">
                <i class="iconfont icon-fenlei1" v-if="show" @click="show = !show"></i>
                <i class="iconfont icon-fenlei" v-if="!show" @click="show = !show"></i>
            </div>
        </div>
        <div class="list-list-main">
            <div class="list-single" v-if="show">
                <ul class="list-single-ul">
                    <li v-for="obj in dataList">
                        <div class="list-img">
                             <router-link :to="'/goods?id='+obj.uid">
                            <img :src="'src/assets/imgs/'+ obj.cal_pic[0]" alt="">
                        </router-link>
                        </div>
                        <div class="list-goodsmsg">
                            <div class="list-goodsname">
                                <span class="list-good-sort">{{obj.brand}}</span>
                                <span class="list-good-name">{{obj.name}}</span>
                            </div>
                            <div class="list-good-price">{{obj.price}}</div>
                            <div class="list-good-sale">
                                <span>销量</span><span class="list-good-saleqty">{{obj.sales}}</span>
                                <span class="list-good-type">自营</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="list-double" v-if="!show">s
                <ul class="list-double-ul">
                    <li v-for="obj in dataList">
                        <router-link :to="'/goods?id='+obj.uid">
                            <img :src="'src/assets/imgs/'+ obj.cal_pic[0]" alt="">
                        </router-link>
                        <div class="list-goodsmsg">
                            <div class="list-goodsname">
                                <span class="list-good-sort">{{obj.brand}}</span>
                                <span class="list-good-name">{{obj.name}}</span>
                            </div>
                            <div class="list-good-price">{{obj.price}}</div>
                            <div class="list-good-sale">
                                <span>销量</span><span class="list-good-saleqty">{{obj.sales}}</span>
                                <span class="list-good-type">自营</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import listTop from '../list/list-top/list-top.vue'
    import http from '../../utils/HttpClient'
    import './list-list.scss'
    import $ from 'jquery'
    export default{
        components:{
           'list-top':listTop,
        },
        data(){
            return {
                show:true,
                status:false,
                active:false,
                animation:'',
                msg:'综合排序',
                dataList:null
            }
        },
        methods:{
            animation1(){
                this.animation ='active1';
                console.log(12);
            },
            animation2(){
                this.animation = 'active2';
                console.log(this.animation);
            },
            select1(e){
                $(e.target).closest('span').toggleClass('span-active');
            },
            //价格从高到低排序
            paixu1(){
                this.msg = '价格高到低';
                this.dataList.sort(function(a,b){
                    return Number(b.price) - Number(a.price);
                })
            },
            //价格从低到高排序
            paixu2(){
                this.msg = '价格低到高';
                this.dataList.sort(function(a,b){
                    return Number(a.price) - Number(b.price);
                })
            },
            //按销量排序
            paixu3(){
                this.dataList.sort(function(a,b){
                    return Number(b.sales) - Number(a.sales);
                })
            }
        },
        created(){
            var key = Object.keys(this.$route.query)[0];
            if (key =='keyword') {
                http.get('search', {'keyword':this.$route.query[key]}).then(response => {
                    console.log(response)
                    if (response.status) {
                        this.dataList = response.data;
                    }else{
                        
                    }           
                });
            }else if(key == 'brand'){
                http.post('produtname',{brand:this.$route.query[key]}).then(response=>{
                    // console.log(response.data.data);
                    console.log(response.data.data)
                    // response.data.data.cal_pic  = response.data.data.cal_pic.split(',')
                    this.dataList = response.data.data;
                })
            }
            
		},
    }
</script>