// import 'babel-polyfill' //会使打包之后的文件增大！
import Vue from 'vue'
import VueRouter from 'vue-router'

import Container from './Container.vue'
import C0 from './C0.vue'
import C1 from './C1.vue'
import C2 from './C2.vue'

Vue.use(VueRouter);

const routes = [
	{ path: '/', component: Container },
	// { path: '/c1', component: C1 },
	// { path: '/c2', component: C2 }
]
const router = new VueRouter({
	routes
})


// 创建根组件
var app = new Vue({
	// el: '#app',
	render:h=> h( Container ),
	router
}).$mount('#app');