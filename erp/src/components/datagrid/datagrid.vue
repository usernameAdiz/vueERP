<template>
    <div>
        <div class="dk-toolbar dk-grid-toolbar" >全部商品
            <a href="javascript:" class="btn btn-primary btn-sm" v-if="toolbar" v-for="(value,key) in toolbar" @click="click(value)">{{value.text ? value.text : key}}</a>
        </div>
        <div class="dk-datagrid-content">
            <div class="dk-form">
                <form ref="clientForm" role="form" class="form-horizontal ng-pristine ng-valid">
                    <div class="form-group2">
                        <div class="col-sm-1">
                            <span class="col-sm-12 control-label">name</span>
                        </div>
                        <div class="col-sm-2">
                            <div class="dk-form-element">
                                <input type="text" name="name" v-model="searchform.name" class="form-control ">
                            </div>
                        </div>
                        <div class="col-sm-1">
                            <span class="col-sm-12 control-label">UID</span>
                        </div>
                        <div class="col-sm-2">
                            <div class="dk-form-element">
                                <input type="text" name="uid" v-model="searchform.uid" class="form-control ">
                            </div>
                        </div>
                        <div class="col-sm-1">
                            <span class="col-sm-12 control-label">brand</span>
                        </div>
                        <div class="col-sm-2">
                            <div class="dk-form-element">
                                <input type="text" name="brand" v-model="searchform.brand" class="form-control ">
                            </div>
                        </div>
                        <a href="javascript:" class="btn btn-primary btn-sm" style="marginRight:10px;float:right" @click="reset()">重置</a>
                        <a href="javascript:" class="btn btn-primary btn-sm" style="marginRight:10px;float:right" @click="search()">查询</a>
                    </div>
                </form>
            </div>
            <table class="table dk-datagrid">
                <thead>
                    <tr>
                        <th class="ad-row-controller">操作</th>
                        <th class="ad-row-controller" v-for="(value, key) in dataset[0]" v-if="columns.indexOf(key) > -1">{{key}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(obj,index) in dataset" style="lineHeight:47px">
                        <th class="ad-th row-controller">
                            <a href="javascript:" class="btn btn-primary btn-sm" style="marginRight:10px"  v-for="(value,key) in operate" @click="click(value,index)">{{value.text ? value.text : key}}</a>
                        </th>
                        <th class="row-controller" v-for="(value ,key ) in obj" v-if="columns.indexOf(key) > -1">{{value}}</th>
                    </tr>
                </tbody>
            </table>
        </div>
        <!--  -->
        <router-view class="dk-viewer" :data="amenddata"></router-view>
    </div>
</template>

<script type="text/javascript">
	import './datagrid.scss'
    import router from '../../router'
    import http from '../../utils/HttpClient'
    // import $ from 'jquery'
    import $ from '../../assets/jquery-vendor.js'
    import '../../libs/jquery/jquery.form'
    import '../../libs/jquery-confirm/jquery-confirm.css'

	export default {
		name: 'datagrid',
        props: ['api', 'tools', 'toolbar'],
        components: {
        },
		data(){
			return {
                dataform:{},
                columns:['uid','name','title','price','residue','color','size','brand','account','sales'],
                operate:[],
                dataset:[],
                datasetOrigin:[],
                datasource: null,
                toolList: null,
                toolbar_id: 'toobar_' + parseInt(Math.random() * 10000),
                searchform:{},
                amenddata:[]
            }
		},
        methods: {
            click: function(evt,index){
                if(evt && evt.event){
                    evt.event(index)
                }
            },
            search:function(){
                var _dataset = [];
                    for(var index in this.datasetOrigin){
                        var obj = this.datasetOrigin[index];
                        var _result = (
                        (!this.searchform.name || obj.name.indexOf(this.searchform.name) > -1) &&
                        (!this.searchform.uid || String(obj.uid).indexOf(this.searchform.uid) > -1)&&
                        (!this.searchform.brand || obj.brand.indexOf(this.searchform.brand) > -1)
                        );
                        if(_result){
                            _dataset.push(obj);
                        }
                }
                this.dataset = _dataset;
            },
            reset:function(){
                // console.log(this.searchform)
                // for(var value in this.searchform){
                //     this.searchform[value] = ''
                // }
            }
        },
        created(){
            var operate = {
                del:{
                    text:'删除',
                    event:(index) => {
                        http.post('delData',{uid : this.dataset[index].uid})
                            .then(response => {
                                if(response){
                                    $.alert('删除成功!')
                                } else {
                                    $.alert('删除失败!')
                                }
                            })
                            this.dataset.splice(index,1)
                        // $.confirm({
                        //     title: '',
                        //     content: '是否删除？',
                        //     confirm: function(){
                        //         console.log(this)
                        //         http.post('delData',{uid : this.dataset[index].uid})
                        //         .then(response => {
                        //             if(response){
                        //                 $.alert('删除成功!')
                        //             } else {
                        //                 $.alert('删除失败!')
                        //             }
                        //         })
                        //         this.dataset.splice(index,1)
                        //     },
                        //     cancel: function(){
                        //         $.alert('取消删除!')
                        //     }
                        // });
                        
                    }
                },
                amend:{
                    text:'修改',
                    event:(index) => {
                        console.log(index)
                        this.amenddata = this.dataset[index]
                        router.push({name:'dataset'})
                    }
                }
            }
            this.operate = operate ;
            // if(this.api){
            //     http.get(this.api)
            //     .then(response => {
            //         this.datasource = response.data
            //         if(typeof this.datasource.rows == 'string'){
            //             this.datasource.rows = JSON.parse(this.datasource.rows);
            //         }
            //     })                
            // }
            // if(this.tools){
            //     if(this.toolbar){
            //         this.toolList = this.tools
            //     } else {
            //         this.$parent.$parent.addTool(this.tools)
            //     }
            // } 

            // this.$parent.addTool(tools)
            let url = this.$route.query.url
            if(url){
                http.get('getData',{uid:"0"})
                .then(response => {
                    // response.data.color = response.data.color.join('')
                    this.dataset = response.data;
                    this.datasetOrigin = response.data;
                    console.log(this.dataset)
                })                
            }
        },
        mounted(){
        }

	}
</script>