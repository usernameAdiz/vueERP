<template>
	<div class="myorder">
		<div class="order-head">
			<i class="iconfont icon-xiangzuo sshi" @click="gostore"></i>
			<span>我的订单</span>
		</div>
		<div class="order-nav">
			<ul>
				<li><span class="ordre1" @click="goroder">全部</span></li>
				<li><span class="ordre2" @click="goroder2">待付款</span></li>
				<li><span class="ordre3" @click="goroder3">待收货</span></li>
				<li><span class="ordre4" @click="goroder4">待评价</span></li>
			</ul>
		</div>
		<div class="order-body">
			<div class="touch-order-list">
				<ul class="order-list">
					<div class="norecord">
						<div class="norecord-ico">
							<i class="iconfont icon-dingdan"></i>
						</div>
						<dl>
							<dd>您还没有相关的订单</dd>
							<dd>可以去看看哪些想要买的</dd>
						</dl>
						<span class="go-home" @click="gohome">随便逛逛</span>
					</div>
				</ul>
			</div>
		</div>
		<order-bottom></order-bottom>
	</div>
</template>

<script>
	import './myOrder3.scss'
	import '../../../../assets/font/iconfont.css'
	import bottom from '../../../home/bottom/bottom.vue'

	export default{
		components:{
			'order-bottom':bottom
		}
		// methods:{
		// 	gostore:function(){
		// 		window.location.href="/#/mystore"
		// 	},
		// 	gohome:function(){
		// 		window.location.href="/#/"
		// 	},
		// 	goroder:function(){
		// 		window.location.href="/#/myorder"
		// 	},
		// 	goroder2:function(){
		// 		window.location.href="/#/myorder2"
		// 	},
		// 	goroder3:function(){
		// 		window.location.href="/#/myorder3"
		// 	},
		// 	goroder4:function(){
		// 		window.location.href="/#/myorder4"
		// 	}
		// }
	}
</script>