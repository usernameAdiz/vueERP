<template>
	<div class="bag_container">
		<div class="searchmain">
			<div class="searchtop clearfix">
				<i class="iconfont icon-xiangzuo" @click="goback"></i>
				<div class="searchbox">
					<span>
						<i class="iconfont icon-sousuo-sousuo"></i>
					</span>
					<input type="text" v-model="search_name" placeholder="请输入搜索关键词">
				</div>
				<span class="insearch" @click="search(search_name)"><router-link :to="'listList/?keyword='+search_name">搜索</router-link></span>
			</div>
			<div class="searchHot searchitme">
				<p class="searchTitle">热门搜索</p>
				<span v-for="item in serachHot"  @click="search(item)"><router-link :to="'listList/?keyword='+item">{{item}}</router-link></span>
			</div>
			<div class="searchHistory searchitme">
				<p class="searchTitle">历史记录</p>
				<span v-for="item in searchOld" @click="search(item)"><router-link :to="'listList/?keyword='+item">{{item}}</router-link></span>
			</div>
			<div class="clearBox">
				<div class="clearHistory" @click="clearSearch">清空历史</div>
			</div>
		</div>
		<bottom></bottom>
	</div>
</template>

<script>
	import './search.scss'
	import bottom from '../home/bottom/bottom.vue'
	import http from '../../utils/HttpClient'

	export default {
		components: {
			'bottom': bottom
		},
		data:function(){
			return {
				search_name:null,
				serachHot:[],
				searchOld: window.localStorage.getItem('searchHistory')!== null ? JSON.parse(window.localStorage.getItem('searchHistory')).his : [],
			}
		},
		created(){
			http.get('searchHot', {'item':'searchhot'}).then(response => {
				if (response.status) {
					this.serachHot = response.data[0].searchhot;
				}else{
					this.serachHot = [];
				} 			
			});

		},
		methods:{
			goback:function(){
				window.history.back();
			},
			search:function(search_name){
				var storagehis = JSON.parse(window.localStorage.getItem('searchHistory'));
				
				if (search_name!==null&&storagehis==null) {
					// 如果搜索词不为空  且为保存过搜索词
					var his = JSON.stringify({his:[search_name]});
					window.localStorage.setItem('searchHistory',his);
					// 提取赋值
					this.searchOld = JSON.parse(window.localStorage.getItem('searchHistory')).his;
				}else if(search_name!==null&&storagehis!==null){
					// 已保存过
					if (storagehis.his.length>8) {
						// 枝记录8条历史记录
						storagehis.his.slice(0,-1)
					}
					// 查找不到
					if (storagehis.his.indexOf(search_name) == -1) {
						storagehis.his.unshift(search_name);
					}else if(storagehis.his.indexOf(search_name) !== -1){
						storagehis.his.map(function(item,idx){
							if (search_name == item) {
								storagehis.his.splice(idx,1);	
								storagehis.his.unshift(search_name);
								return false;			
							}
						})
					}
					window.localStorage.setItem('searchHistory',JSON.stringify(storagehis));

					this.searchOld = JSON.parse(window.localStorage.getItem('searchHistory')).his;
				}

				// 搜索
				// http.get('search', {'keyword':search_name}).then(response => {
				// 	console.log(response)
				// 	if (response.status) {
						
				// 	}else{
						
				// 	} 			
				// });

			},
			clearSearch:function(){
				window.localStorage.removeItem('searchHistory');
				this.searchOld = [] ;
			}
		}
	}
</script>
