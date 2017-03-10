// import 'babel-polyfill' //会使打包之后的文件增大！
import Vue from 'vue'
import VueRouter from 'vue-router'

import Container from './Container.vue'
// import C0 from './C0.vue'
import C2 from './C2.vue'
import C21 from './C21.vue'
import C3 from './C3.vue'
import C31 from './C31.vue'

Vue.use(VueRouter);

const routes = [
	{
		path: '/c2',
		// component: C2,
		// 重定向
		redirect: "/c2/c21", 
		children:[
			{
				path:"c21",
				components: {
					"c21": C21
				},
			}
		]
	},
	{
		path: '/c3',
		component: C3,
		beforeEnter (to, from, next) {
		// 在渲染该组件的对应路由被 confirm 前调用
		// 不！能！获取组件实例 `this`
		// 因为当钩子执行前，组件实例还没被创建
			console.info("独享钩子.c3.beforeEnter")
			next();
		},
		children:[
			{
				path:"c31/:id",component: C31,
				meta: { requiresAuth: true, tip:"元信息就是一个常量" }
			}
		]
	}
]
const router = new VueRouter({
	routes
})

// 注册钩子
router.beforeEach((to, from, next) => {
	console.info("全局路由钩子.beforeEach", to, from);
	console.log("全局路由钩子.beforeEach.this", this );
	
	next();
})

// 创建根组件
var app = new Vue({
	// el: '#app',
	render:h=> h( Container ),
	router
}).$mount('#app');