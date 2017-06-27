<template>
    <div>
        <div class="dk-toolbar dk-grid-toolbar" >商品添加
            <a href="javascript:" class="btn btn-primary btn-sm" style="float:right" v-if="toolbar" v-for="(value,key) in toolbar" @click="click(value)">{{value.text ? value.text : key}}</a>
        </div>
        <div class="dk-form">
            <form ref="clientForm" role="form" class="form-horizontal ng-pristine ng-valid">
                <div class="form-group">
                    <h2 class="ad-title"><span>基本信息</span></h2>
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">名称</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input type="text" name="name" v-model="dataform.name" class="form-control ">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">所属板块</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <select v-model="dataform.area"  name="area" class="form-control ">
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
                            <input type="text" name="position" v-model="dataform.position" class="form-control ">
                        </div>
                    </div> 
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">品牌</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input type="text" name="brand" v-model="dataform.brand" class="form-control ">
                        </div>
                    </div> 
                </div>
                <div class="form-group"> 
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">商品描述</span>
                    </div>
                    <div class="col-sm-6">
                        <div class="dk-form-element">
                            <input type="text" name="title" v-model="dataform.title" class="form-control ">
                        </div>
                    </div>
                </div>
                <div class="form-group"> 
                     <div class="col-sm-1">
                        <span class="col-sm-12 control-label">价格</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input type="text" name="price" v-model="dataform.price" class="form-control ">
                        </div>
                    </div> 
                </div>  
                <div class="form-group"> 
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">库存</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <select v-model="dataform.residue"  name="residue" class="form-control ">
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
                            <input type="text" name="account" v-model="dataform.account" class="form-control ">
                        </div>
                    </div> 

                </div> 
                
                <div class="form-group">
                   <!--  <div class="col-sm-1">
                        <span class="col-sm-12 control-label">出生日期</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input v-datepicker type="text" name="birthday" data-model="dataform.birthday" v-model="dataform.birthday" class="date-picker  form-control" data-date-format="yyyy-mm-dd">
                        </div>
                    </div> -->
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">销量</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input type="text" name="sales" v-model="dataform.sales" class="form-control ">
                        </div>
                    </div> 
                    
                    <!-- <div class="col-sm-1">
                        <span class="col-sm-12 control-label">入职时间</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input v-datepicker type="text" data-date-format="yyyy-mm-dd" name="Inductiontime" data-model="dataform.Inductiontime" v-model="dataform.Inductiontime" class="date-picker  form-control">
                        </div>
                    </div>                       -->  
                </div>
                <div class="form-group"> 
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">颜色</span>
                    </div>
                    <div class="col-sm-6">
                        <div class="dk-form-element">
                            <input type="text" name="color" v-model="dataform.color" class="form-control ">
                        </div>
                    </div>
                </div>
                <div class="form-group"> 
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">型号</span>
                    </div>
                    <div class="col-sm-6">
                        <div class="dk-form-element">
                            <input type="text" name="size" v-model="dataform.size" class="form-control ">
                        </div>
                    </div> 
                </div>
                <div class="form-group"> 
                    <h2 class="ad-title"><span>图片信息</span></h2>
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
             </form>
        </div>
        <router-view class="ad-erplist"></router-view>
    </div>
</template>

<script type="text/javascript">
    import './erpadd.scss'
    import router from '../../router'
    import http from '../../utils/HttpClient'
    // import $ from 'jquery'
    import $ from '../../assets/jquery-vendor.js'
    import erp from '../../libs/common/global.js'
    import '../../libs/jquery-confirm/jquery-confirm.js'
    import '../../libs/jquery-confirm/jquery-confirm.css'
    

    export default {
        data(){
            return {
                toolbar:{},
                dataform: {}
            }
        },
        methods:{
            click(arg){
                if(arg.event){
                     arg.event()
                }
            }
        },
        created(){
            // this.$parent.$emit('dk','hehe')
            var tools = {
                add: { 
                    text: '保存',
                    event: () => {
                        $('form').ajaxSubmit({
                            type: 'post',
                            url: erp.baseUrl + 'upload',
                            success:function(data){
                                $.alert('保存成功')
                            },
                            error:function(XmlHttpRequest,textStatus,errorThrown){
                                $.alert('保存失败')
                                console.log(XmlHttpRequest);
                                console.log(textStatus);
                                console.log(errorThrown);
                            }
                        })      

                    }
                },
                back: {
                    text: '返回',
                    class: 'btn-goback',
                    event: () => {
                        router.push({name: 'home'})
                    }
                }
            }
            this.toolbar = tools

            //类似给父级元素添加属性
            // this.$parent.addTool(tools);
        }
    }
</script>