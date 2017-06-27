<template>
	<div id="mystore">
		<div class="member-head">
<!-- 			<i class="iconfont icon-xiangzuo" @click="goback"></i> -->
			<span>我的商城</span>
		</div>
		<div class="member-body">
			<div class="member-top">
				<div class="member-info">
					<div class="user-avatar">
						<img src="../../assets/imgs/user_avatar.gif">
					</div>
					<div class="user-name">
						<span>
							<span v-text='userName'></span>
							<sup>v1</sup>
						</span>
					</div>
				</div>
				<div class="member-collect">
					<span class="favorites" @click="goFavorites">
						<em>0</em>
						<p>商品收藏</p>
					</span>
					<span class="favoritesStore" @click="goFavoritesStore">
						<em>0</em>
						<p>店铺收藏</p>
					</span>
					<span @click="goFootmark">
						<i class="iconfont icon-zuji"></i>
						<p>足迹</p>
					</span>
				</div>
			</div>
			<div class="member-center">
				<div class="member-order">
					<div class="member-order-top">
						<router-link to="/myorder">
							<span>
								<i class="iconfont icon-dingdan shii"></i>
								我的订单
							</span>
							<span>
								查看全部订单
								<i class="iconfont icon-xiangyou01"></i>
							</span>
						</router-link>
					</div>
					<div class="member-order-content">
						<ul>
							<li  @click="goOrder">
								<i class="iconfont icon-fukuan"></i>
								<span>待付款</span>
							</li>
							<li  @click="goOrder">
								<i class="iconfont icon-shouhuo"></i>
								<span>待收货</span>
							</li>
							<li  @click="goOrder">
								<i class="iconfont icon-pingjia"></i>
								<span>待评价</span>
							</li>
							<li>
								<i class="iconfont icon-tuikuan"></i>
								<span>退款/退货</span>
							</li>
						</ul>
					</div>
				</div>
				<div class="addredd-settings">
					<router-link to="/myaddress">
						<i class="iconfont icon-llcouponsupportedshopaddress shii"></i>
						<span>收货地址管理</span>
						<i class="iconfont icon-xiangyou01"></i>
					</router-link>
				</div>
				<div class="user-settings">
					<router-link to="/setting">
						<i class="iconfont icon-shezhi shii"></i>
						<span>用户设置</span>
						<i class="iconfont icon-xiangyou01"></i>
					</router-link>
				</div>
			</div>
			<div class="member-bottom">
				<span>Copyright © 2007-2020 玩包包 版权所有</span>
			</div>
		</div>
		<member-bottom></member-bottom>
	</div>
</template>

<script>
	import './myStore.scss'
	import '../../assets/font/iconfont.css'
	import bottom from '../home/bottom/bottom.vue'
	import $ from 'jquery'
	import router from '../../router'

	export default{
		components:{
			'member-bottom':bottom
		},
		data:function(){
			return{
				userName:'',
			}
		},
		methods:{
			goback:function(){
				window.history.back()
			},
			goFavorites:function(){
				// window.location.href="/favorites"
				router.push({name: 'favorites'})
			},
			goFavoritesStore:function(){
				router.push({name: 'favoritesStore'})
			},
			goFootmark:function(){				
				router.push({name: 'footmark'})
			},
			goOrder:function(){
				router.push({name: 'myorder'})
			}
		},
		created(){
			// 显示用户名
			let _status = window.localStorage.getItem('loginStatus')
			if(!_status){
				return false;
			}else{
				let _user = JSON.parse(_status).username;
				this.userName = _user;
			}
			
			
		},
		// 挂载前判断登录状态，如果未登录 则跳转登录页面
		beforeCreate(){
			let _status = window.localStorage.getItem('loginStatus')
			if(!_status){
				router.push({name: 'slogin'})

			}else{
				router.push({name: 'mystore'})
			}
			
		}
	}
</script>