<template>
	<div class="userSetting">
		<div class="setting-head">
			<i class="iconfont icon-xiangzuo sshi" @click="goback"></i>
			<span>设置</span>
		</div>
		<div class="setting-body">
			<div class="changePsd" @click="gopasswd">
				<span>修改密码</span>
				<i class="iconfont icon-xiangyou01"></i>
			</div>
			<div class="feedBack" @click="gofeedback">
				<span>用户反馈</span>
				<i class="iconfont icon-xiangyou01"></i>
			</div>
			<div class="binding-phone">
				<span>绑定手机</span>
				<i class="iconfont icon-xiangyou01"></i>
			</div>
			<div class="log-out" @click="logout">
				<span>退出登录</span>
			</div>
		</div>
		<add-bottom></add-bottom>
	</div>
</template>

<script>
	import './userStting.scss'
	import '../../../assets/font/iconfont.css'
	import bottom from '../../home/bottom/bottom.vue'
	import $ from 'jquery'
	import '../../../assets/jquery-confirm/jquery-confirm.js'
	import '../../../assets/jquery-confirm/jquery-confirm.css'

	export default{
		components:{
			'add-bottom':bottom
		},
		methods:{
			goback:function(){
				window.history.back()
			},
			logout:function(){
				$.confirm({
					title: '',
					content: '确定退出登录？',
					confirm: function(){
						// 删除本地存储
						window.localStorage.removeItem('loginStatus');
				 		window.location.href="/#/slogin"
					},
					cancel: function(){
						
					}
				});
				
			},
			gofeedback:function(){
				window.location.href="/#/feedback"
			},
			gopasswd:function(){
				window.location.href="/#/passwd"
			}
		}
	}
</script>