<template>
	<div :class="['dk-nav-content', navOpen ? '' : 'toggle']" ref="dknav">
		<ul class="dk-nav">
			<li class="dk-nav-item nav-toggle">
				<a class="btn btn-primary" href="javascript:" @click="toggleNav">
					<i class="fa fa-bars"></i> 
				</a>
			</li>
			<li class="dk-nav-item" @click="toggleNavItem">
				<a href="javascript:">
					<i class="fa fa-file-o"></i>
					<span>商品管理</span>
					<i class="fa fa-angle-left"></i>
				</a>
				<ul class="dk-sub-nav">
					<li><router-link to="/erpadd">添加商品</router-link></li>
					<li><router-link :to="{ path: 'datagrid', query: { url:'getData'}}">商品列表</router-link></li>
					<li><router-link to="/">订单管理</router-link></li>
					<li><router-link to="/">主页展示</router-link></li>
				</ul>
			</li>
			<li class="dk-nav-item" @click="toggleNavItem">
				<a href="javascript:">
					<i class="fa fa-cog"></i>
					<span>系统设置</span>
					<i class="fa fa-angle-left"></i>
				</a>
				<ul class="dk-sub-nav">
					<li><router-link to="/">修改密码</router-link></li>
					<li><router-link to="/">修改信息</router-link></li>
					<li><router-link to="/">权限设置</router-link></li>
					<li><router-link to="/">模块设置</router-link></li>
				</ul>
			</li>					
		</ul>
	</div>	
</template>

<script type="text/javascript">
	import './nav.scss'
	import $ from 'jquery'

	export default {
		data(){
			return {
				navOpen: true
			}
		},
		methods:{
			toggleNavItem(event){
				if(!this.navOpen){
					this.navOpen = true;
				}
				let self = $(event.target);
				if(self.closest('.dk-sub-nav')[0]){
					return;
				}
				if(!self.is('.dk-nav-item')){
					self = self.closest('.dk-nav-item');
				}
				self.toggleClass('active');
			},
			toggleNav(event){
				this.navOpen = !this.navOpen;
				$('.dk-nav-item').removeClass('active');
			}
		}
	}
</script>