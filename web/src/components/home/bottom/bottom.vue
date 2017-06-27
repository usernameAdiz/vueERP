<template>
	<div class="bottom">
		<ul>
			<li><router-link to="/"><i class="iconfont icon-shouyeshouye"></i><span>首页</span></router-link></li>
			<li><router-link to="/logo"><i class="iconfont icon-fenlei"></i><span>分类</span></router-link></li>
			<li><router-link to="search"><i class="iconfont icon-sousuo-sousuo"></i><span>搜索</span></router-link></li>
			<li><router-link to="car"><i class="iconfont icon-gouwuche"></i><span>购物车</span></router-link></li>
			<li><router-link to="mystore"><i class="iconfont icon-wo"></i><span>我的商城</span></router-link></li>
		</ul>			
	</div>
</template>

<script>
	import './bottom.scss'
	import '../../../assets/font/iconfont.css'

	export default {

	}
</script>