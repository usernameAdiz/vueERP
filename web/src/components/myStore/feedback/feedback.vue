<template>
	<div class="feedback">
		<div class="feed-head">
			<i class="iconfont icon-xiangzuo sshi" @click="goback"></i>
			<span>用户反馈</span>
		</div>
		<div class='feed-body'>
			<div class="feedmsg">
				<textarea  id="feedbackmsg" placeholder="请描述一下您遇到的问题" v-model="feedbackMsg"></textarea>
			</div>
			<div class="send-box" >
				<span class="subBtn" @click="feedback">提交</span>
			</div>
		</div>
		<feed-bottom></feed-bottom>
	</div>
</template>

<script>
	import './feedback.scss'
	import '../../../assets/font/iconfont.css'
	import bottom from '../../home/bottom/bottom.vue'
	import $ from 'jquery'
	import '../../../assets/jquery-confirm/jquery-confirm.js'
	import '../../../assets/jquery-confirm/jquery-confirm.css'

	export default{
		components:{
			'feed-bottom':bottom
		},
		data:function(){
			return{
				feedbackMsg:''
			}
		},
		methods:{
			goback:function(){
				window.history.back()
			},
			feedback:function(){
				if(this.feedbackMsg==''){
					$.alert('请输入要反馈的问题！')
				}else{
					$.alert('提交成功，感谢您的反馈！')
				}
			}
		}
	}
</script>