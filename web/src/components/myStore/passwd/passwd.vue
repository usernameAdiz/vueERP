<template>
	<div class="passwd">
		<div class="passwd-head">
			<i class="iconfont icon-xiangzuo sshi" @click="goback"></i>
			<span>修改密码</span>			
		</div>
		<div class="passwd-body">
			<div>
				<ul class="changewd">
					<li>
						<label for="username">账&nbsp;&nbsp;号</label>
						<input type="text" id="username" placeholder="请输入用户名" v-model="accountName">
					</li>

					<li>
						<label for="newCode">新密码</label>
						<input type="password" id="newCode" placeholder="请输入新密码" v-model="newCode">
					</li>
					<li>
						<label for="benewCode">确认密码</label>
						<input type="password" id="benewCode" placeholder="再次确认新密码" v-model="benewCode">
					</li>
				</ul>
			</div>
			<div class="changePwd">
				<span class="changePassword" @click="passwd">修改密码</span>
			</div>
		</div>
		<pass-bottom></pass-bottom>
	</div>
</template>

<script>
	import './passwd.scss'
	import '../../../assets/font/iconfont.css'
	import bottom from '../../home/bottom/bottom.vue'
	import $ from 'jquery'
	import '../../../assets/jquery-confirm/jquery-confirm.js'
	import '../../../assets/jquery-confirm/jquery-confirm.css'
	import Http from '../../../utils/HttpClient.js'
	import router from '../../../router'


	export default{
		components:{
			'pass-bottom':bottom
		},
		data:function(){
			return{
				accountName:'',
				newCode:'',
				benewCode:''
			}
		},
		methods:{
			goback:function(){
				window.history.back()
			},
			passwd:function(){
				if(this.username==''){
					$.alert('用户不能空！')
				}else if(this.newCode==''){
					$.alert('新密码不能为空')
				}else if(this.benewCode==''){
					$.alert('确认密码不能为空')
				}else if(this.newCode!=this.benewCode){
					$.alert('输入的密码不一致')
				}else{
					Http.post('passwd',{
						accountName:this.accountName,
						password:this.newCode
					}).then(response=>{
						if(!response.status){
							$.alert('用户名错误')
						}else{
							$.alert({
							    title: '',
							    content: '密码修改成功，请重新登录',
							    confirm: function(){
							        // window.location.href="/#/slogin"
							        router.push({name: 'slogin'})

							    }
							});
						}
					})
				}
			}
		},
		created(){
			// 显示用户名
			let _user = JSON.parse(window.localStorage.getItem('loginStatus')).username;
			_user?_user:'';
			this.accountName = _user;
		}
	}
</script>