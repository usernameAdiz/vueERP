<template>
	<div class="footmark">
		<div class="mark-head">
			<i class="iconfont icon-xiangzuo sshi" @click="gostore"></i>
			<span>浏览记录</span>
		</div>

		<div class="mark-body">
			<div class="touch-order-list">
				<ul class="order-list">
					<div class="norecord">
						<div class="norecord-ico">
							<i class="iconfont icon-zuji"></i>
						</div>
						<dl>
							<dd>暂无您的浏览记录</dd>
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
	import './footmark.scss'
	import '../../../assets/font/iconfont.css'
	import bottom from '../../home/bottom/bottom.vue'
	import router from '../../../router'

	export default{
		components:{
			'order-bottom':bottom
		},
		methods:{
			gostore:function(){
				router.push({name: 'mystore'})
			},
			gofavoritesStore:function(){
				router.push({name: 'favoritesStore'})
			},
			gohome:function(){
				router.push({name: 'home'})
			}			
		}
	}
</script>