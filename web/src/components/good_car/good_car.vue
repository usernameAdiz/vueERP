<template>
	<div id="good_car">
		<header>
		 购物车
		<div class="header-l" @click='go'> 
		 <i class="iconfont icon-xiangzuo"></i> 
		 </div>

		<div class="header-r">
		 <a id="header-nav" href="javascript:void(0);">
		 <i class="iconfont icon-androidmorehorizontal"></i><sup></sup></a> </div>
	</header>
	
	<!-- li -->
		<div class="nctouch-main-layout">
			<div class="cart-list-wp">
				<div class="nctouch-cart-store">
					<input class="store_checkbox" type="checkbox" checked="">
					<span>
						<i class="iconfont icon-shouye"></i>
						官方直营
					</span>
				</div>
			</div>
<!-- 购物车 -->

			<ul class="nctouch-cart-item">
					<li class="cart-litemw-cnt" :ref="'gooli'+index" v-for="(obj2,index) in obj">
						<div class="cart_left">
							<input type="checkbox" checked="">
						</div>
					<div class="cart_img">
					<img :src="'src/assets/imgs/'+obj2.cal_pic" alt=""/>
					</div>
					<div class="cart_right">
						<div class="cart_top">
							<span>{{obj2.name}}</span>
							<i class="iconfont icon-lajixiang" @click='delete2(index)'></i>
						</div>
						<div class="cart_botton">
							<span class="qian">￥{{obj2.price}}</span>
							<!-- anniu -->
							<div class="value-box">
								<span class="minus" @click='num2(-1,index)'>
									<input type="button" value="-">
								</span>
								<span>
									<input type="text" pattern="[0-9]*" class="buy-num" id="buynum" v-model="obj2.buynum">
								</span>
								<span class="add" @click='num2(1,index)'>
									<input type="button" value="+" >
								</span>
							</div>                       
						</div>
					</div>
						
					</li>
				</ul>

			<!-- 支付按钮 -->
			<div class="nctouch-cart-bottom">
						<div class="total">

                        		<dl class="total-money"><dt>合计总金额：</dt><dd>￥<em>{{obj.totalPrice}}</em></dd></dl>
                    	</div>
                    	<div class="check-out ok">
                        	<!-- <a href="javascript:void(0)">确认信息</a> -->
                        	<router-link to="/">确认信息</router-link>
						</div>
                    </div>
		</div>
	</div>	
</template>

<script type="text/javascript">
	import './good_car.scss'
	import http from '../../utils/HttpClient'
	import $ from 'jquery'
	// import router from '../../router'

	export default {
		data: function(){
			return {
				toolList: null,
				 obj:'',
				 id:'',
			}
		},methods: {

			num2:function(num,e){
				
				if(num==-1){
					this.obj[e].buynum--;
					if (this.obj[e].buynum<=1) {
						this.obj[e].buynum=1;
					   
					}else{
						this.obj.totalPrice=this.obj.totalPrice-this.obj[e].price
					}
					
				}else{
					this.obj[e].buynum++;
					this.obj.totalPrice=this.obj.totalPrice+parseInt(this.obj[e].price)
				}
			},
			delete2:function(e){
				http.get('delete',{uid:this.obj[e].uid}).then(response => {
					console.log(response)
						console.log($(this.$refs['gooli'+e][0]))
						 $(this.$refs['gooli'+e][0]).remove()
				})

			},

			go:function(){
				// window.location.href="/#/goods?"+'id='+this.id
				// router.push({name: 'goods',params:{id:this.id}})
			}
			
		},
		created:function(){
			var path = this.$root._route.query.id;
			console.log(path)
			this.id=path
          	http.get('look').then(response => {
          		console.log(response)
					this.obj=response
					console.log(this.obj)
				
					 // this.$set(this.obj)
					 this.obj.totalPrice=0;
				for (var i = 0; i < this.obj.length; i++) {

					this.obj.totalPrice=this.obj.totalPrice+parseInt(this.obj[i].prices)
				}

				
			})

		}
		
	}
</script>