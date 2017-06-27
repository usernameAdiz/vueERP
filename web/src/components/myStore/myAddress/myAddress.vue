<template>
	<div class="myAddress">
		<div class="add-head">
			<i class="iconfont icon-xiangzuo sshi" @click="goback"></i>
			<span>地址管理</span>
		</div>
		<div class="add-body">
			<div class="norecord">
				<div class="norecord-ico">
					<i class="iconfont icon-llcouponsupportedshopaddress"></i>
				</div>
				<dl>
					<dd>您还没有过添加收货地址</dd>
					<dd>正确填写常用收货地址方便购物</dd>
				</dl>
				<span class="createAdd" @click="gotoNewAdd">添加新地址</span>
			</div>
			<div class="show-add">
				<ul class="add-list"></ul>
				<div class="moreAdd">
					<span class="create-Add" @click="gotoNewAdd">添加新地址</span>
				</div>				
			</div>
			
		</div>
		<add-bottom></add-bottom>
	</div>
</template>

<script>
	import './myAddress.scss'
	import '../../../assets/font/iconfont.css'
	import bottom from '../../home/bottom/bottom.vue'
	import $ from 'jquery'
	import Http from '../../../utils/HttpClient.js'
	import router from '../../../router'
	export default{
		components:{
			'add-bottom':bottom
		},
		methods:{
			goback:function(){
				window.history.back()
			},
			gotoNewAdd:function(){
				router.push({name: 'newaddress'})
			}

		},
		created(){
			$(function(){
				Http.get('myaddress')
				.then(response=>{
					// 倒序输出地址，后面添加地址的写在上面
					var _response= response.reverse();
					// 读取地址写入页面
					if(response.length>0){
						$('.norecord').hide();
						$('.show-add').show();
						$('.add-list').html(_response.map(function(item){
							
							return `<li data-id=${item.id} class="address11">
									<p class="name-phone">
										<span class="cnee-name">${item.userName}</span>
										<span class="cnee-phone">${item.userPhone}</span>
									</p>
									<p class="cnee-add">
										<span class="cnee-shopping">${item.shoppingAdd}</span>
										<span class="cnee-detail">${item.detailAdd}</span>
									</p>
									<div class='re-address'>
										<span class="is${item.isDefault}">默认地址</span>
										<span>
											 <i class="iconfont icon-lajixiang delAdd"></i>
										</span>
									</div>
								</li>`

						}).join(''))
					}else{
						$('.norecord').show();
						$('.show-add').hide();
					}
					$('.isfalse').hide();
					
					// 删除地址
					$('.show-add').click(function(e){
						if($(e.target).hasClass('delAdd')){
							let currentLi =$(e.target).parent().parent().parent()
							let id = currentLi.data('id');
							Http.post('delAdd',{id:id})
							.then(response=>{
								if(response.status){
									currentLi.remove();
									if($('.add-list').children().length==0){
										$('.norecord').show();
										$('.show-add').hide();
									}
								}
							})
						}

					})
				})

			})
		}
	}
</script>