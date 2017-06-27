<template>
	<div id="newAddress">
		<div class="add-head">
			<i class="iconfont icon-xiangzuo sshi" @click="goback"></i>
			<span>新增收货地址</span>
		</div>
		<div class="add-body">
			<ul>
				<li>
					<label for="user-name">收货人姓名</label>
					<input type="text" id="user-name" placeholder="收货人姓名" v-model="userName">
				</li>
				<li>
					<label for="user-phone">联系手机</label>
					<input type="text" id="user-phone" placeholder="收货人手机" v-model="userPhone">
				</li>
				<li>
					<label for="user-area">收货地址</label>
					<input type="text" id="user-area" placeholder="省/市/区（县）" v-model="shoppingAdd">
				</li>
				<li>
					<label for="user-add">详细地址</label>
					<input type="text" id="user-add" placeholder="街道/门牌号" v-model="detailAdd">
				</li>
				<li>
					<label for="">设为默认地址</label>
					<input type="checkbox" class="check-def">
				</li>
			</ul>
			<div class="saveAdd">
				<span class="save-address" @click="saveAddress">保存地址</span>
			</div>
		</div>
		<add-bottom></add-bottom>
	</div>
</template>

<script>
	import './newAddress.scss'
	import '../../../assets/font/iconfont.css'
	import bottom from '../../home/bottom/bottom.vue'
	import $ from 'jquery'
	import '../../../assets/jquery-confirm/jquery-confirm.js'
	import '../../../assets/jquery-confirm/jquery-confirm.css'
	import Http from '../../../utils/HttpClient.js'
	import router from '../../../router'

	export default{
		components:{
			'add-bottom':bottom
		},
		data:function(){
			return{
				userName:'',
				userPhone:'',
				shoppingAdd:'',
				detailAdd:'',
				indexId:''
			}
		},
		methods:{
			goback:function(){
				window.history.back()
			},
			saveAddress:function(){
				let now = new Date();
				let month = now.getMonth()+1;//0-11
				let date = now.getDate();
				let hour = now.getHours();
				let min = now.getMinutes();
				let sec = now.getSeconds();
				month = month<10 ? '0'+month : month;
				date = date<10 ? '0'+date : date;
				hour = hour<10 ? '0'+hour : hour;
				min = min<10 ? '0'+min : min;
				sec = sec<10 ? '0'+sec : sec;
				this.indexId =  month + date + hour + min + sec;
				if(this.userName==''){
					$.alert('收货人姓名不能为空')
				}else if(this.userPhone==''){
					$.alert('联系手机不能为空')
				}else if(this.shoppingAdd==''){
					$.alert('收货地址不能为空')
				}else if(this.detailAdd==''){
					$.alert('详细地址不能为空')
				}else{
					// $.post('http://localhost:888/newaddress',{
					// 	id:this.indexId,
					// 	userName:this.userName,
					// 	userPhone:this.userPhone,
					// 	shoppingAdd:this.shoppingAdd,
					// 	detailAdd:this.detailAdd,
					// 	isDefault:$('.check-def')[0].checked
					// },function(response){
					// 	if(response.status){
					// 		window.location.href="/#/myaddress";
					// 	}
					// })
					Http.post('newaddress',{
						id:this.indexId,
						userName:this.userName,
						userPhone:this.userPhone,
						shoppingAdd:this.shoppingAdd,
						detailAdd:this.detailAdd,
						isDefault:$('.check-def')[0].checked
					})
					.then(response=>{
						if(response.status){
							$.alert({
							    title: '',
							    content: '保存成功！',
							    confirm: function(){
							        router.push({name: 'myaddress'})

							    }
							});							
						}						
					})
				}
			}
		}
	}
</script>