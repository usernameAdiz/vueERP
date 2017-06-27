<template>
	<div class="templatemo-bg-gray">
		<div class="container">
			<div class="col-md-12">
				<h1 class="margin-bottom-15">Management System Login</h1>
				<form class="form-horizontal templatemo-container templatemo-login-form-1 margin-bottom-30">
			        <div class="form-group">
			          <div class="col-xs-12">		            
			            <div class="control-wrapper">
			            	<label for="username" class="control-label fa-label"><i class="fa iconfont icon-username"></i></label>
			            	<input type="text" class="form-control"  v-model="username" name="username" placeholder="Username" required>
			            </div>		            	            
			          </div>              
			        </div>
			        <div class="form-group">
			          <div class="col-md-12">
			          	<div class="control-wrapper">
			            	<label for="password" class="control-label fa-label"><i class="fa iconfont icon-password"></i></label>
			            	<input type="password" class="form-control" v-model="pwd" name="password" placeholder="Password" required>
			            </div>
			          </div>
			        </div>
			        <div class="form-group">
			          <div class="col-md-12">
		             	<div class="checkbox control-wrapper">
		                	<label>
		                  		<input type="checkbox"> Remember me
	                		</label>
		              	</div>
			          </div>
			        </div>
			        <div class="form-group">
			          <div class="col-md-12">
			          	<div class="control-wrapper">
			          		<input type="button" value="Log in" class="btn btn-info" @click="login">
			          		<a href="forgot-password.html" class="text-right pull-right">Forgot password?</a>
			          	</div>
			          </div>
			        </div>
			        <hr>
			      </form>
			      <div class="text-center">
			      	<a href="create-account.html" class="templatemo-create-new">Create new account <i class="fa fa-arrow-circle-o-right"></i></a>	
			      </div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import './login2.scss'
	import './fonts/iconfont.css'
	import http from '../../utils/HttpClient'
	import router from '../../router'

	export default{
		data: function(){
			return {
				username: '',
				pwd: ''
			}
		},
		methods: {
			login: function(event){
				 http.post('login/index',{username: this.username, password: this.pwd})
                .then(response => {
            		$.confirm({
                        title: '',
                        content: '登陆成功！',
                        confirm: function(){
                           router.push({name:'home'})
                        },
                        cancel: function(){
                        }
                    });
                })      
				// if($('form').valid()){
				// 	this.$store.dispatch('login', {username: this.username, password: this.pwd})
				// }
				window.localStorage.setItem('ad_allow',this.username)
			}
			// ...mapActions(['login'])
		}
	}
</script>