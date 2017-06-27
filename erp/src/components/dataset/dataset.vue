<template>
    <div>
    	<div class="layui-layer layui-anim layui-layer-page layui-layer-rim" id="layui-layer29" type="page" times="29" showtime="0" contype="string" style="z-index: 19891043; width: 770px; height: 400px; top: 20%; left: 25%;">
            <div class="layui-layer-title" style="cursor: move;" move="ok">修改信息
            </div>
            <div class="layui-layer-content" style="height: 330px;">
                <div style="padding:20px;">
                    <div class="dk-form">
            <form ref="clientForm" role="form" class="form-horizontal ng-pristine ng-valid">
                <div class="form-group">
                    <h3 class="ad-title"><span>基本信息</span></h3>
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">商品UID</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input type="text" name="uid" v-model="data.uid" class="form-control " disabled="true">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">名称</span>
                    </div>
                    <div class="col-sm-6">
                        <div class="dk-form-element">
                            <input type="text" name="name" v-model="data.name" class="form-control ">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">所属板块</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <select v-model="data.area"  name="area" class="form-control ">
                                <option value="home">Home</option>
                                <option value="list">List</option>
                            </select>
                        </div>
                    </div> 
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">展区</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input type="text" name="position" v-model="data.position" class="form-control ">
                        </div>
                    </div> 
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">品牌</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input type="text" name="brand" v-model="data.brand" class="form-control ">
                        </div>
                    </div> 
                </div>
                <div class="form-group"> 
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">商品描述</span>
                    </div>
                    <div class="col-sm-6">
                        <div class="dk-form-element">
                            <input type="text" name="title" v-model="data.title" class="form-control ">
                        </div>
                    </div>
                </div>
                <div class="form-group"> 
                     <div class="col-sm-1">
                        <span class="col-sm-12 control-label">价格</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input type="text" name="price" v-model="data.price" class="form-control ">
                        </div>
                    </div> 
                </div>  
                <div class="form-group"> 
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">库存</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <select v-model="data.residue"  name="residue" class="form-control ">
                                <option value="有货">Enough</option>
                                <option value="无货">None</option>
                            </select>
                        </div>
                    </div> 
                    
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">数量</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input type="text" name="account" v-model="data.account" class="form-control ">
                        </div>
                    </div> 

                </div> 
                
                <div class="form-group">
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">销量</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input type="text" name="sales" v-model="data.sales" class="form-control ">
                        </div>
                    </div> 
                </div>
                <div class="form-group"> 
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">颜色</span>
                    </div>
                    <div class="col-sm-6">
                        <div class="dk-form-element">
                            <input type="text" name="color" v-model="data.color" class="form-control ">
                        </div>
                    </div>
                </div>
                <div class="form-group"> 
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">型号</span>
                    </div>
                    <div class="col-sm-6">
                        <div class="dk-form-element">
                            <input type="text" name="size" v-model="data.size" class="form-control ">
                        </div>
                    </div> 
                </div>
                <div class="form-group">
                    <h3 class="ad-title"><span>图片信息</span></h3> 
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">轮播图片</span>
                    </div>
                    <div class="">
                        <div class="dk-form-element">
                            <input   type="file" name="cal_pic"  multiple style="fontSize:12px;marginTop:5px">
                        </div>
                    </div>
                </div>
                <div class="form-group"> 
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">详情图片</span>
                    </div>
                    <div class="">
                        <div class="dk-form-element">
                            <input   type="file" name="car_pic"  multiple style="fontSize:12px;marginTop:5px">
                        </div>
                    </div>                 
                </div>

                <div class="form-group" style="textAlign: center">
                    <a href="javascript:" class="btn btn-primary btn-sm" @click="updata()">修改</a>
                </div>
             </form>
        </div>
                </div>
            </div>
            <span class="layui-layer-setwin">
                <a class="layui-layer-ico layui-layer-close layui-layer-close1" href="javascript:;" @click="close">关闭</a>
            </span>
        </div>
        <div class="layui-layer-shade" id="layui-layer-shade2" times="2" style="z-index:19891015; background-color:#000; opacity:0.3; filter:alpha(opacity=30);">
        </div>
    </div>
</template>

<script type="text/javascript">
	import './dataset.scss'
    import router from '../../router'
	import http from '../../utils/HttpClient'
    // import $ from 'jquery'
    import $ from '../../assets/jquery-vendor.js'
    import '../../libs/jquery-confirm/jquery-confirm.js'
    import '../../libs/jquery-confirm/jquery-confirm.css'

    export default { 
    	name:'dataset',
        props:['data'],
		data(){
            return {

            }
		},
        methods:{
            close:function(){
                router.push({name:'datagrid'})
            },
            updata:function(){
                http.post('upDate',this.data).then(response => {
                    if(response){
                       $.alert('修改成功')
                    } else {
                       
                    }
                })
            }
        },
        created(){

        }
        
    }
</script>