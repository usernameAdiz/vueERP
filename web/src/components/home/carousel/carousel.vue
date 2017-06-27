
<template>
	<div class="carousel swiper-container">
		<div class="swiper-wrapper">
	        <div class="swiper-slide" v-for="(img, idx) in banner">
	        <a href="#"><img v-bind:src="'src/assets/imgs/'+img" alt=""/></a>
	        </div>	        
	    </div>
	</div>
	
</template>

<script>
	import './carousel.scss' 
	import './swiper/swiper-3.4.2.min.js'
	import $ from 'jquery'
	import http from '../../../utils/HttpClient'

	export default {		
		data:function(){
			return {
				banner:[]
			}			
		},
		created(){
			http.get('banner', {'item':'banner'}).then(response => {			if (response.status) {
					this.banner = response.data[0].banner;
					if($(".swiper-container").find('.swiper-wrapper')){
						var mySwiper = new Swiper ('.swiper-container', {
				      loop: true,
				      autoplay:4000,
				      // preventClicks : true,//默认true
							// 这样，即使我们滑动之后， 定时器也不会被清除
			　			autoplayDisableOnInteraction : false,
							observer:true,//修改swiper自己或子元素时，自动初始化swiper
					    observeParents:true,//修改swiper的父元素时，自动初始化swiper
						})  
					};
				}else{
					this.banner = ['banner1.jpg','banner2.jpg','banner3.jpg'];
				} 			
			})
		},
		mounted() { 
			// console.log(this.$refs.slide0)  挂载实例化后 有数组才可以轮播   
			var mySwiper = new Swiper ('.swiper-container', {
				loop: true,
	      autoplay:4000,
	      // preventClicks : true,//默认true
				// 这样，即使我们滑动之后， 定时器也不会被清除
　			autoplayDisableOnInteraction : false,
				observer:true,//修改swiper自己或子元素时，自动初始化swiper
		    observeParents:true,//修改swiper的父元素时，自动初始化swiper
			})  
		}
        
	}
</script>

 