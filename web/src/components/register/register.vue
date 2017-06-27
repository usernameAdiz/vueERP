<template>
	<div id="shi-register">
		<div class="reg-head">
			<i class="iconfont icon-shouyeshouye shhi" @click="gohome"></i>
			<span>会员注册</span>
			<i class="goLogin" @click="gologin">登录</i>
		</div>
		<div class="reg-body">
			<div>
				<ul class="registerlist">
					<li>
						<label for="acc-name">用 户 名</label>
						<input type="text" placeholder="请输入用户名" id="acc-name" v-model="accName">
					</li>
					<li>
						<label for="acc-pwd">设置密码</label>
						<input type="password" placeholder="请输入密码" id="acc-pwd" v-model="accPwd">
					</li>
					<li>
						<label for="aff-pwd">设置密码</label>
						<input type="password" placeholder="请再次输入密码" id="aff-pwd" v-model="conPwd">
					</li>
					<li>
						<label for="referrer">推 荐 人</label>
						<input type="text" placeholder="没有可不填" id="referrer">
					</li>
					<li>
						<label for="shop-no">店 铺 号</label>
						<input type="text" placeholder="没有可不填" id="shop-no">
					</li>
				</ul>
				<div class="reg-deal">
					<input type="checkbox" checked> 同意 

					<span>用户注册协议</span>
				</div>
				<div class="registerbox">
					<span class="regsterBtn" @click="shiRegister">注册</span>
				</div>
			</div>
		</div>
		<reg-bottom></reg-bottom>
	</div>
</template>

<script>
	import './register.scss'
	import '../../assets/font/iconfont.css'
	import bottom from '../home/bottom/bottom.vue'
	import $ from 'jquery'
	import '../../assets/jquery-confirm/jquery-confirm.js'
	import '../../assets/jquery-confirm/jquery-confirm.css'
	import Http from '../../utils/HttpClient.js'
	import router from '../../router'

	export default{
		components:{
			'reg-bottom':bottom
		},
		data:function(){
			return{
				accName:'',
				accPwd:'',
				conPwd:''
			}
		},
		methods:{
			gohome:function(){
				// window.location.href="/#/";
				router.push({name: 'home'})

			},
			gologin:function(){
				// window.location.href="/#/slogin";
				router.push({name: 'slogin'})

			},
			shiRegister:function(){
				if(this.accName == ''){
					$.alert('用户名不能为空！')
				}else if(this.accPwd == ''){
					$.alert('密码不能为空！')
				}else if(this.accPwd!=this.conPwd){
					$.alert('输入的密码不一致！')
				}else{
					Http.post('shiRegister',{
						accountName:this.accName,
						password:this.accPwd
					}).then(response=>{
						if(!response.status){
							$.alert('用户名已被注册！');
						}else{
							$.alert({
							    title: '',
							    content: '注册成功！',
							    confirm: function(){
							        router.push({name: 'slogin'})

							    }
							});
						}
					})
				}
			}
		}
	}
</script>