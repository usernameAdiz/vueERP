<template>
	<div class="bag_container">
		<main @scroll="onscroll" id="bodyBox">
			<carousel></carousel>
			<div class="tip">
				<ul>
					<li><router-link to="logo">
							<i class="iconfont icon-fenlei1 fenlei"></i>
							<p>分类</p>
						</router-link></li>
					<li><router-link to="search">
							<i class="iconfont icon-sousuo_sousuo suosou"></i>
							<p>搜索</p>
						</router-link></li>
					<li><router-link to='car'>
							<i class="iconfont icon-gouwuche gouwuche"></i>
							<p>购物车</p>
						</router-link></li>
					<li><router-link to="mystore">
							<i class="iconfont icon-wo wode"></i>
							<p>我的商城</p>
						</router-link ></li>
				</ul>
			</div>	
			<div class="home1 clearfix">
				<!-- <p class="title-bar">人气类选  POPULAR</p> -->
				<div class="popular">
					<ul>
						<li><router-link to="listList?keyword=人气"><img src="../../assets/imgs/pop1.jpg" alt=""></router-link></li>
						<li><router-link to="listList?keyword=女包"><img src="../../assets/imgs/pop2.jpg" alt=""></router-link></li>
						<li><router-link to="listList?keyword=男包"><img src="../../assets/imgs/pop3.jpg" alt=""></router-link></li>
						<li><router-link to="listList?keyword=旅行"><img src="../../assets/imgs/pop4.jpg" alt=""></router-link></li>
					</ul>
					<div class="homeprodut">
						<ul>
							<li>
								<router-link to="/goods?id=678032">
									<div class="produtimg">
										<img src="../../assets/imgs/homeprodut1.jpg" alt="">
									</div>
									<div class="homeprodut_bottom">
										<p>春哥 无线充电包 中国风经典手拿包 简约复古男士钱包 拉链小牛皮包 酒红色 苹果接口</p>
										<b>￥ 1980.00</b>
									</div>
								</router-link>
							</li>
							<li>
								<router-link to="/goods?id=678032">
									<div class="produtimg">
										<img src="../../assets/imgs/homeprodut2.jpg" alt="">
									</div>
									<div class="homeprodut_bottom">
										<p>唐夫人 中国风无线充电包 女士手拿包 时尚优雅宴会包 经典复古钱包 绿色 苹果接口</p>
										<b>￥ 1980.00</b>
									</div>
								</router-link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="home2">
				<p class="title-bar">旗下品牌  ITS BRAND</p>
				<div class="home2img">
					<img src="../../assets/imgs/pingpai.jpg" alt="">
				</div>
			</div>
			<div class="homeshow clearfix">
				<p class="title-bar">精品女包</p>
				<div class="hometop">
					<div class="hometop_l">
						<router-link to="listList?keyword=女包"><img src="../../assets/imgs/dong.jpg" alt=""></router-link>
					</div>
					<div class="hometop_r">
						<router-link to="/goods?id=678032"><img src="../../assets/imgs/dong1.jpg" alt=""></router-link>
						<router-link to="/goods?id=678032"><img src="../../assets/imgs/dong2.jpg" alt=""></router-link>
					</div>
				</div>
				<div class="homebottom">
					<router-link to="/goods?id=678032"><img src="../../assets/imgs/dong3.jpg" alt=""></router-link>
					<router-link to="/goods?id=678032"><img src="../../assets/imgs/dong4.jpg" alt=""></router-link>
				</div>
			</div>
			<div class="homeshow clearfix">
				<p class="title-bar">精品男包</p>
				<div class="hometop">
					<div class="hometop_l">
						<router-link to="listList?keyword=男包"><img src="../../assets/imgs/man.jpg" alt=""></router-link>
					</div>
					<div class="hometop_r">
						<router-link to="/goods?id=678032"><img src="../../assets/imgs/man1.jpg" alt=""></router-link>
						<router-link to="/goods?id=678032"><img src="../../assets/imgs/man2.jpg" alt=""></router-link>
					</div>
				</div>
				<div class="homebottom">
					<router-link to="/goods?id=678032"><img src="../../assets/imgs/man3.jpg" alt=""></router-link>
					<router-link to="/goods?id=678032"><img src="../../assets/imgs/man4.jpg" alt=""></router-link>
				</div>
			</div>
			<div class="homeshow clearfix">
				<p class="title-bar">双肩包</p>
				<div class="hometop">
					<div class="hometop_l">
						<router-link to="listList?keyword=双肩"><img src="../../assets/imgs/oujian.jpg" alt=""></router-link>
					</div>
					<div class="hometop_r">
						<router-link to="/goods?id=678032"><img src="../../assets/imgs/oujian1.jpg" alt=""></router-link>
						<router-link to="/goods?id=678032"><img src="../../assets/imgs/oujian2.jpg" alt=""></router-link>
					</div>
				</div>
				<div class="homebottom">
					<router-link to="/goods?id=678032"><img src="../../assets/imgs/oujian3.jpg" alt=""></router-link>
					<router-link to="/goods?id=678032"><img src="../../assets/imgs/oujian4.jpg" alt=""></router-link>
				</div>
			</div>
			<div class="homeshow clearfix">
				<p class="title-bar">旅行箱包</p>
				<div class="hometop">
					<div class="hometop_l">
						<router-link to="listList?keyword=旅行"><img src="../../assets/imgs/word.jpg" alt=""></router-link>
					</div>
					<div class="hometop_r">
						<router-link to="/goods?id=678032"><img src="../../assets/imgs/word1.jpg" alt=""></router-link>
						<router-link to="/goods?id=678032"><img src="../../assets/imgs/word2.jpg" alt=""></router-link>
					</div>
				</div>
				<div class="homebottom">
					<router-link to="/goods?id=678032"><img src="../../assets/imgs/word3.jpg" alt=""></router-link>
					<router-link to="/goods?id=678032"><img src="../../assets/imgs/word4.jpg" alt=""></router-link>
				</div>
			</div>
			<div class="fotter">
				<p>服务热线 ： 111-222-4444</p>
				<p><a href="">Copyright © 2007-2020 包包玩 版权所有</a></p>
			</div>
			<div class="goTop" @click="ontop">
				<i class="iconfont icon-rocket"></i>
			</div>
		</main>
		<bottom></bottom>		
	</div>	
</template>

<script type="text/javascript">
	import './home.scss'
	import bottom from './bottom/bottom.vue'
	import carousel from './carousel/carousel.vue'
	import $ from 'jquery'

	export default {
		components: {
			'carousel': carousel,
			'bottom': bottom
		},
		data(){
			return {
				toollist: null
			}
		},
		methods: {
			onscroll:function(event){				
				if(event.target.scrollTop<=200){
					$('.goTop').hide();
				}else{
					$('.goTop').show();
				}
			},
			ontop: function(){
				console.log()
				let timer = setInterval(()=>{
			        // 先获取滚动过的距离
			        let mainBox = document.getElementById('bodyBox')
			        let scrollTop = mainBox.scrollTop;//2000

			        // 关键：利用滚动过的距离计算速度
			        let speed = Math.ceil(scrollTop/5);

			        // 设置滚动条滚动距离
			        let _scrollTop = scrollTop - speed;

			        if(_scrollTop <= 20){
			          clearInterval(timer);
			          _scrollTop = 0;
			        }

			        mainBox.scrollTop=(0,_scrollTop);

			      },30);
			}

		},
		created(){
			
		}
	}
</script>