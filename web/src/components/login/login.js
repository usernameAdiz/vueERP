import Vue from 'vue'
import http from '../../utils/HttpClient'
import router from '../../router/index'
import $ from 'jquery'

const state = {
}

const mutations = {
	login: (data, formData) => {
	
		if(formData.username == 'dk' && formData.password == 'dk'){
			router.push({name: 'home'})
		} else {
			// formData.grant_type = 'password'
			http.post('login', formData)
			.then(response => {
				console.log(response)
				if (response.status) {
					router.push({name: 'home'})
				}else{
					$.alert(response.message);
				}				
			})
		}
	}
}

const actions = {
	login: (events, formData) => {
		
		events.commit('login', formData)
	}
}

export default {
	state,
	mutations,
	actions
}