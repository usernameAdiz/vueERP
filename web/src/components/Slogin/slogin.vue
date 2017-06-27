<template>
	<div id="shi-login">
		<div class="log-head">
			<i class="iconfont icon-shouyeshouye shhi" @click="gohome"></i>
			<span>会员登录</span>
			<i class="goregister" @click="goregister">注册</i>
		</div>	
		<div class="log-body">
			<div>
				<ul>
					<li>
						<label for="acc-name">账  户</label>
						<input type="text" placeholder="请输入用户名" id="acc-name" v-model="username">
					</li>
					<li>
						<label for="acc-name">密  码</label>
						<input type="password" placeholder="请输入登录密码" id="acc-name" v-model="password">
					</li>							
				</ul>
			</div>
			<div class="loginbox">
				<span class="loginBtn" @click="shiLogin">登录</span>
			</div>
		</div>
		<log-bottom></log-bottom>
	</div>
</template>

<script>
	import './slogin.scss'
	import '../../assets/font/iconfont.css'
	import bottom from '../home/bottom/bottom.vue'
	import $ from 'jquery'
	import '../../assets/jquery-confirm/jquery-confirm.js'
	import '../../assets/jquery-confirm/jquery-confirm.css'
	import Http from '../../utils/HttpClient.js'
	import router from '../../router'
	export default{
		components:{
			'log-bottom':bottom
		},
		data:function(){
			return{
				username:'',
				password:''
			}
		},
		methods:{
			gohome:function(){
				// window.location.href="/#/";
				router.push({name: 'home'})
			},
			goregister:function(){
				// window.location.href="/#/register";
				router.push({name: 'register'})
			},
			shiLogin:function(){
				let userMsg= {
						username:this.username,
						password:this.password
					}
				if(this.username==''){
					$.alert('用户名不能为空！')
				}else if(this.password==''){
					$.alert('密码不能为空！')
				}else{
					Http.post('shiLogin',userMsg).then(response=>{
						if(!response.status){
							$.alert(response.message)
						}else{
							let _userMsg = JSON.stringify(userMsg)
							window.localStorage.setItem('loginStatus',_userMsg )
							
							$.alert({
								    title: '',
								    content: '登录成功！',
								    confirm: function(){
								        // window.location.href="/#/mystore"
								        router.push({name: 'mystore'})
								    }
							});
						}
					})
				}
			}
		}
	}
</script>