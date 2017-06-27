<template>
	<div id="goods-box">
	<header>
		<div class="header-l" @click="go2"> 
		<a href="javascript:void(0);">
			 <i class="iconfont icon-xiangzuo"></i> 
		</a>
		</div>
		<div class="header-r">
		 <a id="header-nav" href="javascript:void(0);">
		 <i class="iconfont icon-androidmorehorizontal"></i><sup></sup></a> </div>
	</header>

	<div class="goods-detail-top">
		<ul>
			<li>
				<img :src="'src/assets/imgs/'+obj.cal_pic" alt=""/>
			</li>
		</ul>
	</div>

 <div class="goods-detail-cnt">
	<div class="goods-detail-name">
		<dl> 
			<dt>{{obj.name}}</dt>
			<dd></dd>
		</dl>
	</div>

	<div class="goods-detail-price">
			<dl>
				<dt>￥<em>{{obj.price}}</em></dt>
			</dl>
		<span class="sold">销量：{{obj.sales}}件</span>
	</div>
	
	<div class="goods-detail-item">
		送至 <span>全国</span> <span>{{obj.residue}}</span>
	</div>
	
	<div class="goods-detail-comment" id="goodsEvaluation1">
		<div class="title">
			<a id="goodsEvaluation1" href="javascript:void(0);">商品评价<span class="rate">好评率<em>100%</em></span><span class="rate-num">（0人评价）</span><div class="item-more"><i class="iconfont icon-xiangyou01"></i></div></a>
		</div>
		<div class="comment-info">
			
		</div>
	</div>

	<div class="goods-detail-store">
		<a href="store.html?store_id=1">
			<div class="store-name"><i class="iconfont icon-shouye"></i>玩包包官方自营</div>
			<div class="store-rate">
				<span class="equal">描述相符
					<em>5</em>
					<i>平</i>
				</span>
				<span class="equal">服务态度
					<em>5</em>
					<i>平</i>
				</span>
				<span class="equal">发货速度
					<em>5</em>
					<i>平</i>
				</span>
			</div>
			<div class="item-more"><i class="iconfont icon-xiangyou01"></i></div>
		</a>
	</div>
	
	<div class="goods-detail-recom">
		<h4>商品详情</h4>
		<ul>
			<!-- <li>
					<a href="product_detail.html?goods_id=102990">
						<div class="pic"><img src="http://playbag.cn/data/upload/shop/store/goods/1/1_05246602083884360_240.jpg"></div>
						<dl>
							<dt>唐夫人 便携无线充电包</dt>
							<dd>￥<em>1980.00</em></dd>
						</dl>
					</a>
				</li> -->
			<div v-for="img in obj.car_pic">
				<img :src="'src/assets/imgs/'+img" alt="">
			</div>	
		</ul>
	</div>
	<div class="goods-detail-bottom"><a href="javascript:void(0);" id="goodsBody1">点击查看商品详情</a>
	</div>

	</div>

		<div class="goods-detail-foot">
				<div class="otreh-handle">
					<a href="javascript:void(0);" class="kefu"><i class="iconfont icon-icon052"></i><p>客服</p></a>
					<a href="../tmpl/cart_list.html" class="cart"><i 
					class="iconfont icon-gouwuche"></i><p>购物车</p><span id="cart_count"></span></a>
				</div>
			<div class="buy-handle">
				
				<div class="animation-up add-cart" @click='goodl'>加入购物车</div>
				
				<div class="animation-up buy-now">立即购买</div>
			</div>
		</div>
 <!-- 遮罩层 -->
 <div v-if="mask" @click='mask=false' class="nctouch-bottom-mask-bg"></div>

<!-- 购买页面 -->
 <div v-show="mask" class="nctouch-bottom-mask-up">
 <!-- 1 -->
	 <div class="nctouch-bottom-mask-tip"><i class="iconfont icon-zuji"></i>点击此处返回</div>
	 <!-- 2 -->
	 <div class="nctouch-bottom-mask-top goods-options-info">
		<div class="goods-pic">
		<img :src="'src/assets/imgs/'+obj.cal_pic">
	</div>
	<dl>
		<dt>{{obj.name}}</dt>
		<dd class="goods-price">
		
					￥<em>{{obj.price}}</em>
				
			<span class="goods-storage">库存：200件</span>
		</dd>
	</dl>
	<div class="nctouch-bottom-mask-close"  @click='mask=false' ><i class="iconfont icon-cha"></i></div>
</div>
<!-- 3 -->
<div class="goods-option-value">
<span class="num">购买数量</span>
	<div class="value-box">
		<span class="minus" @click='num(-1)'>
			<input type="button" value="-">
		</span>
		<span>
			<input type="text" pattern="[0-9]*" class="buy-num" id="buynum" v-model="buynum">
		</span>
		<span class="add">
			<input type="button" value="+" @click='num(1)'>
		</span>
	</div>                       
</div>
<!-- 购买按钮 -->
<div class="goods-detail-foot2">
				<div class="otreh-handle2">
					<a href="javascript:void(0);" class="kefu2"><i class="iconfont icon-icon052"></i><p>客服</p></a>
					<a href="../tmpl/cart_list.html" class="cart2"><i 
					class="iconfont icon-gouwuche"></i>
					<p>购物车</p><span id="cart_count2"></span></a>
				</div>
			<div class="buy-handle2">
				
                       <div class="add-cart2" @click='good2'>加入购物车</div>
           
					
					<div class="buy-now2">立即购买</div>
			</div>
	</div>

</div>


</div>	

</template>

<script type="text/javascript">
	import './goods.scss'
	import http from '../../utils/HttpClient'

	import router from '../../router'
	
	

	export default {
		data: function(){
			return {
				mask:false,
				buynum:1,
				obj:{},
				shop:{},

			}
		},
		methods: {
			//购买的显示隐藏
			goodl:function(){
			this.mask=true
			},
			// 购买
			good2:function(){
				// id
				this.shop.uid=this.obj.uid
				//数量
				this.shop.buynum=this.buynum;
				//总价格
				this.shop.prices=parseInt(this.buynum)*Number(this.obj.price);
				//商品名
				this.shop.name=this.obj.name;
				//图片
				this.shop.cal_pic=this.obj.cal_pic[0];
				//价格
				this.shop.price=this.obj.price

				http.get('update', this.shop)
				.then(response => {
				
				// window.location.href="/#/car?"+'id='+this.obj.uid
				this.$router.push({path:'/car',params:{id:this.obj.uid}})

			
				})
			},
			// 按钮加减
			num:function(num){
				if(num==-1){
					this.buynum--;
					if (this.buynum<=1) {
						this.buynum=1;
					}
				}else{
					this.buynum++;
				}
			},go2:function(){
				// window.location.href="/#/logo"
				// router.push({name:'home'})
				this.$router.push({path:'/logo'})


			}
			
		},
		created:function(){
			// if (this.$root._route.params.id) {
			// 	var path = this.$root._route.params.id;
			// }else{
			// 	var path = this.$root._route.query.id;
			// }
			// var path = this.$root._route.params.id;
			

          	http.get('add',{_name:'not',_name2:this.$route.query.id})
			.then(response => {
					this.obj=response
					this.obj=this.obj[0]
					console.log(this.obj)
					this.$set(this.obj)
					 this.obj.totalPrice=0;
			

				
			})

		}
	}
</script>