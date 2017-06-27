<template>
	<div class="favorites">
		<div class="fav-head">
			<i class="iconfont icon-xiangzuo sshi" @click="gostore"></i>
			<div class="head-tab">
				<span>商品收藏</span><span @click="gofavoritesStore">店铺收藏</span>
			</div>
		</div>

		<div class="fav-body">
			<div class="touch-order-list">
				<ul class="order-list">
					<div class="norecord">
						<div class="norecord-ico">
							<i class="iconfont icon-aixin"></i>
						</div>
						<dl>
							<dd>您还没有关注任何商品</dd>
							<dd>可以去看看哪些商品值得收藏</dd>
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
	import './favorites.scss'
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