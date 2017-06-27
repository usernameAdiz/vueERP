import Vue from 'vue'
import VueRouter from 'vue-router'
import http from '../utils/HttpClient'

import ErpHomeComponent from '../components/erphome/erphome.vue'
// import LoginComponent from '../components/login/login.vue'
import LoginComponent2 from '../components/login2/login2.vue'
import erpadd from '../components/erpadd/erpadd.vue'
import Datagrid from '../components/datagrid/datagrid.vue'
import dataset from '../components/dataset/dataset.vue'


//依赖
Vue.use(VueRouter)

const router = new VueRouter({
	routes: [{
		path: '/',
		name: 'home',
		component: ErpHomeComponent,
		children: [{
			path: '/erpadd',
			name: 'erpadd',
			component: erpadd
		},{
			path:'/datagrid',
			name:'datagrid',
			component:Datagrid,
			children:[{
				path:'/dataset',
				name:'dataset',
				component:dataset
			}]
		}]
	},{
		path:'/login2',
		name:'login2',
		component:LoginComponent2
	}]
})

// 对将要进入的路由进行权判断
// router.beforeEach((to, from, next) =>{
// 	// console.log(to);
// 	// if(to.path.indexOf('login') < 0 && !window.localStorage.getItem('access_token')){
// 	// 	router.replace('login');
// 	// 	next();
// 	// } 
// 	// next();

// 	//本地存储方式

// 	if(!window.localStorage.getItem('ad_allow')){
// 		router.replace('login');
// 		next();
// 	}
// 	next();
// })

export default router