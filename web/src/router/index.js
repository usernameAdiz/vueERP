import Vue from 'vue'
import VueRouter from 'vue-router'
import http from '../utils/HttpClient'

import HomeComponent from '../components/home/home.vue'
import LoginComponent from '../components/login/login.vue'
import SearchComponent from '../components/search/search.vue'
//list
import ListComponent from '../components/list/list.vue'
import LogoComponent from '../components/list/logo/logo.vue'
import TangComponent from '../components/list/tang/tang.vue'
import NvbaoComponent from '../components/list/nvbao/nvbao.vue'
import NanbaoComponent from '../components/list/nanbao/nanbao.vue'
import TardemarkComponent from '../components/list/trademark/trademark.vue'
import TravelComponent from '../components/list/travel/travel.vue'
import UseComponent from '../components/list/use/use.vue'
import BackpackComponent from '../components/list/backpack/backpack.vue'
import DermalComponent from '../components/list/dermal/dermal.vue'
import StudentComponent from '../components/list/student/student.vue'
import StockComponent from '../components/list/stock/stock.vue'
import FranchiseeComponent from '../components/list/franchisee/franchisee.vue'
//list-list

//
import MyStore from '../components/myStore/myStore.vue'
import MyOrder from '../components/myStore/myOrder/myOrder.vue'
import MyAddress from '../components/myStore/myAddress/myAddress.vue'
import NewAddress from '../components/myStore/newAddress/newAddress.vue'
import UserSetting from '../components/myStore/userSetting/userStting.vue'
import Register from '../components/register/register.vue'
import Slogin from '../components/Slogin/slogin.vue'
import Feedback from '../components/myStore/feedback/feedback.vue'
import Passwd from '../components/myStore/passwd/passwd.vue'
import Favorites from '../components/myStore/favorites/favorites.vue'
import FavoritesStore from '../components/myStore/favoritesStore/favoritesStore.vue'
import Footmark from '../components/myStore/footmark/footmark.vue'
import listList from '../components/list-list/list-list.vue'
import MyOrder2 from '../components/myStore/myOrder/order2/myOrder2.vue'
import MyOrder3 from '../components/myStore/myOrder/order3/myOrder3.vue'
import MyOrder4 from '../components/myStore/myOrder/order4/myOrder4.vue'
//
import GoodsComponent from '../components/goods/goods.vue'
import CarComponent from '../components/good_car/good_car.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [{
		path: '/',
		name: 'home',
		component: HomeComponent,
		children: []
	},{
		path: '/login',
		name: 'login',
		component: LoginComponent
	},{
		path:'/search',
		name: 'search',
		component:SearchComponent,
	},{
		path:'/list/logo',
		name:'list',
		component:ListComponent,
		children:[{
			path:'/logo',
			name:'logo',
			component:LogoComponent
		},{
			path:'/tang',
			name:'tang',
			component:TangComponent
		},{
			path:'/nvbao',
			name:'nvbao',
			component:NvbaoComponent
		},{
			path:'/nanbao',
			name:'nanbao',
			component:NanbaoComponent
		},{
			path:'/trademark',
			name:'trademark',
			component:TardemarkComponent
		},{
			path:'/travel',
			name:'travel',
			component:TravelComponent
		},{
			path:'/use',
			name:'use',
			component:UseComponent
		},{
			path:'/backpack',
			name:'backpack',
			component:BackpackComponent
		},{
			path:'/dermal',
			name:'dermal',
			component:DermalComponent
		},{
			path:'/student',
			name:'student',
			component:StudentComponent
		},{
			path:'/stock',
			name:'stock',
			component:StockComponent
		},{
			path:'/franchisee',
			name:'franchisee',
			component:FranchiseeComponent
		}]
	},{
		path:'/listList',
		name:'listList',
		component:listList
	},{
		path: '/mystore',
		name: 'mystore',
		component:MyStore
	},{
		path:'/myorder',
		name:'myorder',
		component:MyOrder,
		children:[{
			path: '/myorder2',
			name: '/myorder2',
			component:MyOrder2
		},{
			path: '/myorder3',
			name: '/myorder3',
			component:MyOrder2
		},{
			path: '/myorder4',
			name: '/myorder4',
			component:MyOrder2
		}]
	},{
		path:'/myaddress',
		name:'myaddress',
		component:MyAddress
	},{
		path:'/newaddress',
		name:'newaddress',
		component:NewAddress
	},{
		path:'/setting',
		name:'setting',
		component:UserSetting
	},{
		path:'/register',
		name:'register',
		component:Register
	},{
		path:'/slogin',
		name:'slogin',
		component:Slogin
	},{
		path:'/feedback',
		name:'feedback',
		component:Feedback
	},{
		path:'/passwd',
		name:'passwd',
		component:Passwd
	},{
		path:'/favorites',
		name:'favorites',
		component:Favorites
	},{
		path:'/favoritesStore',
		name:'favoritesStore',
		component:FavoritesStore
	},{
		path:'/footmark',
		name:'footmark',
		component:Footmark
	},{
		path: '/goods',
		name: 'goods',
		component: GoodsComponent
	},{
		path: '/car',
		name: 'car',
		component: CarComponent
	}]
})

// 对将要进入的路由进行权判断
// router.beforeEach((to, from, next) =>{
// 	// console.log(to);
// 	if(to.path.indexOf('login') < 0 && !window.localStorage.getItem('access_token')){
// 		router.replace('login');
// 		next();
// 	} 
// 	next();
// })

export default router